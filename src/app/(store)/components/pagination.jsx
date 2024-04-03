import usePagination from "@/app/hooks/usePagination";

export default function Pagination({ page, perPage, products }) {
    const numberOfPages = Math.ceil(products.length / perPage);

    const params = {
        page: page,
        perPage: perPage,
        numberOfPages: numberOfPages,
        size: 2,
    };

    const pagination = usePagination(params);

    return <>{pagination}</>;
}
