import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "./connect"
import { getServerSession } from "next-auth"



export const authOptions = 
{
    adapter: PrismaAdapter(prisma),//this can also be directly made here. see next auth prisma documentation. we are using this way to do cache and avoid multiple connections
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        
    ],
}
export const getAuthSession=()=>getServerSession(authOptions)