import { HomeContainer, Catalog } from '@/styles/pages/catalog'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import 'keen-slider/keen-slider.min.css'

import { GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

type GetSSProps = {
    products: {
        id: string
        name: string
        imageUrl: string
        price: string
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
                    <Link legacyBehavior key={ product.id } href={ `/products/${product.id}` }>
                        <Catalog className='keen-slider__slide'>
                            <Image src={ product.imageUrl } alt='' width={ 580 } height={ 580 } />
                            <footer>
                                <strong>{ product.name }</strong>
                                <span>{ product.price }</span>
                            </footer>
                        </Catalog>
                    </Link>
                )
            }) }
        </HomeContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(price.unit_amount / 100)
        }
    })

    return {
        props: {
            products
        },
        revalidate: 60 * 60 * 2
    }
}
