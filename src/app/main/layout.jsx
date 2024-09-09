import Image from "next/image";


import Link from "next/link";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Inicio",
    description: "Pagina de inicio mostrnado informacion del laboratorio"
}

export default function RootLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen relative">
            <div className='w-full flex-grow'>
                <div className="  top-0   w-full  h-[119px] bg-focus z-20 fixed [clip-path:polygon(calc(26.5%-2px)_calc(87%-1px),calc(5.89%-12px)_calc(87.7%-1px),0%_99%,0%_0%,18.9%_0%);] before:content-[''] before:[clip-path:polygon(calc(26.5%-2px)_calc(87%),calc(9.98%-10px)_calc(87.2%),calc(5.89%-12px)_calc(87.2%),0%_99.24%,0%_0%,18.9%_0%)] before:h-[119px] before:w-full before:bg-[#1A1D26]  before:-top-1 before:absolute before:z-10">
                    <section className="absolute z-30 top-[25px] left-[35px] w-[250px]">
                        <div className="flex items-center h-[49px] w-full gap-2 ">
                            <Image src="/logo.png" alt="logo" width={49} height={49}></Image>
                            <h1 className="font-textsecondary text-white text-[22px] [textShadow:2px_2px_0_rgba(22,204,17,0.7)]">GamesLab</h1>
                        </div>

                    </section>

                </div>
                <div className="  top-0  w-full  h-[119px] bg-[#8F00FF] z-10 fixed [clip-path:polygon(calc(100%)_calc(98.48%),calc(100%-70px)_calc(86.21%),calc(4.89%-15px)_calc(86.21%),calc(0%)_calc(99.24%),calc(0%)_calc(0%),calc(100%)_calc(100%-200px))] before:content-[''] before:[clip-path:polygon(calc(100%)_calc(98.48%),calc(100%-70px)_calc(86.21%),calc(4.89%-15px)_calc(100%-15px),calc(0%)_calc(99.24%),calc(0%)_calc(0%),calc(100%)_calc(100%-200px))] before:h-[119px] before:w-full before:bg-black  before:-top-1 before:absolute before:z-10">
                    <nav className="absolute w-[200px] top-10 left-[558px] justify-center items-center h-full text-white z-30">


                        <ul className="flex justify-between   w-full">
                            <li>
                                <Link className=" px-4 pb-2 hover:text-[#80F97C]  font-light text-[18px] hover:border-b-[2.5px] border-[#80F97C] transition-all duration-300" href="/inicio">Inicio</Link>
                            </li>
                            <li>
                                <Link className=" px-4 pb-2 hover:text-[#80F97C]  font-light text-[18px] hover:border-b-[2.5px] border-[#80F97C] transition-all duration-300" href="#">About</Link>
                            </li>
                            <li>
                                <Link className=" px-4 pb-2 hover:text-[#80F97C]  font-light text-[18px] hover:border-b-[2.5px] border-[#80F97C] transition-all duration-300" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
                <section className="fixed w-[30px] h-[34px] top-7 right-[225px] justify-center items-center text-white z-[2000]">
                    <div className="absolute w-[197px] group   hover:bg-background transition-all duration-800 p-2 rounded-md font-light [&:not(:hover)]:delay-[1000ms]">
                        <button className="flex items-center gap-2">
                            <span className="bg-focus rounded-full w-[30px] h-[30px] flex justify-center items-center text-[12px]">
                                FM
                            </span>
                            <h1 className="text-[17px]">
                                Fernando Mero
                            </h1>
                        </button>
                        <ul className="relative overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-500 ease-in-out">
                            <li className="transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-200 ease-in-out">
                                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:text-focus">
                                    <Image src="/calendar.png" alt="calendar" width={20} height={20} className="filter invert" />
                                    Mis Reservas
                                </a>
                            </li>
                            <li className="transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-200 ease-in-out delay-100">
                                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:text-focus">
                                    <Image src="/logout.png" alt="logout" width={20} height={20} className="" />
                                    Salir
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <main className="relative py-[100px]">
                {children}
                </main>
                
            </div>
            <footer className="w-full h-[269px] absolute bottom-0 left-0">
                <div className="h-full w-full bg-[#8F00FF] [clip-path:polygon(100%_19.69%,100%_100%,0%_100%,0%_21%,5.80%_11.80%,94.51%_12%);] before:content-[''] before:[clip-path:polygon(100%_7.69%,100%_100%,0%_100%,0%_7.69%,5.76%_0%,94.51%_0%)] before:h-full before:w-full before:bg-black before:top-[36px] before:absolute">
                    <div className="absolute h-[40px] top-[90px] left-[400px]  w-[800px] p-2 text-white">
                        <h1 className="text-white font-nunito font-semibold h-[40px] w-full before:content-[''] before:w-full before:h-[3px] before:bg-[#0F1C23] before:absolute before:-top-3 before:-left-[30px] after:content-[''] after:w-[800px] after:h-[3px] after:bg-[#0F1C23] after:absolute after:top-[120px] after:left-[30px] border-white text-[15px]">Ubicación del <span className="text-focus">Laboratorio</span>
                            <p className="text-[14px] w-[324px] mt-2 pl-8 font-nunito font-semibold text-[#86949B] ">Universidad Técnica de Manabí, Facultad de ciencias Informáticas, Laboratorio de videojuegos y realidad virtual</p>
                        </h1>
                    </div>
                    <div className="top-[32px] absolute h-[259px] w-full bg-focus [clip-path:polygon(33.22%_100%,21.18%_0%,4.60%_0%,0%_0%,0%_100%)] before:content-[''] before:[clip-path:polygon(33.22%_100%,21.18%_0%,5.60%_0%,0%_9.2%,0%_100%)] before:h-[259px] before:left-[0px] before:w-[1383px] before:bg-[#1A1D26] before:-bottom-[4px] before:absolute  ">
                        <section className="absolute z-30 top-[29px] left-[35px] w-[250px]">
                            <div className="flex flex-col items-center h-[49px] w-full gap-2 ">
                                <Image src="/logo.png" alt="logo" width={49} height={49}></Image>
                                <h1 className="font-textsecondary text-white text-[22px] [textShadow:2px_2px_0_rgba(22,204,17,0.7)]">GamesLab</h1>
                                <div className="flex gap-4">
                                <Image src="/UTMlogo.png" alt="logo" width={49} height={49}></Image>
                                <Image src="/FCIlogo.png" alt="logo" width={49} height={49}></Image>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="absolute top-[29.9px] h-[269px] w-full bg-[#0B0E13] [clip-path:polygon(100%_100%,100%_90.23%,60.69%_90.23%,58%_78.92%,41.78%_78.92%,39.14%_90.23%,0%_90.23%,0%_100%);]">
                    </div>
                </div>
            </footer>
        </div>














    )
}