'use server'

import { addProduct, deleteProduct, updateProduct } from "@/app/prisma-db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function formData(prevState, formData) {
    const title = formData.get('title')
    const description = formData.get('description')
    const price = formData.get('price')

    const error = {}

    if (!title) {
        error.title = 'Title is requared!'
    }
    if (!description) {
        error.description = "Description is requared!"
    }
    if (!price) {
        error.price = "Price is requered!"
    }

    if (Object.keys(error).length > 0) {
        return { error };
    }

    await addProduct(title, price, description)
    redirect('/fetchdb')
    // console.log(title, desc  ription, price);

}


export async function editFormData(id, prevState, formData) {
    const title = formData.get('title')
    const description = formData.get('description')
    const price = formData.get('price')
    console.log(title, description, price);

    const error = {}

    if (!title) {
        error.title = 'Title is requared!'
    }
    if (!description) {
        error.description = "Description is requared!"
    }
    if (!price) {
        error.price = "Price is requered!"
    }

    if (Object.keys(error).length > 0) {
        return { error };
    }

    await updateProduct(id, title, parseInt(price), description)
    redirect('/fetchdb')
    // console.log(title, desc  ription, price);

}

export async function deleteProductAction(id) {
    await deleteProduct(parseInt(id))
    revalidatePath('/fetchdb')
}