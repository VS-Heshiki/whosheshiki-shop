import { styled } from '@/styles'

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4.5rem',

    maxWidth: 1180,
    margin: '0 auto'
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    padding: '0.25rem',
    background: 'linear-gradient(128deg, #7254cc 0%, #393d40 100%)',
    borderRadius: 8,

    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const DescriptionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    strong: {
        fontSize: '$xl',
        marginBottom: '1rem',
        color: '$gray300'
    },

    span: {
        fontSize: '$lg',
        marginBottom: '2.5rem',
        color: '$purple300'
    },

    p: {
        fontSize: '$md',
        lineHeight: '1.6',
        color: '$gray300'
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',

        background: '$purple300',
        color: '$white',
        border: 'none',
        borderRadius: 8,
        fontSize: '$md',
        fontWeight: 'bold',
        padding: '1.5rem 2rem',
        marginTop: 'auto',
        cursor: 'pointer',

        '&:hover': {
            background: '$purple500',
            transition: 'background 0.3s'
        }
    }
})
