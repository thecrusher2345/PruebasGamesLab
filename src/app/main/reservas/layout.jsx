export const metadata  = {
    title: "Reservas",
    description: "Reservas del laboratorio de videjuegos y realidad virtual de la Universidad Tecnica de Manabi"
    
};

export default function ReservasLayout({ children}) {
    return(
            <div className=" w-full h-full ">
                {children}
            </div>
    )
}
