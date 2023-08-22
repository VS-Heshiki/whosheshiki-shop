import { stripe } from '@/lib/stripe'
import { DescriptionContainer, ImageContainer, ProductContainer } from '@/styles/pages/products'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { ShoppingBag } from 'phosphor-react'
import Stripe from 'stripe'

type ProductProps = {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        description: string
        defaultPriceId: string
    }
}

export default function Products ({ product }: ProductProps) {

    async function handleBuyProduct () {
        try {
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl
        } catch (err) {
            alert(err)
        }
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={ product.imageUrl } width={ 580 } height={ 580 } alt='' />
            </ImageContainer>
            <DescriptionContainer>
                <strong>{ product.name }</strong>
                <span>{ product.price }</span>
                <p>{ product.description }</p>
                <button onClick={ handleBuyProduct }>
                    Shop!
                    <ShoppingBag size={ 24 } />
                </button>
            </DescriptionContainer>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_ORH9LIGTkKhBrP' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1hr
    }
}
