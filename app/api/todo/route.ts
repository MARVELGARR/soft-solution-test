
import { prisma } from '@/prisma/prisma';
import { NextResponse } from 'next/server';



export async function POST(req: Request){

    const data = await req.json()

    const { text, completed} : {text:string, completed: boolean}= data

    try{
        const post =  await prisma.todo.create({
            data:{
                body: text,
                completed: completed,

            }
        })
        if(post){
            return NextResponse.json({message: `post created `, post}, {status: 201})
        }
        else{
            return NextResponse.json({message: `post Not created `, post}, {status:400})
        }
    }
    catch(error){
        return NextResponse.json({message: "something went wrong", error}, {status: 500})
    }

}



export async function GET() {
    try {
      const todos = await prisma.todo.findMany();
  
      // Check if there are no todos
      if (todos.length === 0) {
        return NextResponse.json({ message: "No todos found", todos }, { status: 200 });
      }
  
      return NextResponse.json({ todos }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
    }
  }
  
