import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

export default function Pagination({ page, perPage, products }) {

    const pagination = []

    for (let i = 1; i <= Math.ceil(products.length/perPage); i++) {

        if (i === Number(page)) {

            pagination.push(<p key={uuidv4()} style={{ lineHeight: '1' }} className="px-4 py-3 text-gray-400 bg-[var(--highlights)] text-white">{i}</p>);

        } else {

            pagination.push(<Link key={uuidv4()} href={{ 
                pathname: '/shop',
                query: {
                    page: i,
                    perPage: perPage
                }
            }} style={{ lineHeight: '1' }} className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">{i}</Link>)
        }
    }

    return (
        <>

            {
                pagination
            }

        </>
    )
}