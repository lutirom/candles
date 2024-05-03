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

                    if (!user) {
                        return null;
                    }

                    const validPassword = credentials.password === user.password;

                    if (!validPassword) {
                        return null;
                    }

                    return user;
                } catch (err) {
                    console.error("Something went wrong");
                    throw err;
                }
            },
        }),
    ],
    session: {
        maxAge: 10 * 60 * 60,
    },
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
