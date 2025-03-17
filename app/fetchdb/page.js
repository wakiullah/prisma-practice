import Link from "next/link";
import { getProducts } from "../prisma-db";
import { deleteProductAction } from "@/actions/action";

export default async function fetchDB() {

    const products = await getProducts()

    return (
        <section>
            <ul>
                {products.map(product => <div key={product.id}>
                    <li className="bg-gray-200 text-gray-900 mt-5" >
                        <Link key={product.id} href={`/fetchdb/${product.id}`}>
                            <div>
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                                <h4>{product.price}</h4>
                            </div></Link>
                        <form action={deleteProductAction.bind(null, product.id)}>
                            <button className="p-2 bg-pink-500 cursor-pointer" type="submit">Delete</button>
                        </form >
                    </li ></div>
                )}
            </ul>
        </section >
    )

}