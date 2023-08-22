import { styled } from '@stitches/react'

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,
    lineHeight: 1.4,

    h1: {
        fontSize: '$xl',
        marginBottom: '4rem'
    },

    p: {
        fontSize: '$lg',
        textAlign: 'center',
        marginBottom: '5rem',
        lineHeight: 1.6,
        maxWidth: 560
    },

    a: {
        display: 'block',
        textDecoration: 'none',
        fontSize: '$lg',
        fontWeight: 'bold'
    }
})

export const ImageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    maxWidth: 130,
    height: 145,
    padding: '0.25rem',
    marginBottom: '2rem',

    background: 'linear-gradient(128deg, #7254cc 0%, #393d40 100%)',
    borderRadius: 8,

    img: {
        objectFit: 'cover',
    }
})
