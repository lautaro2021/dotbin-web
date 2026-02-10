import { Instagram } from "lucide-react";

export const Footer = () => {
    const links = {
        Producto: ['Funcionalidades', 'Soluciones', 'Precios'],
    };

    return (
        <footer className="border-t border-border px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-accent">
                                <span className="font-bold text-primary">.bin</span>
                            </div>
                            <span className="text-xl font-semibold tracking-tight text-foreground">dotbin</span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                            El futuro de la gestión en salud. Diseñado para clínicas modernas
                            que exigen excelencia.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="mb-4 text-sm font-semibold">{category}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2026 dotbin. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2">
                            <Instagram className="h-4 w-4" />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
