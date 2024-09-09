"use client"
import Image from "next/image"
import Logo1 from "../../../../public/inicio/logos/logo1"
import Logo2 from "../../../../public/inicio/logos/logo2"
import Logo3 from "../../../../public/inicio/logos/logo3"
import { useState } from "react"
export default function Inicio() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState (false);

    const handleAnimationEnd = () => {
        setIsAnimated(true);
    }
    const handleAnimationEnd2 = () => {
        setIsAnimated2(true);
    }
    const handleAnimationEnd3 = () => {
        setIsAnimated3(true)
    }
    return (
        <div className=" w-full  flex  flex-col items-center justify-center pb-[219px] ">

            <div className="m-0 p-0 box-border overflow-hidden w-full h-[36.8%]  before:content-[''] before:absolute before:w-full before:h-[20.8%] before:bg-[radial-gradient(ellipse_at_center,rgba(11,14,19,0.80)_5%,rgba(11,14,19,0.75)_10%,#0B0E13_68%)]">

                <ul className="flex  p-0  w-[500%] animate-slideInicioImg  ">
                    <li className="w-full list-none  ">
                        <Image src={'/inicio/wot.png'} width={1282} height={721} />
                    </li>
                    <li className="w-full list-none   ">
                        <Image src={'/inicio/lol.png'} width={1282} height={721} />
                    </li>
                    <li className="w-full list-none ">
                        <Image src={'/inicio/valorant.png'} width={1282} height={721} />
                    </li>
                    <li className="w-full list-none  ">
                        <Image src={'/inicio/fornite.png'} width={1282} height={721} />
                    </li>
                    <li className="w-full list-none  ">
                        <Image src={'/inicio/counterstrike.png'} width={1282} height={721} />
                    </li>
                </ul>
            </div>
            <div className=" absolute top-[329px]  items-center text-white">
                <section className="flex flex-col justify-center items-center">
                    <h6 className="text-[20px] text-focus animate-fadeInDown ">Sistema de Reservas de equipos</h6>
                    <h1 className="text-[48px] font-Audiowide animate-fadeInDown ">Video Games Lab</h1>
                    <h6 className="text-[20px] w-[50%] text-center animate-fadeInDown ">Facilitando el acceso a herramientas de vanguardia para la comunidad gamer y de desarrolladores.</h6>
                </section>
            </div>
            <section className=" h-[85px] relative mt-8 ">
                <div className=" w-[85vw] h-full  overflow-hidden">
                    <ul className=" flex gap-11 h-full animate-sliderTrack w-[calc(250px*26)]">
                        <li className="w-full   ">
                            <Image className="slide w-full h-full" src={'/inicio/titulos/callofduty.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/fornite.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/roblox.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/geometrydash.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/helldivers.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/hollowknight.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/overwatch.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/paladins.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/plantasvszombies.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/thefinals.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/theforest.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/valorant.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/wow.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide w-full h-full" src={'/inicio/titulos/callofduty.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/fornite.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/roblox.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/geometrydash.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/helldivers.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/hollowknight.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/overwatch.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/paladins.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/plantasvszombies.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/thefinals.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/theforest.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/valorant.png'} height={90} width={133.78} ></Image>
                        </li>
                        <li className="w-full">
                            <Image className="slide  w-full h-full" src={'/inicio/titulos/wow.png'} height={90} width={133.78} ></Image>
                        </li>
                    </ul>
                </div>
            </section>
            <section className=" group relative mt-6 ">


                <div className="  before:absolute before:w-[1440px] before:h-[747px]  before:content-[''] before:bg-[radial-gradient(ellipse_at_center,rgba(11,14,19,0.4)_5%,rgba(11,14,19,0.5)_10%,#0B0E13_70%)]">
                    <div className="absolute left-[5%] top-[10%]">
                        <div className="text-white flex w-full justify-center items-center gap-[40px]">
                            <Image className={`  ${isAnimated ? '' : 'group-hover:animate-leftText -translate-x-[700px]'} `} onAnimationEnd={handleAnimationEnd} src={'/inicio/img/img1.png'} width={528} height={545}></Image>
                            <div className={`flex flex-col ml-[60px] w-full gap-[22px]  ${isAnimated ? '' : 'group-hover:animate-rigthText translate-x-[700px]'} `} >
                                <h6 className="text-[20px] text-focus"># Equipos de Juego</h6>
                                <h4 className="font-Audiowide text-[32px] w-[93%]">Equipos de Alto Rendimiento para un Juego Imbatible</h4>
                                <ul className="mt-7 w-full flex flex-col gap-[32px]">
                                    <li className="flex justify-center items-center gap-[35px] ">
                                        <div className="w-[11%] ">
                                            <Logo1></Logo1>

                                        </div>

                                        <div className="">
                                            <h1 className="text-[24px] font-[20px]">Juega en Equipo</h1>
                                            <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Disfruta de experiencias multijugador y coopera con amigos en una variedad de juegos.</h4>
                                        </div>
                                    </li>
                                    <li className="flex justify-center items-center gap-[35px]">
                                        <div className="w-[11%] ">
                                            <Logo2></Logo2>

                                        </div>

                                        <div>
                                            <h1 className="text-[24px] font-[20px]" >Compite en Solitario</h1>
                                            <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Enfréntate a desafíos individuales y demuestra tus habilidades en juegos de un solo jugador.</h4>
                                        </div>
                                    </li>
                                    <li className="flex  justify-center items-center gap-[35px]">
                                        <div className="w-[11%] ">
                                            <Logo3 ></Logo3>
                                        </div>

                                        <div className=" ">
                                            <h1 className="text-[24px] font-[20px]">Plazas para Laptops</h1>
                                            <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Trae tu propio portátil y juega en un entorno cómodo y equipado para maximizar tu experiencia de juego.</h4>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                    <Image src={'/inicio/titulos/uncharterd.png'} width={1440} height={785}></Image>
                </div>
            </section>
            {/* seccion del slide de los logos  */}
            <section className=" h-[100px] relative mt-8 ">
                <div className="m-0 p-0 box-border overflow-hidden  w-[85vw] h-[70px]">
                    <ul className=" flex gap-[80px] h-full animate-sliderTrack2 w-[calc(140px*27)]">
                        <li className="w-full  flex justify-center items-center">
                            <Image className="  " src={'/inicio/logos2/blender.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full  flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/figma.png'} height={60} width={40} ></Image>
                        </li>
                        <li className="w-full  flex justify-center items-center">
                            <Image className="" src={'/inicio/logos2/java.png'} height={60} width={44.25} ></Image>
                        </li>
                        <li className="w-full  flex justify-center items-center">
                            <Image className="a" src={'/inicio/logos2/js.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full  flex justify-center items-center ">
                            <Image className="w-full  " src={'/inicio/logos2/php.png'} height={60.55} width={100} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center ">
                            <Image className="  " src={'/inicio/logos2/python.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/unity.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/unreal.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/vscode.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center  ">
                            <Image className=" " src={'/inicio/logos2/blender.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/figma.png'} height={60} width={40} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/java.png'} height={60} width={44.25} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/js.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="w-full" src={'/inicio/logos2/php.png'} height={60.55} width={90} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/python.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/unity.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="" src={'/inicio/logos2/unreal.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/vscode.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center  ">
                            <Image className=" " src={'/inicio/logos2/blender.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="" src={'/inicio/logos2/figma.png'} height={60} width={40} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="" src={'/inicio/logos2/java.png'} height={60} width={44.25} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="" src={'/inicio/logos2/js.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className="w-full" src={'/inicio/logos2/php.png'} height={31.55} width={90} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/python.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/unity.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/unreal.png'} height={60} width={60} ></Image>
                        </li>
                        <li className="w-full flex justify-center items-center">
                            <Image className=" " src={'/inicio/logos2/vscode.png'} height={60} width={60} ></Image>
                        </li>


                    </ul>
                </div>
            </section>
            <section className=" group  relative mt-6 ">

                <div className="flex justify-center items-center">
                    <div className="text-white flex w-full justify-center items-center gap-[40px]">

                        <div className={`flex flex-col ml-[60px] w-full gap-[22px]    ${isAnimated2 ? '' : ' group-hover:animate-leftText -translate-x-[700px]'} `} onAnimationEnd={handleAnimationEnd2}>
                            <h6 className="text-[20px] text-focus"># Herramientas de programación</h6>
                            <h4 className="font-Audiowide text-[32px] w-[93%]">Domina el Desarrollo con Tecnología de Vanguardia</h4>
                            <ul className="mt-7 w-full flex flex-col gap-[32px]">
                                <li className="flex justify-center items-center gap-[35px] ">
                                    <div className="w-[11%] ">
                                        <Logo1></Logo1>
                                    </div>
                                    <div className="">
                                        <h1 className="text-[24px] font-[20px]">Juega en Equipo</h1>
                                        <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Disfruta de experiencias multijugador y coopera con amigos en una variedad de juegos.</h4>
                                    </div>
                                </li>
                                <li className="flex justify-center items-center gap-[35px]">
                                    <div className="w-[11%] ">
                                        <Logo2></Logo2>
                                    </div>
                                    <div>
                                        <h1 className="text-[24px] font-[20px]" >Compite en Solitario</h1>
                                        <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Enfréntate a desafíos individuales y demuestra tus habilidades en juegos de un solo jugador.</h4>
                                    </div>
                                </li>
                                <li className="flex  justify-center items-center gap-[35px]">
                                    <div className="w-[11%] ">
                                        <Logo3 ></Logo3>
                                    </div>
                                    <div className=" ">
                                        <h1 className="text-[24px] font-[20px]">Plazas para Laptops</h1>
                                        <h4 className=" w-[78%] text-[16px] font-normal text-[#969EB2]">Trae tu propio portátil y juega en un entorno cómodo y equipado para maximizar tu experiencia de juego.</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[90%] h-[90%] before:content-[''] before:absolute before:w-[40%] before:h-full before:bg-[radial-gradient(ellipse_at_center,rgba(11,14,19,0.40)_40%,rgba(11,14,19,0.60)_60%,#0B0E13_68%)]">
                            <Image  src={'/inicio/img/img2.png'} width={528} height={545}></Image>
                        </div>
                    </div>
                </div>
            </section>
            <section className="group relative mt-6 w-[1260px] h-[732px] px-[20px]">
                <div className="flex text-white  h-[446px] justify-center items-center ">
                    <article className={`w-[815px] flex flex-col gap-y-2 h-full p-4 pl-8 pt-8 ${isAnimated3 ? '':'group-hover:animate-fadeInDown -translate-x-[900px]'} `} onAnimationEnd={handleAnimationEnd3}>
                        
                        <h6 className="text-[32px]">Reserva</h6>
                        <h1 className="text-[20px] text-focus">Accede a  Tecnología de Juego y Desarrollo</h1>
                        <p className="text-[16px] w-[90%] text-justify">
                            Nuestra plataforma de reservas ofrece a gamers y desarrolladores acceso exclusivo a tecnología de
                            vanguardia. Con nuestra app, puedes reservar PCs de alto rendimiento, estaciones para laptops, y gafas
                            de realidad virtual, todas equipadas para proyectos y juegos inmersivos. Disfruta de un sistema de
                            reservas intuitivo y tecnología de última generación.

                        </p>
                        <ul className={`flex gap-x-8 mt-3 ${isAnimated3 ? '':'group-hover:animate-fadeInDown'} `} onAnimationEnd={handleAnimationEnd3}>
                            <li >
                                <h1 className="text-[64px] flex justify-center items-center">20 <span className="text-[40px] text-focus">+</span></h1>
                                <p className={`text-[16px] text-focus ${isAnimated3 ? '':'group-hover:animate-fadeInUp'} `}>Juegos disponibles</p>
                            </li>
                            <li>
                                <h1 className="text-[64px] flex justify-center items-center">10 <span className="text-[40px] text-focus">+</span></h1>
                                <p className={`text-[16px] text-focus ${isAnimated3 ? '':'group-hover:animate-fadeInUp'} `}>Herramientas de desarrollo</p>
                            </li>
                            <li>
                                <h1 className="text-[64px] flex justify-center items-center">15</h1>
                                <p className={`text-[16px] text-focus ${isAnimated3 ? '':'group-hover:animate-fadeInUp'} `}>Equipos y plazas</p>
                            </li>
                        </ul>

                    </article>
                    <article className={`w-[406px] h-full rounded-3xl border-2 border-focus bg-[#0F1C23] flex flex-col ${isAnimated3 ? '':'group-hover:animate-fadeInRight translate-x-[700px]'} `}>
                        <div>
                            <div className="h-[251px] flex justify-center w-full items-center ">
                                <Image src={'/inicio/img/img3.png'} width={2000} height={2000} className=" drop-shadow-[0_0_45px_#0DB108] shadow-focus  w-[160px] h-[160px]"></Image>
                            </div>

                            <div className="flex flex-col p-4">
                                <h1 className="text-[24px]">Oculus</h1>
                                <div className="p-1 ">
                                    <h4 className="text-[18px] mb-2">Caracteristicas</h4>
                                    <ul className="grid grid-cols-2 gap-y-2  gap-2">
                                        <li className="flex items-center justify-start gap-y-2  gap-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/cpu.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Snapdragon XR2</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-1">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/radar.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>
                                            <p>Seguimiento 6DOF</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/radar.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>
                                            <p>6 GB</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/cpu.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>
                                            <p>Sonido 3D</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="flex gap-4 mt-4">
                    <article className={` w-[612px] h-[250px] text-white rounded-3xl border-2 border-[#FFBE18] bg-[#0F1C23] flex flex-col ${isAnimated3  ? '': ' group-hover:animate-fadeInLeft -translate-x-[700px]'}`}>
                        <div className="flex">
                            <div className="w-[248px] flex justify-center h-[250px] items-center  ">
                                <Image src={'/inicio/img/img4.png'} width={2000} height={2000} className=" drop-shadow-[0_0_45px_#FFBE18]  w-[160px] h-[160px]"></Image>
                            </div>

                            <div className="flex flex-col items-start justify-center p-4">
                                <h1 className="text-[24px]">PC</h1>
                                <div className="p-1 ">
                                    <h4 className="text-[18px] mb-2">Caracteristicas</h4>
                                    <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/cpu.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Core i7-12700</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/ram.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>32 GB</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/pc.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>1080P FHD</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/rom.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>ADATA 710GB</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2 col-span-full">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/gpu.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>NVIDIA GeForce RTX 4060</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>

                    </article>
                    <article className={` w-[612px] h-[250px] text-white rounded-3xl border-2 border-[#8F00FF] bg-[#0F1C23] flex flex-col ${isAnimated3 ? '' : 'group-hover:animate-fadeInUp translate-x-[700px]'} `}>
                        <div className="flex">
                            <div className="w-[248px] flex justify-center h-[250px] items-center  ">
                                <Image src={'/inicio/img/img5.png'} width={2000} height={2000} className=" drop-shadow-[0_0_45px_#8F00FF]  w-[160px] h-[160px]"></Image>
                            </div>

                            <div className="flex flex-col items-start justify-center p-4">
                                <h1 className="text-[24px]">Plazas</h1>
                                <div className="p-1 ">
                                    <h4 className="text-[18px] mb-2">Caracteristicas</h4>
                                    <ul className="grid grid-cols-2 gap-y-2  gap-2">
                                        <li className="flex items-center justify-start gap-y-2  gap-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/charge.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Enchufes disponibles</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/eternet.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Conexión a Ethernet</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/air.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Ambiente climatizado</p>
                                        </li>
                                        <li className="flex items-center justify-start gap-y-2  gap-x-2">
                                            <div className="w-[16px] h-[16px]">
                                                <Image src={'/inicio/icon/silla.png'} width={106} height={106} className="w-full h-full"></Image>
                                            </div>

                                            <p>Sillas cómodas</p>
                                        </li>


                                    </ul>

                                </div>
                            </div>

                        </div>

                    </article>
                </div>

            </section>
        </div>
    )
}