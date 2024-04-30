"use client";

import { useFormState } from "react-dom";
import { authenticate } from "./../func/authenticate";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function LoginForm({ isLoggedIn }) {
    console.log("🚀 ~ LoginForm ~ isLoggedIn:", isLoggedIn);

    const [errorMessage, validateForm] = useFormState(authenticate, undefined);

    return (
        <form
            action={!isLoggedIn ? validateForm : () => signOut()}
            className="rounded-md shadow-md">
            <p className="text-red-500">{errorMessage && errorMessage}</p>

            {!isLoggedIn ? (
                <>
                    <h1 className="text-2xl leading-none text-center">Candles - Login</h1>
                    <div className="w-full">
                        <div className="input-group relative">
                            <input
                                type="text"
                                name="username"
                                className="py-2 w-full border-b-2"
                            />
                            <label
                                htmlFor="username"
                                className="text-gray-400">
                                Користувач
                            </label>
                        </div>
                        <div className="input-group relative">
                            <input
                                type="text"
                                name="password"
                                className="py-2 w-full border-b-2"
                            />
                            <label
                                htmlFor="password"
                                className="text-gray-400">
                                Пароль
                            </label>
                        </div>
                    </div>
                    <button className="btn border border-green-500 hover:text-white hover:bg-green-600">Login</button>
                </>
            ) : (
                <>
                    <p className="text-5xl"> Hello Name</p>
                    <div className="w-full flex justify-between">
                        <Link
                            href={"/dashboard"}
                            className="btn border border-gray-500 hover:text-white hover:bg-gray-600">
                            Go to Dashboard
                        </Link>
                        <button className="btn border border-red-500 hover:text-white hover:bg-red-600">Sign out</button>
                    </div>
                </>
            )}
        </form>
    );
}
