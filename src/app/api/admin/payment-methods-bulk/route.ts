import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import PaymentMethod from "@/models/PaymentMethod";

export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const methods = await request.json();
        
        const created = await PaymentMethod.insertMany(methods);
        
        return NextResponse.json(created, { status: 201 });
    } catch (error) {
        console.error("Error creating payment methods:", error);
        return NextResponse.json({ error: "Failed to create payment methods" }, { status: 500 });
    }
}