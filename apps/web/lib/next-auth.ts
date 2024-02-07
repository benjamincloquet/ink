import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import env from "@/env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@repo/database";
import { getServerSession as nextAuthGetServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getServerSession = () => nextAuthGetServerSession(authOptions);
