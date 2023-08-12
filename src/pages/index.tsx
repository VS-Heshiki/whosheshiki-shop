import { HomeContainer, Product } from '@/styles/pages/product'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import hoodie1 from '@/assets/TNBH/product-1.webp'
import hoodie2 from '@/assets/TNBH/product-2.webp'
import hoodie3 from '@/assets/TNBH/product-3.webp'

export default function Home () {
    const [sliderRef] = useKeenSlider({
        mode: 'free-snap',
        slides: {
            perView: 'auto',
            spacing: 48
        }
    })

    return (
        <HomeContainer ref={ sliderRef } className='keen-slider'>
            <Product className='keen-slider__slide'>
                <Image src={ hoodie1 } alt='' width={ 580 } />
                <footer>
                    <strong>WIPED OUT! HOODIE</strong>
                    <span>$75.00</span>
                </footer>
            </Product>
            <Product className='keen-slider__slide'>
                <Image src={ hoodie2 } alt='' width={ 540 } />
                <footer>
                    <strong>HOUSE CREWNECK</strong>
                    <span>$60.00</span>
                </footer>
            </Product>
            <Product className='keen-slider__slide'>
                <Image src={ hoodie3 } alt='' width={ 540 } />
                <footer>
                    <strong>IT'S TOO COLD KNIT SWEATER</strong>
                    <span>$95.00</span>
                </footer>
            </Product>
        </HomeContainer>
    )
}
