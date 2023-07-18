"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import ImageWidth from "@/components/ImageWidth/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import { Arrow } from "@/components/Icons/page"

const proceso = [
  {
    title: "Inscripción",
    description: `Regístrate fácilmente en línea o visita nuestras oficinas en tu país.`,
  },
  {
    title: "Visado",
    description: `Te ayudamos con la carta de invitación estudiantil y el proceso de visa.`,
  },
  {
    title: "Viaje e instalación",
    description: `Te recibimos en el aeropuerto y te instalamos en tu residencia universitaria.`,
  },
  {
    title: "Preuniversitario",
    description: ` Aprende el idioma ruso y prepárate para tu carrera.`,
  },
  {
    title: "Inicia tu carrera",
    description: `Estudia en las mejores universidades de Rusia y alcanza tus metas.`,
  },
]

export default function Home() {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )

  return (
    <>
      <main>
        <div className="w-[85%] h-[35rem] mx-auto">
          <div className="flex flex-col justify-center h-full lg:w-[80%] md:w-[70%] w-[90%] ml-[7%]">
            <h1 className="font-bold text-white text-2xl lg:text-6xl sm:text-4xl my-0">
              DILE <span className="text-[#FFBD59]">HOLA A RUSIA</span>
            </h1>
            <Parrafo styles="sm:text-4xl text-xl">
              Sin importar si tienes un conocimiento mínimo del idioma y obtén
              tu <span className="text-[#FFBD59]">visado</span> en{" "}
              <span className="text-[#FFBD59]">menos de 90 días</span>
            </Parrafo>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-8">
            <Arrow className="w-16 h-16" fill="#fff" />
          </div>
        </div>
        <OpacityAnimation>
          <div className="w-[85%] md:w-[50%] mx-auto">
            <YoutubeEmbed embedId="OlI_glpNGUY " />
          </div>
        </OpacityAnimation>
        <div>
          <div className="sm:w-[60%] mx-auto py-16 w-[85%]">
            <div>
              <OpacityAnimation>
                <Titulo styles="text-white">
                  ¿<span className="text-[#FFBD59]">IDIOMA</span>? Не волнуйся
                </Titulo>
                <Parrafo styles="mt-4 text-xl">
                  <span className="text-[#FFBD59]">¿No entendiste verdad?</span>{" "}
                  Tranquilo yo estaba igual al{" "}
                  <span className="text-[#FFBD59]">principio </span>y ya pase
                  por ese proceso, es{" "}
                  <span className="text-[#FFBD59]">mas sencillo</span> de lo que
                  crees.
                  <span className="text-[#FFBD59]">
                    {" "}
                    Uno de los primeros pasos
                  </span>{" "}
                  que realizaremos será en la inscripción de la facultad de
                  idioma, por cierto, no te olvides, tenemos la comunidad{" "}
                  <span className="text-[#FFBD59]">ZDOROVO</span> en rusia que
                  hara{" "}
                  <span className="text-[#FFBD59]">
                    mas agradable tu experiencia.
                  </span>
                </Parrafo>
              </OpacityAnimation>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white py-4">
            <div className="w-[85%] sm:w-[60%] mx-auto">
              <div className="sm:w-[80%]">
                <Titulo styles="text-[#FFBD59]">
                  Paso a paso desde que estas en tu país hasta que llegas a
                  RUSIA
                </Titulo>
              </div>
            </div>
          </div>

          <div className="w-[85%] sm:w-[60%] mx-auto pb-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="w-full">
                <ul className="mt-12">
                  <OpacityAnimation>
                    {proceso.map((item, index) => (
                      <li className="flex my-3 leading-6" key={index}>
                        <div>
                          <div className="px-4 py-2 mr-5 font-bold text-white bg-transparent border-2 border-white transition duration-500 ease-in-out rounded-full">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h1 className="my-0 text-xl font-semibold text-[#FFBD59]">
                            {item.title}
                          </h1>
                          <Parrafo styles="text-xl">{item.description}</Parrafo>
                        </div>
                      </li>
                    ))}
                  </OpacityAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[85%] mx-auto py-10">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="w-full md:w-1/2 md:mr-10 lg:mr-20">
                <ImageWidth
                  src="/estudiante.jpg"
                  alt="Ellos ya están viviendo la experiencia de pertenecer en la comunidad latina de mas rapido crecimiento en Rusia con ZDOROVO"
                />
              </div>
              <OpacityAnimation>
                <div className="my-6">
                  <Titulo styles="text-[#FFBD59] uppercase">
                    Comunidad ZDOROVO
                  </Titulo>
                  <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl m-0 mt-3">
                    Ellos ya están viviendo la experiencia de pertenecer en la
                    comunidad latina de mas rapido crecimiento en Rusia con
                    ZDOROVO
                  </p>
                  <button className="px-6 py-2 mt-6 text-white text-lg bg-[#FFBD59] font-bold uppercase hover:bg-[#FFBD59] transition duration-500 ease-in-out rounded-lg">
                    ¿Quieres ser el proximo en Rusia?
                  </button>
                </div>
              </OpacityAnimation>
            </div>
          </div>
        </div>
      </main>

      <footer className="lg:p-20 text-white">
        <div className="mx-auto w-[95%] md:w-[85%] p-4 pt-6 md:pt-20 lg:pb-0">
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-3 sm:gap-8">
            <div></div>
            <ul className="text-xl">
              <li className="mb-2">
                <p>
                  Contáctanos para saber mas información sobre los programas.
                </p>
              </li>
              <li className="mb-2">
                <h2 className="mb-2 font-bold uppercase">Numero de contacto</h2>
                <p>+495 95220935</p>
              </li>
              <li className="mb-2">
                <h2 className="mb-2 font-bold uppercase">Correo electronico</h2>
                <p>informacionzdorovo@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
