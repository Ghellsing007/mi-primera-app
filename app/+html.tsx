import type { ReactNode } from "react";
import { ScrollViewStyleReset } from "expo-router/html";

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f5f5f5" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" />
        <ScrollViewStyleReset />
      </head>
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </body>
    </html>
  );
}

