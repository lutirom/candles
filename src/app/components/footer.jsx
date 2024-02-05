import Link from 'next/link';

export default function Footer() {

    return (
        <footer className="container mx-auto py-8 px-4">
            <div className='border-b border-gray-200 pb-6'>
                <div className="uppercase text-4xl text-center">Candles</div>
                <div className="flex items-center justify-center gap-5 pt-4">
                    <Link href={'/'}>
                        About Us
                    </Link>
                    <Link href={'#'}>
                        Contact
                    </Link>
                    <Link href={'#'}>
                        Pages
                    </Link>
                    <Link href={'#'}>
                        Blog
                    </Link>
                </div>
            </div>
            <p className='mt-3 text-xs text-gray-400 uppercase text-center'>Copyright 2024 ©</p>
        </footer>
    )
}