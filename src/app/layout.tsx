import type { ReactNode } from "react";
import { defaultMetadata, generateStructuredData } from "@/lib/seo";
import { Providers } from "./providers";

import "./index.css";

export const metadata = defaultMetadata;

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const structuredData = generateStructuredData();

    return (
        <html lang="es">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
