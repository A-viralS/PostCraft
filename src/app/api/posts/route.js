import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { skipMiddlewareUrlNormalize } from "../../../../next.config";

export const GET = async (req) => {


    const {searchParams} = new URL(req.url)
    const page = searchParams.get('page')
    const POSTS_PER_PAGE = 2
    const query={
        take: POSTS_PER_PAGE,
        skip: (page - 1) * POSTS_PER_PAGE,}
       
  try {
    const [posts,count]=await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count()
    ])
    console.log("Posts:", posts);
    console.log("Total Count:", count);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};