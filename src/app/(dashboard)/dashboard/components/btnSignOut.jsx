"use client";

import { signOut } from "next-auth/react";

export default async function BtnSignOut() {
    return (
        <button
            onClick={() => signOut()}
            className="py-1 px-3 border text-sm border-red-500 hover:text-white hover:bg-red-600 rounded-sm leading-none">
            Вийти
        </button>
    );
}
