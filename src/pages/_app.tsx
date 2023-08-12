/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
import TNBHLogo from '@/assets/wsh-logo.png'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App ({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <Header>
                <Image src={ TNBHLogo } alt="" />
            </Header>
            <Component { ...pageProps } />
        </Container>
    )
}
