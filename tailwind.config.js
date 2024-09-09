import animations from '@midudev/tailwind-animations'

const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/background-login.png')",
        reservas: "url('/WhatsApp Image 2024-08-28 at 21.48.58_196603e5.jpg')"
      },
      colors: {
        background: '#0B0E13',
        secondary: 'rgba(150, 158, 178, 0.5)',
        primary: '#0F1C23',
        focus: '#0DB108',
      },
      spacing: {
        58: '58px',
        32: '8rem',
      },
      fontFamily: {
        textprimary: '"Arial Rounded MT Bold"',
        textsecondary: ['"Press Start 2P"', 'cursive'],
        nunito: ['Nunito', 'Arial', 'sans-serif'],
        Audiowide: ['"Audiowide"', 'system-ui']

      },
      screens: {
        'xs': '413px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        morphToSquare: 'morphToSquare .25s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        reverseMorphToSquare: 'reverseMorphToSquare .25s cubic-bezier(0.25, 0.1, 0.25, 1) ',
        slideInicioImg: 'slideInicioImg 20s infinite forwards  ease-in-out',
        slideInicioImg2: 'slideInicioImg2 20s    ease-in-out',
        sliderTrack: 'sliderTrack 40s linear infinite forwards',
        sliderTrack2: 'sliderTrack2 50s linear infinite forwards',
        
        leftText: 'leftText  1s linear forwards',
        rigthText: 'rigthText  1s linear forwards',
        fadeInDown:'fadeInDown 1s ease-in-out forwards;',
        fadeInUp:'fadeInUp 1s ease-in-out forwards',
        fadeInLeft:'fadeInLeft 1s ease-in-out forwards',
        fadeInRight:'fadeInRight 1s ease-in-out forwards'
      },
      keyframes: {

        morphToSquare: {
          '0%': { clipPath: 'polygon(48% 0, 96% 0, 100% 46%, 97% 100%, 47% 100%, 4% 100%, 0 51%, 4% 0)' },
          '25%': { clipPath: 'polygon(36% 0, 97% 0, 100% 34.5%, 97.75% 100%, 35.25% 100%, 3% 100%, 0 38.25%, 3% 0)' },
          '50%': { clipPath: 'polygon(24% 0, 98% 0, 100% 23%, 98.5% 100%, 23.5% 100%, 2% 100%, 0 25.5%, 2% 0)' },
          '75%': { clipPath: 'polygon(12% 0, 99% 0, 100% 11.5%, 99.25% 100%, 11.75% 100%, 1% 100%, 0 12.75%, 1% 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        reverseMorphToSquare: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
          '25%': { clipPath: 'polygon(12% 0, 99% 0, 100% 11.5%, 99.25% 100%, 11.75% 100%, 1% 100%, 0 12.75%, 1% 0)' },
          '50%': { clipPath: 'polygon(24% 0, 98% 0, 100% 23%, 98.5% 100%, 23.5% 100%, 2% 100%, 0 25.5%, 2% 0)' },
          '75%': { clipPath: 'polygon(36% 0, 97% 0, 100% 34.5%, 97.75% 100%, 35.25% 100%, 3% 100%, 0 38.25%, 3% 0)' },
          '100%': { clipPath: 'polygon(48% 0, 96% 0, 100% 46%, 97% 100%, 47% 100%, 4% 100%, 0 51%, 4% 0)' },
        },
        //slide de la imagenes que se muestran en el incio en grande donde esta el titulo
        slideInicioImg: {
          '0%': { marginLeft: '0' },
          '20%': { marginLeft: '0' },

          '25%': { marginLeft: '-100%' },
          '45%': { marginLeft: '-100%' },

          '50%': { marginLeft: '-200%' },
          '70%': { marginLeft: '-200%' },

          '75%': { marginLeft: '-300%' },
          '100%': { marginLeft: '-300%' },
        },
        slideInicioImg2: {
          '0%': { marginLeft: '0' },
          '5%': { marginLeft: '-35%' },
          '10%': { marginLeft: '-65%' },
          '15%': { marginLeft: '-95%' },
          '20%': { marginLeft: '-125%' },
          '30%': { marginLeft: '-125%' },
        },
        //animacion del slider con lso nombres y logo de los diferentes juegos disponibles
        sliderTrack: {
          '0%': { transform: 'translateX(0) ' },
          '100%': { transform: 'translateX(calc( -200px * 13)) ' },
        },
        //muevo el segundo slide
        sliderTrack2: {
          '0%': { transform: 'translateX(0) ' },
          '100%': { transform: 'translateX(calc( -250px * 9)) ' },
        },
        //animacion del la imagen de inicio que sale de la izquierda
        leftText: {
          '0%': {
            transform: 'translateX(-400px) scale(0.93)',
            opacity: 0,


          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: 1,

          }
        },
        //mueve el segundo segmento de informacion de lado derecho
        rigthText: {
          '0%': {
            transform: 'translateX(400px) scale(0.93)',
            opacity: 0,

          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: 1,
          }
        },
        //escalador de la imagenes del segundo slide
        scaleImg: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.5)',
          }

        },
        fadeInDown: {
          '0%':{
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          '100%' :{
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInUp: {
          '0%':{
            opacity: 0,
            transform: 'translateY(70px)'
          },
          '100%' :{
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: { // Nueva animación para fadeInLeft
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)' // Inicia desde la izquierda
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)' // Sin cambios
          }
        },
        fadeInRight: { // Nueva animación para fadeInRight
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)' // Inicia desde la derecha
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)' // Sin cambios
          }
        }
      },
    },
    plugins: [
      animations,
      plugin(function ({ addComponents, theme }) {
        addComponents({
          // Clases css para los moviles:
          //clase para el input en el movil
          '.movil-floating-input': {
            '@apply m-0 block h-[29px] w-full py-[18px] px-[19px]': {},
            //clase para el input cuando se enfoca
            '&:focus': {
              '@apply pb-[10px] pt-[26px]': {},
            },
            //clase para el input cuando no esta vacio
            '&:not(:placeholder-shown)': {
              '@apply pb-[10px] pt-[26px]': {},
            }
          },
          //clase para el label en el movil
          '.movil-floating-label': {
            '@apply text-[10px] px-3 py-2': {},
          },
          //clase para el input en el pc
          '.floating-input': {
            '@apply m-0 block h-[45px] w-full rounded border border-solid border-secondary bg-primary bg-clip-padding px-[9px] pt-[8px] pb-[12px] font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent': {},
            //clase para el input cuando se enfoca
            '&:focus': {
              '@apply border-focus pb-2.5 pt-6 text-secondary outline-none': {},
              'box-shadow': '0 0 0 3px rgba(22, 204, 17, .2)',
            },
            //clase para el input cuando no esta vacio
            '&:not(:placeholder-shown)': {
              '@apply pb-2.5 pt-6': {},
            },
          },
          //clase para el label en el pc
          '.floating-label': {
            '@apply pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-[8px] pt-[12px] text-secondary transition-[opacity,transform] duration-200 ease-linear text-[14px]': {},
            '.peer:focus ~ &': {
              '@apply -translate-y-2 translate-x-[0.15rem] scale-[0.85] text-focus': {},
            },
            //clase para el input cuando no esta vacio
            '.peer:not(:placeholder-shown) ~ &': {
              '@apply -translate-y-2 translate-x-[0.15rem] scale-[0.85]': {},
            },
            '@media (prefers-reduced-motion: reduce)': {
              '@apply transition-none': {},
            },
          },
          //clase para el grid en el pc
          '.grid-form': {
            '@apply grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-x-[19px] gap-y-[25px]': {},
          },
          //clase para el grid en el movil
          '.movil-grid-form': {
            '@apply grid grid-cols-1 gap-x-[10px] gap-y-[7px]': {},
          },
          //clase para el titulo en el pc
          '.clip-title-form': {
            'clip-path': 'polygon(0.972% 0%, 99.025% 0%, 100% 50%, 99.025% 100%, 0.972% 100%, 0% 50%, 0.972% 0%)',
          },
          //clase para el boton en el pc
          '.clip-botton-form': {
            // clase para la forma del boton
            '@apply [clip-path:polygon(15px_0%,calc(100%-15px)_0%,100%_50%,calc(100%-15px)_100%,15px_100%,0%_50%)] hover:[clip-path:polygon(0px_0%,100%_0%,100%_50%,100%_100%,0_100%,0%_50%)] [transition:0.2s] before:absolute before:[clip-path:polygon(45%_0,50%_0,5%_50%,50%_100%,45%_100%,0%_50%)] before:top-[6px] before:left-[6px] before:w-[26px] before:h-[calc(100%-12px)] before:bg-background before:z-10 before:content-[""] before:box-border hover:before:[clip-path:polygon(2px_50%,2px_calc(100%-2px),100%_calc(100%-0px),100%_100%,0_100%,0_100%)] hover:before:[transition:0.2s] after:absolute after:top-[6px] after:right-[8px] after:left-auto  after:w-[26px] after:h-[calc(100%-12px)] after:bg-background  after:z-10 after:rotate-180 after:content-[""] after:[clip-path:polygon(45%_0,50%_0,5%_50%,50%_100%,45%_100%,0%_50%)] hover:after:[clip-path:polygon(2px_50%,_2px_calc(100%-2px),_100%_calc(100%-_0px),_100%_100%,_0_100%,_0_100%)] hover:after:[transition:0.2s]': {},
            '&:hover': {
              '@apply [clip-path:polygon(0px_0%,100%_0%,100%_50%,100%_100%,0_100%,0%_50%)] [transition:0.2s]': {},
            },
            //clase para el boton cuando no se enfoca

          },
        })
      }),
    ],
  },
} // {{ edit_2 }}
