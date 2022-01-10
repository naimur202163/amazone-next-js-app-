import { ServerStyleSheets } from '@material-ui/core';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
MyDocument.getIninitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const orginalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return orginalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
