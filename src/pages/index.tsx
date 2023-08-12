import { HomeContainer, Product } from '@/styles/pages/product'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

type GetSSProps = {
    products: {
        id: string
        name: string
        imageUrl: string
        price: number
    }[]
}

export default function Home ({ products }: GetSSProps) {
    const [sliderRef] = useKeenSlider({
        mode: 'free-snap',
        slides: {
            perView: 2.5,
            spacing: 48
        }
    })

    return (
        <HomeContainer ref={ sliderRef } className='keen-slider'>
            { products.map(product => {
                return (
                    <Product key={ product.id } className='keen-slider__slide'>
                        <Image src={ product.imageUrl } alt='' width={ 580 } height={ 580 } />
                        <footer>
                            <strong>{ product.name }</strong>
                            <span>${ product.price }</span>
                        </footer>
                    </Product>
                )
            }) }
        </HomeContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount / 100
        }
    })

    return {
        props: {
            products
        }
    }
}
