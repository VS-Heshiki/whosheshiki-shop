import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, config, css, theme, keyframes, createTheme } = createStitches({
    theme: {
        colors: {
            white: '#fff',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            purple500: '#3d0087',
            purple300: '#2b00ab'
        }
    }
})
