import { Nunito } from "next/font/google";

import "./assets/contact.scss";
import Breadcrumbs from "../components/breadcrumbs";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function Contact() {
    return (
        <div className="contacts-page">
            <section className="head">
                <h1 className={`text-4xl font-thin ${nunito.className}`}>Contact Us</h1>
                <Breadcrumbs />
            </section>
            <section className="contact-block text-black">
                <div className="container mx-auto text-center ">
                    <h2 className="text-3xl">Our Information</h2>
                    <p className="text-sm mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, optio.</p>
                    <div className="flex gap-8 text-left mt-8">
                        <div className="[&>p]:text-gray-500 [&>h3]:text-xl w-3/5">
                            <h3 className="border-b w-1/2 md:w-full mx-auto md:mx-0 mt-8">Headquater</h3>
                            <p>Address</p>
                            <p>City</p>
                            <p>38066666666</p>
                            <h3 className="border-b w-1/2 md:w-full mx-auto md:mx-0 mt-8">CaliforniaOffice</h3>
                            <p>Address</p>
                            <p>City</p>
                            <p>38066666666</p>
                            <h3 className="border-b w-1/2 md:w-full mx-auto md:mx-0 mt-8">CaliforniaOffice</h3>
                            <p>Address</p>
                            <p>City</p>
                            <p>38066666666</p>
                        </div>
                        <Image
                            src={"/contact-bg-3.png"}
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
