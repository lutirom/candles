import Head from "../components/head";
import "./thank-you.scss";

import ThankYouSection from "./thankYouSection";

export default function ThankYou() {
    return (
        <div className="thank-you h-full">
            <Head name={"Thank you"} />
            <ThankYouSection />
        </div>
    );
}
