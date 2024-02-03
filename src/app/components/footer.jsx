import Link from 'next/link';

export default function Footer() {

    return (
        <footer className="container mx-auto py-8 px-4">
            <div className='border-b border-gray-200'>
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
        </footer>
    )
}