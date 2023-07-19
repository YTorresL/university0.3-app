"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import Image from "next/image"

const proceso = [
  {
    title: "PRIMER PASO",
    list: [
      "Recolección de documentos para la inscripción y esperar la carta de invitación.",
      "Pasaporte",
      "Título de bachiller",
      "Notas del colegio",
    ],
  },
  {
    title: "SEGUNDO PASO",
    list: [
      "Llenar formulario",
      "Fotografía 3,5 x 4,5",
      "Certificado de VIH (decirle que es para estudiar en el extranjero)",
      "Compra de seguro médico",
    ],
  },
  {
    title: "ÚLTIMO PASO",
    list: [
      "Compra de boletos de avión",
      "Recibimiento en el aeropuerto (Posiblemente tu seas uno de los que lleguen exactamente aquí, nos encantará recibirte) - UBICACION AEROPUERTO",
      "Acompañamiento a la residencia estudiantil y universidad.",
      "Acceso a la comunidad de más rápido crecimiento de latinos en Rusia y desbloquea las mejores experiencias que este grandioso país tiene para ofrecerte.",
    ],
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
        title="Inicio"
      />
    </div>
  )

  const YoutubeEmbedVertical = ({ embedId }) => (
    <div>
      <iframe
        width="280"
        height="400"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      />
    </div>
  )

  return (
    <>
      <main>
        <div className="bg-[#004091]">
          <div className="bg-[url('/topN.png')] bg-cover bg-no-repeat bg-center lg:h-96 sm:h-[36rem] h-[45rem]">
            <div className="md:w-[70%] w-[90%] mx-auto">
              <div className="sm:flex sm:items-center py-10">
                <div>
                  <div className="w-24 md:w-44">
                    <Image
                      src="/profile.png"
                      width="800"
                      height="800"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <Parrafo styles="text-[#004091] hyphens-auto">
                    ¡Hola! Soy Mariano Reyes y mi misión es llevar a 1 millón de
                    estudiantes latinos a que puedan relacionarse con una
                    educación totalmente proactiva en Rusia. Para eso, he
                    cofundado ZDOROVO, una comunidad de personas de todos los
                    países y nativos, con el propósito de llevarte a que puedas
                    desbloquear todas las experiencias que este grandioso país
                    tiene para ofrecerte.
                  </Parrafo>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <div className="mb-8">
                <div className="h-12">
                  <Image
                    src="/arrow.png"
                    width="200"
                    height="200"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <OpacityAnimation>
              <div className="w-full lg:w-[75%] mx-auto">
                <YoutubeEmbed embedId="OlI_glpNGUY" />
              </div>
            </OpacityAnimation>
            <div>
              <div className="py-16">
                <div>
                  <OpacityAnimation>
                    <Titulo styles="text-[#FFBD59] uppercase text-center">
                      ¿Te preocupa el idioma?
                    </Titulo>
                    <Parrafo styles="hyphens-auto text-white">
                      Quiero serte sincero y es que esa pregunta tambien me la
                      he realizado yo y el 99% de todos los latinos que estamos
                      en rusia, y tengo una respuesta sencilla para esto, antes
                      de iniciar una carrera universitaria, maestría o el
                      interés que tengas, debes cursar el año de preparatoria
                      del idioma ruso, así que no te preocupes, que antes de
                      iniciar tu carrera ya estarás hablando ruso, y si solo
                      quieres venir a estudiar el idioma, también es posible, no
                      es obligatorio cursar una carrera universitaria, pero
                      dejame decirte que no he conocido a un latino que venga a
                      Rusia y no se quiera quedar.
                    </Parrafo>
                  </OpacityAnimation>
                </div>
              </div>
            </div>

            <div className="py-16">
              <Titulo styles="text-[#FFBD59] text-center sm:w-[90%] mx-auto">
                PASO A PASO DESDE QUE ESTAS EN TU PAÍS HASTA QUE LLEGAS A RUSIA
              </Titulo>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="w-full">
                  <ul className="mt-6">
                    <OpacityAnimation>
                      {proceso.map((item, index) => (
                        <li className="flex my-3 leading-6" key={index}>
                          <div className="flex flex-col">
                            <h1 className="my-0 text-lg font-semibold text-[#FFBD59]">
                              {item.title}
                            </h1>
                            <ol className="list-decimal text-white">
                              {item.list.map((item, index) => (
                                <li key={index} className="ml-8">
                                  <p className="text-base sm:text-lg">{item}</p>
                                </li>
                              ))}
                            </ol>
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
              <Titulo styles="text-[#FFBD59] text-center">
                ESTANDO YA EN RUSIA ¿NO SABES DONDE VAS A VIVIR?
              </Titulo>
              <div className="flex flex-col items-center justify-center md:flex-row mt-8">
                <div className="lg:mx-[6%]">
                  <YoutubeEmbedVertical embedId="3jFIyaN04g4" />
                </div>
                <OpacityAnimation>
                  <div className="md:ml-6 my-6">
                    <p className="text-lg font-bold text-white sm:text-xl m-0 mt-3">
                      En ZDOROVO te brindamos dos opciones:
                    </p>
                    <ul className="list-disc list-inside text-lg font-bold text-[#FFBD59] sm:text-xl m-0 mt-3">
                      <li>RESIDENCIA ESTUDIANTIL</li>
                      <li>DEPARTAMENTOS PRIVADOS</li>
                    </ul>
                    <Parrafo styles="text-white">
                      Aún te quedan dudas, los miembros de la comunidad te las
                      resolverán en el siguiente video. <br /> Ya están viviendo
                      la experiencia de pertenecer a la comunidad latina de más
                      rápido crecimiento en Rusia con ZDOROVO. Y tú, quieres ser
                      el próximo
                    </Parrafo>
                  </div>
                </OpacityAnimation>
              </div>
              <div className="w-full text-center mt-8">
                <div className="h-[1px] bg-[#FFBD59] w-full"></div>
                <button className="px-6 py-2 mt-6 text-white text-lg bg-[#FFBD59] font-bold uppercase hover:bg-[#FFBD59] transition duration-500 ease-in-out rounded-lg">
                  ¿Quieres ser el proximo en Rusia?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#004091] bg-[url('/bottonN.png')] bg-cover bg-no-repeat bg-center h-96">
        <div className="flex items-center justify-center h-full">
          <div className="sm:h-20 h-16 mt-24">
            <Image
              src="/logo.png"
              width="800"
              height="800"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
