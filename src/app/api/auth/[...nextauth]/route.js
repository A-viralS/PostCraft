
import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST} 