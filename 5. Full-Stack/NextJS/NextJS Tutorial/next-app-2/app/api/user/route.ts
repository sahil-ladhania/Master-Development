import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export function GET(){
    return NextResponse.json({
        name : "Sahil Ladhania",
        email : "sahil@gmail.com"
    })
};

export async function POST(req : NextRequest){
    try {
        const body = await req.json();

        if(!body){
            return NextResponse.json({
                Error : "Data Missing !!!"
            });
        }

        const user = await prisma.user.create({
            data : {
                name : body.name,
                email : body.email,
                password : body.password
            }
        });
        
        return NextResponse.json({
            message : "Signup Done...",
            user : user
        })   
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({
            Error : "Error Signing Up !!!",
            error : error
        });
    }
};
