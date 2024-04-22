"use client";

import useAdminPagination from "./../hooks/useAdminPagination";

export default function Pagination({ page, perPage, products }) {
    const numberOfPages = Math.ceil(products.length / perPage);

    const params = {
        page: page,
        perPage: perPage,
        numberOfPages: numberOfPages,
        size: 2,
    };

    const pagination = useAdminPagination(params);

    return <>{pagination}</>;
}
