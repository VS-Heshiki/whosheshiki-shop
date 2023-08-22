import { SuccessContainer, ImageContainer } from '@/styles/pages/success'
import Link from 'next/link'

export default function Success () {
    return (
        <SuccessContainer>

            <h1>Completed Order! 🎉</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Nice <strong>Victor Seiji</strong>! Your order <strong>#d723hd</strong> will be separated and send to your house!
            </p>

            <Link href="/">
                Back to catalog
            </Link>
        </SuccessContainer>
    )
}
