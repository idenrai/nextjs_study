import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// pages/_documents.tsx
// 커스텀 도큐먼트
// 기본으로 생성된 페이지 설정 중, html이나 head, body요소에 관한 부분을 덮어쓰기 위함

// 기본 도큐먼트를 덮어씀
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      // initialProps에 style을 추가하여 반환
      return {
        ...initialProps,
        styles: [
          // 원래 스타일
          initialProps.styles,

          // 스타일드 컴포넌트의 스타일
          sheet.getStyleElement(),
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
