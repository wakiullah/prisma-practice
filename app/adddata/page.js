'use client'
import { redirect } from "next/navigation"
import { addProduct } from "../prisma-db"
import Submit from "../components/submit"
import { formData } from "@/actions/action"
import { useActionState } from "react"

export default function AddData() {

    const initialState = {
        error: {}
    }

    const [state, formAction, isPending] = useActionState(formData, initialState)





    return (
        <div className="bg-gray-200 text-gray-900">
            <form action={formAction}>
                <input className="block border mt-9 w-80 p-2" type="text" name="title" placeholder="Type Title" id="" />
                {state.error.title && <p className="text-red-600">Title is requared!</p>}
                <input className="block border mt-9 w-80 p-2" type="text" name="description" placeholder="Type Description" /> {state.error.description && <p className="text-red-600">description is requared!</p>}
                <input className="block border mt-9 w-80 p-2" type="number" name="price" id="" placeholder="Type Price" /> {state.error.price && <p className="text-red-600">Price is requared!</p>}
                <Submit />
            </form>
        </div>
    )
}