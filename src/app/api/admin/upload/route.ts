import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
    await cookies();
    await headers();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        
        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `artifacts/${fileName}`;

        const { error } = await supabase.storage
            .from("media")
            .upload(filePath, file, {
                cacheControl: "3600",
                upsert: false,
                contentType: file.type,
            });

        if (error) {
            console.error("Supabase upload error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const { data: urlData } = supabase.storage
            .from("media")
            .getPublicUrl(filePath);

        return NextResponse.json({ 
            url: urlData.publicUrl,
            path: filePath 
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error("Upload error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}