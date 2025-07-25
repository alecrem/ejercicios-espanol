import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "@fontsource/delius";
import "@fontsource/lato";

export const links: LinksFunction = () => [];

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Señor Mano - para niños que reciben su educación principalmente en japonés o inglés. Ejercicios de conjugación verbal organizados por cuadernillos."
        />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          lineHeight: 1.6,
          WebkitFontSmoothing: "antialiased",
          fontFamily: "'Lato', system-ui, -apple-system, sans-serif",
          backgroundColor: "#aadfeb",
          color: "#1a1a1a",
        }}
      >
        <div style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
