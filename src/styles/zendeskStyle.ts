import { css } from 'styled-components'

import { color, darken, FONT_FAMILY, lighten, radius, spacing } from './theme'

// NOTE: 以下のCSSは、Zendeskからexportしたものをベースに一部 monjo 向けに手を加えている。
// リリースノート詳細の記事のレイアウトを再現するために利用する。

// NOTE: Zendeskの /***** Base *****/ のCSSを抽出して手を加えている
export const zendeskBaseStyle = css`
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    font-family: ${FONT_FAMILY};
    font-weight: 400;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }

  h4 {
    font-size: 16px;
  }

  input,
  textarea {
    font-size: 14px;
    color: #000;
  }

  input {
    box-sizing: border-box;
    max-width: 100%;
    font-weight: 300;
    outline: none;
    transition: border 0.12s ease-in-out;
  }

  input:focus {
    border: 1px solid ${color.BRAND};
  }

  input[disabled] {
    background-color: #ddd;
  }

  select {
    width: 100%;
    padding: 8px 30px 8px 10px;
    color: #555;

    /* background: url($assets-dropdown-arrow-svg) no-repeat #fff; */
    background-position: right 10px center;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    appearance: none;
  }

  select:focus {
    border: 1px solid ${color.BRAND};
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    width: 100%;
    padding: 10px;
    resize: vertical;
    border: 1px solid #ddd;
    border-radius: 2px;
    outline: none;
  }

  textarea:focus {
    border: 1px solid ${color.BRAND};
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

// NOTE: Zendeskの /***** Article *****/ のCSSを抽出して手を加えている
export const zendeskArticleStyle = css`
  width: 100%;
  line-height: 1.6;
  word-wrap: break-word;

  img {
    max-width: 100%;
    height: auto;
  }

  ul,
  ol {
    padding-left: 20px;
    margin: 20px 0;
    list-style-position: outside;

    & > ul,
    & > ol {
      margin: 0;
    }
  }

  li > ul,
  li > ol {
    margin: 0;
  }

  ul {
    list-style-type: disc;
  }

  code {
    padding: 0 5px;
    margin: 0 2px;
    background: ${darken(0.03, color.WHITE)};
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  /* NOTE: pre 以下の code には style をあてない */
  pre > code {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    border-radius: 0;
  }

  pre {
    padding: 10px 15px;
    overflow: auto;
    white-space: pre;
    background: ${darken(0.03, color.WHITE)};
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  blockquote {
    padding: 0 15px;
    font-style: italic;
    color: ${lighten(0.2, color.TEXT_BLACK)};
    border-left: 1px solid #ddd;
  }

  > p:last-child {
    margin-bottom: 0;
  }
`

// NOTE: 主にZendeskの /***** Article Markup *****/ のCSSを抜粋
export const zendeskArticleMarkupStyle = css`
  font-size: 100%;
  line-height: 1.8em;

  h2 {
    padding-bottom: 8px;
    margin-top: 45px;
    margin-bottom: 14px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4em;
    color: #000;
    border-bottom: 1px solid #979797;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4em;
  }

  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4em;
  }

  h5 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4em;
  }

  ul {
    list-style-type: circle;
  }

  ul:is(ul) > li > ol {
    padding-bottom: 1em;
  }

  ol {
    padding-left: 0;
    list-style-type: none;
    counter-reset: item;

    & > li {
      position: relative;
      padding-left: 2.5em;
    }

    & > li:not(:last-child) {
      padding-bottom: 1em;
    }

    & > li::before {
      position: absolute;
      top: 0.1em;
      left: 0;
      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      line-height: 1.5em;
      color: #fff;
      text-align: center;
      content: counter(item);
      counter-increment: item;
      background-color: ${color.BRAND};
      border-radius: 1.5em;
    }
  }

  li > ol {
    padding-top: 1em;
  }

  img {
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  table {
    width: auto;
    margin-top: 30px;
    margin-bottom: 32px;
    font-size: 14px;
    border-spacing: 0;
    border-collapse: collapse;

    & tr {
      background: #fff;
    }

    & th {
      padding: 5px 10px;
      font-weight: 700;
      line-height: 1.2;
      border: 1px solid #aaa;
      box-shadow: 0 1px 1px rgba(255, 255, 255, 0.03) inset;
    }

    & th:first-child {
      border: 1px solid #aaa;
      border-radius: 5px 0 0;
    }

    & th:last-child {
      border: 1px solid #aaa;
      border-radius: 0 5px 0 0;
      box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.03), 0 1px 1px rgba(255, 255, 255, 0.3) inset;
    }

    & tr td {
      padding: 5px 10px;
      border: 1px solid #aaa;
    }

    & tr:last-child td {
      box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.03);
    }

    & tr:last-child td:first-child {
      border-radius: 0 0 0 5px;
    }
  }
`

// TODO: Phase2で目次のスタイリングをする。
// NOTE: 主にZendeskの /***** Article ToC *****/ のCSSを抜粋
export const zendeskArticleToCStyle = css`
  .toc {
    display: flex;
    flex-flow: column nowrap;
    padding: ${spacing.XS};
    font-size: 107.1%;
    border: 1px solid ${color.BRAND};
    border-radius: ${radius.monjo_l};

    & > ul ::before {
      display: block;
      margin-bottom: 11px;
      font-size: 20px;
      font-weight: bold;
      color: ${color.TEXT_BLACK};
      content: '目次';
    }
  }

  .toc ul {
    display: block;
    margin: 0;

    /* list-style-type: none; */
    list-style-position: inside;
  }

  .toc > ul {
    padding: 0 16px;
  }

  .toc > ul > li > a {
    font-weight: 600;
  }

  .toc li {
    padding: 3px 0;
    line-height: 1.3em;
  }

  .toc a:link,
  .toc a:visited,
  .toc a:hover,
  .toc a:active {
    color: ${color.TEXT_LINK};
  }

  .toc a::after {
    content: none;
  }
`
