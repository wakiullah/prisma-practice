import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const seedProducts = async () => {
    const data = await prisma.product.count()

    if (data === 0) {
        await prisma.product.createMany({
            data: [
                { title: 'Product No 1', price: 300, description: 'This is description of Product 1' },
                { title: 'Product No 2', price: 400, description: 'This is description of Product 2' },
                { title: 'Product No 3', price: 500, description: 'This is description of Product 3' },
            ]
        })
    }
}

seedProducts()


export function getProducts() {
    return prisma.product.findMany()

}
export function getProduct(id) {
    return prisma.product.findUnique({
        where: { id }
    })

}

export function addProduct(title, price, description) {
    return prisma.product.create({
        data: { title, price, description }
    })
}

export function updateProduct(id, title, price, description) {
    return prisma.product.update({
        where: { id },
        data: { title, price, description }
    })
}

export function deleteProduct(id) {
    return prisma.product.delete(
        { where: { id } }
    )
}