import Link from "next/link";
import ProductActions from "./ProductActions";
import Image from "next/image";

export default function ProductsGrid({ products, start, end }) {
    return products.slice(start, end).map((product, index) => {
        return (
            <div
                key={product.id}
                className="product-wrapper">
                <div className="product sale">
                    <Link href={`/product/${product.id}/`}>
                        <Image
                            src={product.img}
                            width={600}
                            height={800}
                            alt={`photo of ${product.name}`}
                            className=" aspect-[3/4] object-cover"></Image>
                    </Link>
                    <div className="product-actions">
                        <ProductActions productId={product.id} />
                    </div>
                </div>
                <div className="product-description">
                    <p className="text-lg font-medium">{product.name}</p>
                    <span className="text-gray-500 text-xl">{product.price} грн</span>
                </div>
            </div>
        );
    });
}
