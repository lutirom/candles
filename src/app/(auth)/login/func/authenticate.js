"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
    try {
        await signIn("credentials", formData);
    } catch (err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return "Не правильний логін або пароль";
                default:
                    return "Something went wrong";
            }
        }

        console.log("Authentication failed");
        throw err;
    }
}
