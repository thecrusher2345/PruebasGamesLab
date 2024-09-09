import React from 'react';

export default function ReservasForm() {
  return (
    <div className="w-full px-4 py-8">
    <section className="flex flex-col  justify-center items-center">
      <header className="clip-title-form h-16 w-full">
        <h1 className="bg-focus h-full w-full flex items-center pl-4 sm:pl-20 font-bold text-lg sm:text-2xl">Registrar Reserva</h1>
      </header>
      
      <main className="  bg-primary mx-[60px] py-8 bg-cover bg-center  px-14 w-[calc(100%-25px)]  bg-reservas">
        <form action="">
          <div className="grid-form max-sm:movil-grid-form">
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput1" placeholder=" " />
              <label htmlFor="floatingInput1" className="floating-label max-sm:movil-floating-label">Seleccione un equipo</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput2" placeholder=" " />
              <label htmlFor="floatingInput2" className="floating-label max-sm:movil-floating-label">Seleccione una actividad</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput3" placeholder=" " />
              <label htmlFor="floatingInput3" className="floating-label max-sm:movil-floating-label">Fecha de reserva</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput4" placeholder=" " />
              <label htmlFor="floatingInput4" className="floating-label max-sm:movil-floating-label">Hora de ingreso</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput5" placeholder=" " />
              <label htmlFor="floatingInput5" className="floating-label max-sm:movil-floating-label">Hora de salida</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput6" placeholder=" " />
              <label htmlFor="floatingInput6" className="floating-label max-sm:movil-floating-label">Duración</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput7" placeholder=" " />
              <label htmlFor="floatingInput7" className="floating-label max-sm:movil-floating-label">Cédula</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput8" placeholder=" " />
              <label htmlFor="floatingInput8" className="floating-label max-sm:movil-floating-label">Nombres completos</label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="floating-input peer max-sm:movil-floating-input w-full" id="floatingInput9" placeholder=" " />
              <label htmlFor="floatingInput9" className="floating-label max-sm:movil-floating-label">Número de personas</label>
            </div>
            <div className="relative col-span-full">
              <textarea className="floating-input peer max-sm:movil-floating-input w-full h-[93px]" id="floatingInput10" placeholder=" " rows="3"></textarea>
              <label htmlFor="floatingInput10" className="floating-label max-sm:movil-floating-label">Descripción de la actividad</label>
            </div>
            
            <div className="flex justify-center items-center col-span-full mt-6">
              <button type="submit" className="bg-focus clip-botton-form h-[45px] w-[190px] flex items-center justify-center relative overflow-hidden group  ">
               
                <span className="relative">Registrar reserva</span>
               
              </button>
            </div>
          </div>
        </form>
      </main>
    </section>
  </div>
  );
}
