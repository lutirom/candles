import Image from 'next/image';

export default function ParallaxSection({ color, bgImg, text, children}) {
    
    return (
        <section className={`head ${color && color} ${bgImg && bgImg} text-white`}>
            <div className="flex container mx-auto w-full">
                <div>
                    <h2 style={text.length > 5 ? {fontSize: '16vw'} : {fontSize: '22vw'}}>{text}</h2>
                </div>
                {children}                
            </div>
        </section>
    )
}