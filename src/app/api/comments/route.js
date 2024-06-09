import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const {searchParams} = new URL(req.url);
  const postSlug=searchParams.get('postSlug');
  console.log("postslug in commnet route",postSlug);
  try {
    const comments = await prisma.comment.findMany({
      where:{
        ...(postSlug && {postSlug: postSlug})
    },
    include:{user:true}
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
const session= await getAuthSession();
if(!session){
  return new NextResponse(
    JSON.stringify({ message: "You are not authenticated!" }, { status: 401 })
  );
}
  try {
    const { desc, postSlug } = await req.json();
    const comment = await prisma.comment.create({
   data:{ desc, userEmail: session.user.email, postSlug: postSlug },
    });
    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};