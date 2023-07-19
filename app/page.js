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
    description:
      "Recolección de documentos para la inscripción y esperar la carta de invitación.",
    requisitos: "Requisitos:",
    list: ["Pasaporte", "Título de bachiller", "Notas del colegio"],
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
      "Recibimiento en el aeropuerto",
      "Acompañamiento a la residencia estudiantil y universidad.",
      "Acceso a la comunidad de más rápido crecimiento de latinos en Rusia y desbloquea las mejores experiencias que este grandioso país tiene para ofrecerte.",
    ],
  },
]

const banderas = [
  {
    name: "rusia",
    image: "/ru.png",
    video: "FUiTL8_jUek",
  },
  {
    name: "venezuela",
    image: "/ve.png",
    video: "3jFIyaN04g4",
  },
  {
    name: "peru",
    image: "/peru.png",
    video: "FUiTL8_jUek",
  },

  {
    name: "españa",
    image: "/es.png",
    video: "3jFIyaN04g4",
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
    <div className="border-2 border-[#FFBD59]">
      <iframe
        width="273"
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
              <div className="sm:flex sm:items-center py-10 animate-fade-right">
                <div>
                  <div className="w-24 md:w-44">
                    <Image
                      src="/profile.png"
                      alt="Mariano Reyes"
                      width="800"
                      height="800"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-4">
                  <Parrafo styles="text-[#004091] hyphens-auto text-justify">
                    ¡Hola! Soy <span className="font-bold">Mariano Reyes</span>{" "}
                    y mi misión es llevar a{" "}
                    <span className="font-bold">
                      1 millón de estudiantes latinos
                    </span>{" "}
                    a que puedan relacionarse con una{" "}
                    <span className="font-bold">educación</span> totalmente
                    proactiva en <span className="font-bold">Rusia.</span> Para
                    eso, he cofundado <span className="font-bold">ZDOROVO</span>
                    , una <span className="font-bold">comunidad</span> de
                    personas de todos los países y nativos, con el{" "}
                    <span className="font-bold">
                      propósito de llevarte a que puedas desbloquear
                    </span>{" "}
                    todas las{" "}
                    <span className="font-bold">
                      experiencias que este grandioso país
                    </span>{" "}
                    tiene para ofrecerte.
                  </Parrafo>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <div className="mb-8">
                <div className="h-8">
                  <Image
                    src="/arrow.png"
                    width="200"
                    height="200"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[75%] mx-auto">
              <YoutubeEmbed embedId="OlI_glpNGUY" />
            </div>
            <div>
              <div className="py-16">
                <div>
                  <OpacityAnimation>
                    <Parrafo styles="hyphens-auto text-white text-justify">
                      <span className="font-bold">
                        Quieres estudiar en Rusia y no sabes como hacerlo.
                      </span>{" "}
                      Si llegaste hasta aquí, “es porque seguramente quieres dar
                      ese gran paso y{" "}
                      <span className="font-bold">
                        salir de tu zona de confort
                      </span>{" "}
                      como lo hemos hecho{" "}
                      <span className="font-bold">miles de latinos</span> que
                      estamos estudiando y viviendo{" "}
                      <span className="font-bold">
                        miles de experiencias aquí en Rusia.
                      </span>
                      ”
                    </Parrafo>
                    <Parrafo styles="hyphens-auto text-white mt-4">
                      Pero antes de hablar del proceso de documentación,
                    </Parrafo>
                    <p className="text-lg text-white font-bold">
                      DÉJAME HACERTE UNA PREGUNTA.
                    </p>
                  </OpacityAnimation>
                </div>
              </div>
            </div>
            <div>
              <div className="py-16">
                <div>
                  <OpacityAnimation>
                    <Titulo styles="text-[#FFBD59] uppercase text-center">
                      ¿Te preocupa el idioma?
                    </Titulo>
                    <Parrafo styles="hyphens-auto text-white text-justify">
                      <span className="font-bold"></span>
                      Quiero serte sincero y es que esa pregunta tambien me la
                      he realizado yo y el <span className="font-bold"></span>
                      99% de todos los latinos que estamos en rusia, y tengo una
                      <span className="font-bold"></span>
                      respuesta sencilla para esto, antes de iniciar una carrera
                      universitaria, maestría o el interés que tengas, debes
                      <span className="font-bold"></span>
                      cursar el año de preparatoria del idioma ruso, así que no
                      te preocupes, que antes de iniciar tu carrera{" "}
                      <span className="font-bold"></span>
                      ya estarás hablando ruso, y si solo quieres venir a
                      estudiar el idioma, también es posible,{" "}
                      <span className="font-bold"></span>
                      no es obligatorio cursar una carrera universitaria, pero
                      dejame decirte que no he conocido a un{" "}
                      <span className="font-bold"></span>
                      latino que venga a <span className="font-bold"></span>
                      Rusia y no se quiera quedar.
                    </Parrafo>
                  </OpacityAnimation>
                </div>
              </div>
            </div>

            <div>
              <div className="py-16">
                <div>
                  <OpacityAnimation>
                    <Titulo styles="text-[#FFBD59] uppercase text-center">
                      ¿DIME CUÁL CARRERA DESEAS ESTUDIAR? Y BUSCAREMOS PARA TI
                      LAS MEJORES UNIVERSIDADES A TU DISPOSICIÓN
                    </Titulo>
                    <Parrafo styles="hyphens-auto text-white text-justify">
                      Yo entiendo todo el lío que conlleva buscar que
                      universidad y qué carrera seguir, así que para eso te
                      tengo una mejor solución, al final de la web habrá un
                      botón para que llenes un formulario, donde mi equipo de
                      trabajo se pondrá en contacto contigo y en una
                      videollamada presentarte la solución en menos de 30
                      minutos y así ya inicies el proceso de admisión y no te
                      quedes sin cupo.
                    </Parrafo>
                  </OpacityAnimation>
                </div>
              </div>
            </div>

            <OpacityAnimation>
              <div className="sm:w-96 mx-auto border-2 border-[#FFBD59]">
                <Image
                  src="/2.jpg"
                  alt="Yo entiendo todo el lío que conlleva buscar que
                      universidad y qué carrera seguir, así que para eso te
                      tengo una mejor solución, al final de la web habrá un
                      botón para que llenes un formulario, donde mi equipo de
                      trabajo se pondrá en contacto contigo y en una
                      videollamada presentarte la solución en menos de 30
                      minutos y así ya inicies el proceso de admisión y no te
                      quedes sin cupo."
                  width={900}
                  height={900}
                  className="w-full h-full object-contain"
                />
              </div>
            </OpacityAnimation>

            <div className="py-16">
              <OpacityAnimation>
                <Titulo styles="text-[#FFBD59] text-center md:w-[75%] mx-auto">
                  PASO A PASO DESDE QUE ESTAS EN TU PAÍS HASTA QUE LLEGAS A
                  RUSIA
                </Titulo>
              </OpacityAnimation>

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
                            {item.description ? (
                              <Parrafo styles="hyphens-auto text-white text-justify">
                                {item.description} <br />
                                {item.requisitos}
                              </Parrafo>
                            ) : (
                              ""
                            )}

                            <ol className="text-white">
                              {item.list.map((item, index) => (
                                <li key={index} className="ml-8 flex">
                                  <span className="mr-2">-</span>
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
            <OpacityAnimation>
              <div className="sm:w-96 mx-auto border-2 border-[#FFBD59]">
                <Image
                  src="/7.jpg"
                  alt="Aún te quedan dudas, los miembros de la comunidad te las
                      resolverán en el siguiente video. Ya están viviendo
                      la experiencia de pertenecer a la comunidad latina de más
                      rápido crecimiento en Rusia con ZDOROVO. Y tú, quieres ser
                      el próximo"
                  width={900}
                  height={900}
                  className="w-full h-full object-contain"
                />
              </div>
            </OpacityAnimation>
            <div className="md:w-[70%] w-[90%] mx-auto pb-6 pt-16">
              <OpacityAnimation>
                <Titulo styles="text-[#FFBD59] text-center">
                  ESTANDO YA EN RUSIA ¿NO SABES DONDE VAS A VIVIR?
                </Titulo>
                <div className="mb-16">
                  <p className="text-lg font-bold text-white sm:text-xl m-0 mt-3">
                    En <span className="font-bold"></span>
                    ZDOROVO te brindamos dos opciones:
                  </p>
                  <ul className="list-disc list-inside text-lg font-bold text-[#FFBD59] sm:text-xl m-0 mt-3">
                    <li>RESIDENCIA ESTUDIANTIL</li>
                    <li>DEPARTAMENTOS PRIVADOS</li>
                  </ul>
                  <Parrafo styles="hyphens-auto text-white text-justify">
                    Los miembros de la comunidad te las resolverán en el
                    siguiente video. Ellos ya están viviendo la experiencia de
                    pertenecer a la comunidad latina de más rápido crecimiento
                    en Rusia con ZDOROVO y TÚ VAS SER EL PRÓXIMO.
                  </Parrafo>
                </div>
              </OpacityAnimation>
            </div>
            <div className="w-[90%] mx-auto pb-10">
              <OpacityAnimation>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-3">
                  {banderas.map((item, index) => (
                    <div key={index}>
                      <div>
                        <YoutubeEmbedVertical embedId={item.video} />
                      </div>
                      <div key={index} className="h-10 mt-4 mb-1">
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </OpacityAnimation>

              <div className="w-full text-center mt-8">
                <div className="h-[2px] bg-[#FFBD59] w-full"></div>
                <OpacityAnimation>
                  <button className="px-6 py-2 mt-6 text-white text-lg bg-[#FFBD59] font-bold uppercase hover:bg-[#FFBD59] transition duration-500 ease-in-out rounded-lg">
                    Quiero ser el proximo en Rusia
                  </button>
                </OpacityAnimation>
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
              alt="Logo ZDOROVO"
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
