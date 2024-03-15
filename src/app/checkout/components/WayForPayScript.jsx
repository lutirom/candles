import { default as Script } from "next/script";

export default function WayForPayScript() {
    return (
        <>
            <Script
                id="widget-wfp-script"
                src="https://secure.wayforpay.com/server/pay-widget.js"
            />
        </>
    );
}
