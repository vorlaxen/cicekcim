import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"

const Toast = () => {
    const [position, setPosition] = useState<"top-right" | "top-center">("top-right")

    useEffect(() => {
        const updatePosition = () => {
            setPosition(window.innerWidth < 768 ? "top-center" : "top-right")
        }
        updatePosition()
        window.addEventListener("resize", updatePosition)
        return () => window.removeEventListener("resize", updatePosition)
    }, [])

    return (
        <Toaster
            position={position}
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 4000,
                style: {
                    background: '#111111',
                    color: '#ffffff',
                    fontWeight: 500,
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    fontSize: '14px',
                    padding: '14px 18px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(6px)',
                    maxWidth: '300px',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                },
                success: {
                    style: {
                        background: '#111111',
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                    iconTheme: {
                        primary: '#ffffff',
                        secondary: '#111111',
                    },
                },
                error: {
                    style: {
                        background: '#111111',
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                    iconTheme: {
                        primary: '#ffffff',
                        secondary: '#111111',
                    },
                },
                loading: {
                    style: {
                        background: '#111111',
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                    iconTheme: {
                        primary: '#ffffff',
                        secondary: '#111111',
                    },
                },
            }}
        />
    )
}

export default Toast