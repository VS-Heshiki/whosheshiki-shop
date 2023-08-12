import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, config, css, theme, keyframes, createTheme } = createStitches({
    theme: {
        colors: {
            white: '#fff',
            gray900: '#0e0f10',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            purple500: '#3d307a',
            purple300: '#5542ad'
        },
        fontSizes: {
            sm: '1.125rem',
            md: '1.25rem',
            lg: '1.5rem',
            xl: '2rem'
        }
    }
})
