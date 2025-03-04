import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-locale="en_US"
      data-commit="2025-03-03_15-49-24_43a0ba2
"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="Certificates | FTMO" />
        <meta property="og:type" content="website" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="ftmo-page-certificates">
        {children}
      </body>
    </html>
  );
}
