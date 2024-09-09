

export const metedata = {
    title: "Inicio",
    descrition: "Inicio donde se mostrara informacion del laboratorio y sus componenetes"
}

export default function InicioLayout({children}){
    return(
        <div className="w-full h-full">
            {children}
        </div>
    )
}