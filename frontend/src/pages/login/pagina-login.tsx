import { LogInIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PaginaLogin() {
    const { userId } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            navigate('/');
        }
    }, [userId]);

    return (
        <div className="grid grid-cols-2">
            <div className="px-2 gap-8 flex flex-col justify-center max-w-[500px] mx-auto">
                <div className="flex gap-3">
                    <img
                        src="/logo.png"
                        alt="Finance AI"
                        width={30}
                        height={30}
                    />
                    <p className="text-xl font-semibold">
                        finance.ai
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-bold">
                        Bem-vindo
                    </h1>
                    <p className="text-muted-foreground text-base">
                        A Finance AI é uma plataforma de gestão financeira que utiliza
                        IA para monitorar suas movimentações, e oferecer insights
                        personalizados, facilitando o controle do seu orçamento.
                    </p>
                    <SignInButton>
                        <Button variant="outline" className="mt-3 rounded-xl">
                            <LogInIcon className="mr-2" />
                            Fazer login ou criar conta
                        </Button>
                    </SignInButton>
                </div>
            </div>
            <div className="w-full h-full relative">
                <img
                    src="/login.png"
                    alt="login"
                    className="object-cover w-full max-h-screen"
                />
            </div>
        </div>
    );
}
