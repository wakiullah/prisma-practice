'use client'
import { editFormData, formData } from "@/actions/action"
import { useActionState } from "react"
import Submit from "@/app/components/submit"

export default function EditForm({ product }) {
    console.log(product);

    const initialState = {
        error: {}
    }

    const buindbyid = editFormData.bind(null, product.id)

    const [state, formAction, isPending] = useActionState(buindbyid, initialState)


    return (
        <div className="bg-gray-200 text-gray-900">
            <form action={formAction}>
                <input className="block border mt-9 w-80 p-2" type="text" name="title" placeholder="Type Title" id="" defaultValue={product.title} />
                {state.error.title && <p className="text-red-600">Title is requared!</p>}
                <input className="block border mt-9 w-80 p-2" type="text" name="description" placeholder="Type Description" defaultValue={product.description} /> {state.error.description && <p className="text-red-600">description is requared!</p>}
                <input className="block border mt-9 w-80 p-2" type="number" name="price" defaultValue={product.price} id="" placeholder="Type Price" /> {state.error.price && <p className="text-red-600">Price is requared!</p>}
                <Submit />
            </form>
        </div>
    )
}