import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0
    },

    body: {
        backgroundColor: '$gray900',
        color: '$gray100'
    },

    'body, input, textarea, button': {
        fontFamily: 'Montserrat',
        fontWeight: 400
    }
})
