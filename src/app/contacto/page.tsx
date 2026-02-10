"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, Mail, Building2, User, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BackgroundOrbs } from '@/components/BackgroundOrbs';
import Link from 'next/link';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Error al enviar el mensaje.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', businessName: '', message: '' });
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Error al enviar el mensaje. Intenta de nuevo.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="relative min-h-screen bg-background text-foreground">
                <BackgroundOrbs />
                <div className="fixed left-6 top-6 z-50">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Volver
                        </Button>
                    </Link>
                </div>
                <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
                    <div className="w-full max-w-md text-center">
                        <div className="glass-panel-strong space-y-6 p-10 flex flex-col">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold">Mensaje enviado</h2>
                            <p className="text-muted-foreground mt-0">
                                Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                            </p>
                            <Link href="/">
                                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                    <ArrowLeft className="h-4 w-4" />
                                    Volver al inicio
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <BackgroundOrbs />

            {/* Back button */}
            <div className="fixed left-6 top-6 z-50">
                <Link href="/">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Volver
                    </Button>
                </Link>
            </div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
                <div className="w-full max-w-xl">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-4 py-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm text-accent-foreground">Contacto</span>
                        </div>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                            <span className="text-gradient">Hablemos</span>
                        </h1>
                        <p className="mx-auto max-w-md text-muted-foreground">
                            Completa el formulario y nuestro equipo de ventas se pondrá en contacto contigo
                            en menos de 24 horas.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="glass-panel-strong space-y-6 p-8">
                        {status === 'error' && (
                            <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                {errorMessage}
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                                <User className="h-4 w-4 text-muted-foreground" />
                                Nombre completo
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Juan García"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                className="border-border bg-background/50 focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                Correo electrónico
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="juan@tuclinica.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                className="border-border bg-background/50 focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="businessName" className="flex items-center gap-2 text-foreground">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                Nombre de tu negocio
                            </Label>
                            <Input
                                id="businessName"
                                name="businessName"
                                type="text"
                                placeholder="Clínica Dental García"
                                value={formData.businessName}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                className="border-border bg-background/50 focus:border-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-foreground">
                                Mensaje (opcional)
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Cuéntanos más sobre tu clínica y tus necesidades..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                disabled={status === 'loading'}
                                className="resize-none border-border bg-background/50 focus:border-primary"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={status === 'loading'}
                            className="group w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            {status === 'loading' ? (
                                <>
                                    Enviando...
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Enviar mensaje
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            Al enviar, aceptas nuestra política de privacidad.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
