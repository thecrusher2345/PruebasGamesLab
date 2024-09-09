export default function Login() {
    return (
        <section className="flex h-screen w-full items-center justify-center bg-black ">
            <div className="w-[80%] h-[95%] bg-cover bg-center flex items-center justify-center z-10 bg-login relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,rgba(11,14,19,0.1)_10%,rgba(11,14,19,0.4)_25%,rgba(8,11,14,0.5)_39%,rgba(0,0,0,0.80)_100%),linear-gradient(to_right,rgba(0,0,0,1)_0.5%,transparent_8%),linear-gradient(to_left,rgba(0,0,0,1)_0.5%,transparent_8%)]" >
                <div className="w-[490px] h-[524px] bg-background pt-[118px] px-[30px] rounded-lg  z-20 shadow-[inset_1px_1px_15px_rgba(22,204,17,1),inset_-1px_-1px_15px_rgba(143,0,225,1),2px_2px_15px_rgba(143,0,225,1),-3px_-3px_15px_rgba(22,204,17,1)] border-[linear-gradient(to_botton,rgba(197,154,207,1),rgba(222,248,221,1))] border-[3px] ">
                    <header className="text-3xl font-bold text-center ">
                        <h1 className=" font-[50px] font-textsecondary text-white [text-shadow_2px_4px_0_rgba(151, 71, 225, 0.7)]" style={{ textShadow: ' 2px 4px 0 rgba(151, 71, 225, 0.7)' }}>GAMELAB</h1>
                    </header>
                    <form action="" className="flex items-center justify-center flex-col mx-[45px]   ">
                        <div className="grid grid-cols-1 gap-[36px] mt-[55px]  w-[100%]">
                            <div className="relative ">
                                <input type="text" className="floating-input peer max-sm:movil-floating-input w-full bg-transparent" id="floatingInput1" placeholder="name@example.com" />
                                <label htmlFor="floatingInput1" className="floating-label max-sm:movil-floating-label font-[14px_bold] font-nunito">Correo electrónico</label>
                            </div>
                            <div className="relative ">
                                <input type="password" className="floating-input peer max-sm:movil-floating-input w-full bg-transparent" id="floatingInput1" placeholder="name@example.com" />
                                <label htmlFor="floatingInput1" className="floating-label max-sm:movil-floating-label font-[14px_bold] font-nunito">Contraseña</label>
                            </div>
                        </div>
                        <div className="mt-[65px]">
                            <a class="relative z-20 overflow-hidden align-middle border-[none] text-center text-[#0b0e13] text-[14px] font-bold leading-none min-w-[100px] rounded-none bg-[#0DB108] p-0 inline-block hover:[clip-path:polygon(0px_0%,100%_0%,_100%_50%,_100%_100%,_0_100%,_0%_50%)] [clip-path:polygon(15px_0%,_calc(100%-15px)_0%,_100%_50%,_calc(100%-15px)_100%,_15px_100%,_0%_50%)] [transition:0.2s]         before:[clip-path:polygon(45%_0,_50%_0,_5%_50%,_50%_100%,_45%_100%,_0%_50%)] before:top-[6px] before:left-[8px] before:w-[26px] before:h-[calc(100%-12px)] before:[transition:0.2s] before:bg-[#0DB108] before:z-10 before:content-[''] before:absolute  before:box-border hover:before:[clip-path:polygon(2px_50%,_2px_calc(100%-2px),_100%_calc(100%-0px),_100%_100%,_0_100%,_0_100%)] hover:before:[transition:0.2s]            after:[clip-path:polygon(45%_0,_50%_0,_5%_50%,_50%_100%,_45%_100%,_0%_50%)] after:top-[6px] after:right-[8px] after:left-auto after:w-[26px] after:h-[calc(100%-12px)] after:bg-[#0DB108] after:z-10 after:rotate-180 after:content-[''] after:absolute after:rounded-none hover:after:[clip-path:polygon(2px_50%,_2px_calc(100%-2px),_100%_calc(100%-_0px),_100%_100%,_0_100%,_0_100%)] hover:after:[transition:0.2s] after:[transition:0.2s]">
                                <span class="inline-block bg-[#0b0e13] [clip-path:polygon(15px_0%,calc(100%-15px)_0%,_100%_50%,_calc(100%-_15px)_100%,_15px_100%,_0%_50%)] border-[0] w-[-webkit-fill-available] hover:[clip-path:polygon(0px_0%,_100%_0%,_100%_50%,_100%_100%,_0_100%,_0%_50%)] text-[#ffffff] rounded-none m-px text-center px-[30px] py-[19px] text-[18px] font-bold leading-none [transition:0.2s] font-nunito">Iniciar Sesion</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}