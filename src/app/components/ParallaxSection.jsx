import Image from 'next/image';
import '@/assets/_section.scss';

export default function ParallaxSection({ color, bgImg, text, children}) {
    
    return (
        <section className={`head ${color && color} ${bgImg && bgImg} text-white`}>
            <div className="flex container mx-auto w-full">
                <div>
                    <h2 style={text.length > 8 ? {fontSize: '11vw'} : text.length > 5 ? { fontSize: '16vw' } : {fontSize: '22vw'}}>{text}</h2>
                </div>
                {children}                
            </div>
        </section>
    )
}