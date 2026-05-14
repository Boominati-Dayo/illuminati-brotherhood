import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Item from "@/models/Item";

export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const items = await request.json();
        
        const createdItems = await Item.insertMany(items);
        
        return NextResponse.json(createdItems, { status: 201 });
    } catch (error) {
        console.error("Error creating items:", error);
        return NextResponse.json({ error: "Failed to create items" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const items = await Item.find({});
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
    }
}