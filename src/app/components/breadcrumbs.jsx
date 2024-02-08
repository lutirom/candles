'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function Breadcrumbs() {

    const currentPath = usePathname();

    let url = '';

    const pathArray = currentPath.split('/').map((item, index) => {
    
        if (item === '') {
            return {
                name: 'home',
                path: '/'
            }
        }

        if (item === 'product') {
            url += '/shop'

            return {
                name: 'shop',
                path: url
            }
        }

        url += '/' + item

        return{
            name: item,
            path: url
        }
    });
    
    return (
        <div>
            {pathArray.map((item, index) => {

                if (index === pathArray.length - 1) {
                    return <p key={uuidv4()} className="inline capitalize italic">{item.name}</p>
                }

                return <Link key={uuidv4()} href={item.path} className="inline capitalize italic">{item.name}/</Link>
            })}
        </div>
    )
}