import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {


    const posts= await prisma.post.findMany({
        include : {user:true},
        orderBy:{views:"desc"},
        take:1
    });
    // console.log(posts);
    return new NextResponse(JSON.stringify( posts , { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};


