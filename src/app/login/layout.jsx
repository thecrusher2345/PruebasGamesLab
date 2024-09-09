import { Inter } from "next/font/google";
import '@fontsource/press-start-2p';

import '@fontsource/nunito/700.css';  // Bold

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Login",
    description: "Login de usario para estudiantes y docentes de la Universidad Tecnica de M"
}

export default function LoginLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}