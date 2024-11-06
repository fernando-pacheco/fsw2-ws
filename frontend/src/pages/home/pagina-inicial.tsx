import { useAuth, UserButton } from "@clerk/clerk-react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function PaginaInicial() {
    const { userId } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate("/login")
        }
    }, [userId])

    return (
        <div className="h-full flex items-center justify-center">
            <UserButton showName />
        </div>
    )
}