// NOTE: 2022/03/30時点のsmarthr-uiのIcon実装をベースとして一部改変しています。
// https://github.com/kufu/smarthr-ui/blob/a0bbc92fdf261dfc51afcd916080d9f24068f76a/src/components/Icon/Icon.tsx
//
// 本実装はsmarthr-uiとは以下の点で事情が異なります。
// * smarthr-uiのIcon： react-iconsのラッパー
// * 本実装: SmartHRお手製SVGイメージのラッパー
//
// 本実装では、一部実装に手を加えて差異を吸収することで、
// 参照側はsmarthr-uiのIconなのか、本実装のIconなのかを区別せず利用できるようにしています。
//
// 各プロダクトのアイコンは、SmartAppsなど他プロダクトでも要望のあるアイコンなので、
// 最終的には、smarthr-uiに取り込んでおきたい実装です。

import * as React from 'react'
import { ComponentProps } from 'smarthr-ui'
import styled from 'styled-components'

import { color as themeColor, VISUALLY_HIDDEN_STYLE } from '@/styles/theme'

import {
  Apirenkei,
  BeginnerMark,
  Bunsekireport,
  Bunsyohaihu,
  Connect,
  Denshishinsei,
  Fileupload,
  Gensenchousyuuhyou,
  Jinjihyouka,
  Jugyouindatabase,
  Jugyouinsurvey,
  Kyuuyomeisai,
  Mynumber,
  Nenmatsuchousei,
  Security,
  Settei,
  Shinsei,
  Soshikizu,
  Syainmeibo,
  Tetsuzuki,
  Tsuukinkeirokensaku,
  Yen,
} from './svg'

/**
 * literal union type に補完を効かせるためのハック
 * https://github.com/microsoft/TypeScript/issues/29729
 */
type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

const definedColors = [
  'TEXT_BLACK',
  'TEXT_WHITE',
  'TEXT_GREY',
  'TEXT_DISABLED',
  'TEXT_LINK',
  'MAIN',
  'DANGER',
  'WARNING',
  'BRAND',
] as const
type DefinedColor = typeof definedColors[number]

const knownColorSet: Set<string> = new Set(definedColors)
function isDefinedColor(color: string): color is DefinedColor {
  return knownColorSet.has(color)
}

export interface IconProps {
  /**
   * アイコンの色
   * @type string | 'TEXT_BLACK' | 'TEXT_GREY' | 'TEXT_DISABLED' | 'TEXT_LINK' | 'MAIN' | 'DANGER' | 'WARNING' | 'BRAND'
   */
  color?: LiteralUnion<DefinedColor>
  /**
   * アイコンの大きさ
   */
  size?: number
}

const createIconFromSvg = (SvgIcon: React.VFC<React.SVGProps<SVGAElement>>, originalSize = 128) => {
  const Icon: React.VFC<ComponentProps> = ({
    color,
    className = '',
    role = 'img',
    visuallyHiddenText,
    'aria-hidden': ariaHidden,
    focusable = false,
    size = '1em',
    ...props
  }) => {
    const hasLabelByAria = props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined
    const isAriaHidden = ariaHidden !== undefined ? ariaHidden : !hasLabelByAria

    const replacedColor = React.useMemo(() => {
      const asserted = color as string | undefined
      if (asserted && isDefinedColor(asserted)) {
        return themeColor[asserted]
      }
      return color
    }, [color])

    return (
      <>
        {visuallyHiddenText && <VisuallyHiddenText>{visuallyHiddenText}</VisuallyHiddenText>}
        <SvgIcon
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          color={replacedColor}
          className={className}
          style={{ color: replacedColor }}
          role={role}
          aria-hidden={isAriaHidden || visuallyHiddenText !== undefined || undefined}
          focusable={focusable}
          viewBox={`0 0 ${originalSize} ${originalSize}`}
          height={size}
          width={size}
          {...props}
        />
      </>
    )
  }
  return Icon
}

const VisuallyHiddenText = styled.span`
  ${VISUALLY_HIDDEN_STYLE}
`

export const SmartHRBunsekireportIcon = /*#__PURE__*/ createIconFromSvg(Bunsekireport)
export const SmartHRBunsyohaihuIcon = /*#__PURE__*/ createIconFromSvg(Bunsyohaihu)
export const SmartHRConnectIcon = /*#__PURE__*/ createIconFromSvg(Connect)
export const SmartHRDenshishinseiIcon = /*#__PURE__*/ createIconFromSvg(Denshishinsei)
export const SmartHRFileuploadIcon = /*#__PURE__*/ createIconFromSvg(Fileupload)
export const SmartHRGensenchousyuuhyouIcon = /*#__PURE__*/ createIconFromSvg(Gensenchousyuuhyou)
export const SmartHRJinjihyoukaIcon = /*#__PURE__*/ createIconFromSvg(Jinjihyouka)
export const SmartHRJugyouindatabaseIcon = /*#__PURE__*/ createIconFromSvg(Jugyouindatabase)
export const SmartHRJugyouinsurveyIcon = /*#__PURE__*/ createIconFromSvg(Jugyouinsurvey)
export const SmartHRKyuuyomeisaiIcon = /*#__PURE__*/ createIconFromSvg(Kyuuyomeisai)
export const SmartHRMynumberIcon = /*#__PURE__*/ createIconFromSvg(Mynumber)
export const SmartHRNenmatsuchouseiIcon = /*#__PURE__*/ createIconFromSvg(Nenmatsuchousei)
export const SmartHRSetteiIcon = /*#__PURE__*/ createIconFromSvg(Settei)
export const SmartHRShinseiIcon = /*#__PURE__*/ createIconFromSvg(Shinsei)
export const SmartHRSoshikizuIcon = /*#__PURE__*/ createIconFromSvg(Soshikizu)
export const SmartHRSyainmeiboIcon = /*#__PURE__*/ createIconFromSvg(Syainmeibo)
export const SmartHRTsuukinkeirokensakuIcon = /*#__PURE__*/ createIconFromSvg(Tsuukinkeirokensaku)
export const SmartHRTetsuzukiIcon = /*#__PURE__*/ createIconFromSvg(Tetsuzuki)

// NOTE: 以下のアイコンはサイズが128pxではないため明示的に指定している。
export const SmartHRApirenkeiIcon = /*#__PURE__*/ createIconFromSvg(Apirenkei, 64)
export const SmartHRSecurityIcon = /*#__PURE__*/ createIconFromSvg(Security, 64)
export const SmartHRYenIcon = /*#__PURE__*/ createIconFromSvg(Yen, 64)
export const SmartHRBeginnerMarkIcon = /*#__PURE__*/ createIconFromSvg(BeginnerMark, 20)
