import { DescriptionContainer, ImageContainer, ProductContainer } from '@/styles/pages/products'
import { useRouter } from 'next/router'
import { ShoppingCartSimple } from 'phosphor-react'

export default function Products () {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <DescriptionContainer>
                <strong>Camiseta X</strong>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptatibus aspernatur voluptatum ullam ipsa voluptate non vero, tenetur iste reprehenderit voluptates eum accusamus consectetur esse fuga ratione quidem minus molestias.</p>
                <button>
                    Add to cart
                    <ShoppingCartSimple size={ 24 } />
                </button>
            </DescriptionContainer>
        </ProductContainer>
    )
}
