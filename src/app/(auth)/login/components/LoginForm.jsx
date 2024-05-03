"use client";

import { useFormState } from "react-dom";
import { authenticate } from "./../func/authenticate";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function LoginForm({ isLoggedIn }) {
    const [errorMessage, validateForm] = useFormState(authenticate, undefined);

    const [filledInput, setFilledInput] = useState({
        username: false,
        password: false,
    });

    function fillPass(e) {
        if (e.target.value.length > 0) {
            setFilledInput({
                ...filledInput,
                password: true,
            });
            return;
        }

        setFilledInput({
            ...filledInput,
            password: false,
        });
    }
    function fillUser(e) {
        if (e.target.value.length > 0) {
            setFilledInput({
                ...filledInput,
                username: true,
            });
            return;
        }

        setFilledInput({
            ...filledInput,
            username: false,
        });
    }

    return (
        <form
            action={!isLoggedIn ? validateForm : () => signOut()}
            className="rounded-md shadow-md">
            {!isLoggedIn ? (
                <>
                    <h1 className="text-2xl leading-none text-center">Candles - Login</h1>
                    <p className="text-red-500 mt-4">{errorMessage && errorMessage}</p>
                    <div className="w-full">
                        <div className="input-group relative">
                            <input
                                type="text"
                                name="username"
                                className={`${filledInput.username && "filled"} py-2 w-full border-b-2`}
                                onChange={fillUser}
                            />
                            <label
                                htmlFor="username"
                                className="text-gray-400">
                                Користувач
                            </label>
                        </div>
                        <div className="input-group relative">
                            <input
                                type="password"
                                minLength={6}
                                name="password"
                                className={`${filledInput.password && "filled"} py-2 w-full border-b-2`}
                                onChange={fillPass}
                            />
                            <label
                                htmlFor="password"
                                className="text-gray-400">
                                Пароль
                            </label>
                        </div>
                    </div>
                    <button className="mt-4 btn border border-green-500 hover:text-white hover:bg-green-600">Login</button>
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
