import { styled } from '@/styles'

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656
})

export const Catalog = styled('a', {
    background: 'linear-gradient(128deg, #7254cc 0%, #393d40 100%)',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
    color: '$gray300',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        borderRadius: 6,
        background: 'rgba(0, 0, 0, 0.6)',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    strong: {
        fontSize: '$md'
    },

    span: {
        fontSize: '$lg',
        color: '$purple300',
        fontWeight: 'bold'
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})
