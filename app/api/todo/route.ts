import connectToDB from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {


    await connectToDB();
    
    const todo = await TodoModel.find().sort({isDone:"asc", createdAt: "desc"})
    
    return NextResponse.json(todo, { status: 200 })

}
export async function POST(req: NextRequest) {

    await connectToDB();

    const body = await req.json()

    const newTodo = new TodoModel({
        title: body.title,
        isDone: body.isDone

    })

    await newTodo.save();


    return NextResponse.json(body, { status: 201 })

}