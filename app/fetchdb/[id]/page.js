import { getProduct } from "@/app/prisma-db";
import EditForm from "./editForm";
import { notFound } from "next/navigation";


export default async function editForm({ params }) {
    const { id } = await params;

    const product = await getProduct(parseInt(id))

    if (!product) {
        notFound()
    }

    return <EditForm product={product} />

}