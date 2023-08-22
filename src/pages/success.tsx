import { stripe } from '@/lib/stripe'
import { SuccessContainer, ImageContainer } from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

export type ProductProps = {
    customerName: string,
    product: {
        itemName: string,
        itemIMG: string
    }
}

export default function Success ({ customerName, product }: ProductProps) {
    return (
        <>
            <Head>
                <title>Success | WhosHeshiki Shop</title>

                <meta name='robots' content='noindex' />
            </Head>
            <SuccessContainer>

                <h1>Completed Order! 🎉</h1>

                <ImageContainer>
                    <Image src={ product.itemIMG } width={ 130 } height={ 110 } alt='' />
                </ImageContainer>

                <p>
                    Nice <strong>{ customerName } 😎</strong>! Your <strong>{ product.itemName }</strong> is already in separation!
                </p>

                <Link href="/">
                    Back to catalog
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const productProps = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                itemName: productProps.name,
                itemIMG: productProps.images[0]
            }
        }
    }
}
