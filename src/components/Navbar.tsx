import { Button } from '@/components/ui/button';

export const Navbar = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-accent">
                        <span className="font-bold text-primary">.bin</span>
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-foreground">dotbin</span>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        Funcionalidades
                    </a>
                    <a href="#solutions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        Soluciones
                    </a>
                    <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        Precios
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Comenzar gratis
                    </Button>
                </div>
            </div>
        </nav>
    );
};
