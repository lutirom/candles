import "./login.scss";
import LoginForm from "./components/LoginForm";
import { auth } from "@/auth";

export default async function Login() {
    const session = await auth();
    console.log("🚀 ~ Login ~ session:", session);

    function isLoggedIn() {
        if (session === null) return false;

        return true;
    }

    return (
        <body>
            <main className="bg-gray-100">
                <section className="login-page container mx-auto h-svh relative">
                    <LoginForm isLoggedIn={isLoggedIn()} />
                </section>
            </main>
        </body>
    );
}
