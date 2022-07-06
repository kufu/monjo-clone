export { darken, lighten } from 'polished'
// NOTE: smarthr-normalize-cssはメンテされていない状態なので一旦止めておく
// import cssBaseLine from 'smarthr-normalize-css'
import {
  defaultBorder,
  defaultBreakpoint,
  defaultColor,
  defaultFontSize,
  defaultInteraction,
  defaultLeading,
  defaultRadius,
  defaultSpacing,
  FONT_FAMILY,
} from 'smarthr-ui'
import { createGlobalStyle, css } from 'styled-components'

export { VISUALLY_HIDDEN_STYLE } from 'smarthr-ui'
export { FONT_FAMILY }

// NOTE: shadowのトークンはsmarthr-uiからexportされていないので一旦ハードコピーして用意した。
const defaultOutline = `0 0 0 2px white, 0 0 0 4px ${defaultColor.OUTLINE}`

const defaultShadow = {
  BASE: 'rgba(51, 51, 51, 0.15) 0 0 4px 0',
  DIALOG: 'rgba(51, 51, 51, 0.3) 0 4px 10px 0',
  LAYER0: 'none',
  LAYER1: '0 1px 2px 0 rgba(0,0,0,0.24)',
  LAYER2: '0 2px 4px 1px rgba(0,0,0,0.24)',
  LAYER3: '0 4px 8px 2px rgba(0,0,0,0.24)',
  LAYER4: '0 8px 16px 4px rgba(0,0,0,0.24)',
  OUTLINE: defaultOutline,
}

export const border = defaultBorder
export const breakpoint = defaultBreakpoint
export const color = defaultColor
export const fontSize = {
  ...defaultFontSize,
  MONJO_XXL: '1.75rem',
}
export const interaction = defaultInteraction
export const leading = defaultLeading
export const radius = {
  ...defaultRadius,
  monjo_l: '8px',
  monjo_max: '99px',
}

export const spacing = {
  ...defaultSpacing,
  MONJO_XXS: '6px',
  MONJO_XS: '12px',
  MONJO_SM: '28px',
  MONJO_ML: '36px',
  MONJO_X4L: '72px',
}

export const shadow = {
  ...defaultShadow,
  MONJO_PAGE_HEADING: '0 4px 20px rgba(0, 0, 0, 0.08)',
}

// NOTE: utsuwaのGlobalStyleを参考にしている。
// https://github.com/kufu/utsuwa/blob/7c173d55d3c10098aea1d0711c6832dae898f3da/client/src/constants/theme.tsx
//
const baseStyle = css`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: ${FONT_FAMILY};
    font-size: ${fontSize.M};
    line-height: ${leading.NONE};
    color: ${color.TEXT_BLACK};
    background-color: ${color.WHITE};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font: inherit;
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  fieldset {
    padding: 0;
    margin-right: 0;
    margin-left: 0;
    border-style: none;
  }

  figure {
    margin: 0;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${baseStyle};
`
