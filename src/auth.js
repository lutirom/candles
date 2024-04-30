import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./app/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null;

                    user = await getUser(credentials.username, credentials.password);
                    console.log("🚀 ~ authorize: ~ user:", user);

                    if (!user) {
                        throw Error("Credentials errors");
                    }

                    return user;
                } catch (err) {
                    throw new Error("Something wrong");
                }
            },
        }),
    ],
});

async function getUser(username, password) {
    const user = await prisma.admin_users.findUnique({
        where: {
            username: username,
        },
        select: {
            username: true,
            password: true,
        },
    });

    if (!user) {
        return undefined;
    }

    return user;
}
