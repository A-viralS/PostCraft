import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const body = await req.json();
  const { title, desc, img, catSlug } = body;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        title,
        desc,
        img,
        catSlug
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;
  console.log('slug in delete', slug);

  try {
    // Find the post along with its comments
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { comments: true }
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), { status: 404 });
    }

    // Delete the comments associated with the post
    await prisma.comment.deleteMany({
      where: {
        postSlug: slug
      }
    });

    // Delete the post itself
    await prisma.post.delete({
      where: { slug }
    });

    return new NextResponse(JSON.stringify({ message: "Post and associated comments deleted successfully" }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};