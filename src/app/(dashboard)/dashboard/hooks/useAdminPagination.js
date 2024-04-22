import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function usePagination({ page, perPage, numberOfPages, size }) {
    //TODO: fix dots if next page is actually next after one that before dots

    const pagination = [];

    const pathName = usePathname();

    for (let i = 1; i <= numberOfPages; i++) {
        if (i === Number(page)) {
            pagination.push(
                <p
                    key={uuidv4()}
                    className="px-4 py-3 text-gray-400 bg-[var(--highlights)] text-white">
                    {i}
                </p>
            );
        } else {
            if (numberOfPages > size) {
                //First page
                if (i === 1 && Number(page) > size + 1) {
                    pagination.push(
                        <Link
                            key={uuidv4()}
                            href={{
                                pathname: pathName,
                                query: {
                                    page: i,
                                    perPage: perPage,
                                },
                            }}
                            className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">
                            {i}
                        </Link>,
                        <span
                            key={uuidv4()}
                            className="px-4 py-3 text-gray-400 ">
                            ...
                        </span>
                    );
                }
                //Last page
                if (i === numberOfPages && Number(page) < numberOfPages - size) {
                    pagination.push(
                        <span
                            key={uuidv4()}
                            className="px-4 py-3 text-gray-400 ">
                            ...
                        </span>,
                        <Link
                            key={uuidv4()}
                            href={{
                                pathname: pathName,
                                query: {
                                    page: i,
                                    perPage: perPage,
                                },
                            }}
                            className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">
                            {i}
                        </Link>
                    );
                }

                // pages before selected
                if (i >= Number(page) - size && i < Number(page)) {
                    pagination.push(
                        <Link
                            key={uuidv4()}
                            href={{
                                pathname: pathName,
                                query: {
                                    page: i,
                                    perPage: perPage,
                                },
                            }}
                            className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">
                            {i}
                        </Link>
                    );
                }
                // pages after selected
                if (i <= Number(page) + size && i > Number(page)) {
                    pagination.push(
                        <Link
                            key={uuidv4()}
                            href={{
                                pathname: pathName,
                                query: {
                                    page: i,
                                    perPage: perPage,
                                },
                            }}
                            className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">
                            {i}
                        </Link>
                    );
                }
            } else {
                pagination.push(
                    <Link
                        key={uuidv4()}
                        href={{
                            pathname: pathName,
                            query: {
                                page: i,
                                perPage: perPage,
                            },
                        }}
                        className="px-4 py-3 text-gray-400 hover:bg-[var(--highlights)] hover:text-white">
                        {i}
                    </Link>
                );
            }
        }
    }

    return pagination;
}
