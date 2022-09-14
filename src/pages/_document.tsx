import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persist when you refresh the page. */}
          <ColorModeScript/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
