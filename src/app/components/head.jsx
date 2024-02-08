import { Libre_Baskerville } from "next/font/google";
import Breadcrumbs from './../components/breadcrumbs';

const baskerville = Libre_Baskerville({subsets: ['latin'], weight: ['400', '700']})

export default function Head({ name }) {
    
    return (
        <section className={`head ${baskerville.className}`}>        
                <h2 className="text-4xl">{name}</h2>
                <Breadcrumbs/>
        </section>
    )
}