import React from "react";

import "@/app/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+SC:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        {children}
      </body>
    </html>
  );
}
