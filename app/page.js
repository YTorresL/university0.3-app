"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Parrafo from "@/components/Paragraph/page"
import Titulo from "@/components/Title/page"
import OpacityAnimation from "@/components/OpacityAnimation/page"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import ImageWidth from "@/components/ImageWidth/page"
import { WistiaProvider, WistiaPlayer } from "@wistia/react-embeds"

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
const slider1 = [
  {
    image: "/universidad1.jpg",
  },
  {
    image: "/universidad2.jpg",
  },
  {
    image: "/universidad3.jpg",
  },
  {
    image: "/universidad4.jpg",
  },
]
const slider2 = [
  {
    image: "/experiencias1.jpg",
  },
  {
    image: "/experiencias2.jpg",
  },
  {
    image: "/experiencias3.jpg",
  },
  {
    image: "/experiencias4.jpg",
  },
  {
    image: "/experiencias5.jpg",
  },
  {
    image: "/experiencias6.jpg",
  },
  {
    image: "/experiencias7.jpg",
  },
  {
    image: "/experiencias8.jpg",
  },
  {
    image: "/experiencias9.jpg",
  },
]
const banderas = [
  {
    name: "Venezuela",
    image: "/ve.png",
    video: "pgkc1xz6ad",
  },
  {
    name: "Peru",
    image: "/peru.png",
    video: "a5830dutqr",
  },
  {
    name: "España",
    image: "/es.png",
    video: "c0jeraxd4k",
  },
  {
    name: "Colombia",
    image: "/co.png",
    video: "yoj52d93d9",
  },
  {
    name: "Ecuador",
    image: "/ec.png",
    video: "euoobya4w8",
  },
  {
    name: "Rusia",
    image: "/ru.png",
    video: "khtd4l60ee",
  },
]

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "fff",
          borderRadius: "0px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "0px" }}></ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 964,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <main>
        <div className="bg-[#004091]">
          <div className="bg-[url('/topN.webp')] bg-cover bg-no-repeat bg-center lg:h-96 min-[320px]:h-[38rem] sm:h-[36rem] h-[45rem]">
            <div className="md:w-[70%] w-[90%] mx-auto">
              <div className="sm:flex sm:items-center py-10 animate-fade-right">
                <div>
                  <div className="w-24 md:w-44">
                    <Image
                      src="/profile.webp"
                      alt="Mariano Reyes"
                      width="176"
                      height="176"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="sm:ml-4">
                  <Parrafo styles="text-[#004091] text-center">
                    ¡Hola! Soy{" "}
                    <span className="font-extrabold">Mariano Reyes</span> y mi
                    misión es impulsar a{" "}
                    <span className="font-extrabold">
                      1 millón de estudiantes latinos
                    </span>{" "}
                    a romper las barreras geográficas y expandir su{" "}
                    <span className="font-extrabold">calidad de vida</span> a
                    través de una educación dinámica en{" "}
                    <span className="font-extrabold">Rusia</span>, donde no solo
                    se llenen de{" "}
                    <span className="font-extrabold">conocimientos</span>, sino
                    de experiencias, lo que me llevó a cofundar{" "}
                    <span className="font-extrabold">ZDOROVO</span>,{" "}
                    <span className="font-extrabold">comunidad</span> de latinos
                    con sed de{" "}
                    <span className="font-extrabold">crecimiento</span> y
                    nativos con hambre de aportar, que en conjunto nos centramos
                    en{" "}
                    <span className="font-extrabold">
                      crecer, aprender y disfrutar
                    </span>
                    .
                  </Parrafo>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[70%] w-[90%] mx-auto">
            <div className="my-8">
              <Titulo styles="text-[#FFBD59] uppercase text-center">
                Dile hola a Rusia
              </Titulo>
              <Parrafo styles="text-white text-center mt-2">
                Sin importar si tienes un conocimiento mínimo del idioma y obtén
                un visado en menos de 60 días
              </Parrafo>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-8">
                <div className="h-8">
                  <Image
                    src="/arrow.png"
                    width="51"
                    height="33"
                    alt="arrow"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[75%] mx-auto">
              <div className="border-2 border-[#FFBD59]">
                <WistiaProvider>
                  <WistiaPlayer hashedId="c7gmdqmdmn" />
                </WistiaProvider>
              </div>
            </div>
            <div>
              <div className="py-5">
                <div>
                  <OpacityAnimation>
                    <Parrafo styles="text-white text-center">
                      <span className="font-extrabold text-[#FFBD59]">
                        ¿Quieres estudiar en Rusia y no sabes cómo hacerlo?
                      </span>{" "}
                      Si llegaste hasta aquí, “es porque seguramente quieres dar
                      ese gran paso y{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        salir de tu zona de confort
                      </span>{" "}
                      como lo hemos hecho{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        miles de latinos
                      </span>{" "}
                      que estamos estudiando y viviendo{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        miles de experiencias aquí en Rusia.
                      </span>
                      ”
                    </Parrafo>
                    <Parrafo styles="text-white text-center mt-4">
                      Pero antes de hablar del proceso de documentación,
                    </Parrafo>
                    <p className="text-lg text-center text-[#FFBD59] font-bold">
                      DÉJAME HACERTE UNA PREGUNTA.
                    </p>
                  </OpacityAnimation>
                </div>
              </div>
            </div>
          </div>

            <div>
              <div className="py-5">
                <div>
                  <OpacityAnimation>
                  <div className="bg-white w-full py-2">
                    <Titulo styles="text-[#FFBD59] uppercase text-center">
                      ¿Te preocupa el idioma?
                    </Titulo>
                    </div>
                    <div className="md:w-[70%] w-[90%] mx-auto">
                    <Parrafo styles="text-white text-center">
                      <span className="font-extrabold text-[#FFBD59]">
                        Quiero serte sincero
                      </span>{" "}
                      y es que esa pregunta tambien me la he realizado yo y el{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        99% de todos los latinos que estamos en rusia
                      </span>
                      , y tengo una{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        respuesta sencilla
                      </span>{" "}
                      para esto, antes de iniciar una carrera universitaria,
                      maestría o el interés que tengas, debes{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        cursar el año de preparatoria del idioma ruso
                      </span>
                      , así que no te preocupes, que antes de iniciar tu carrera{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        ya estarás hablando ruso
                      </span>
                      , y si solo quieres venir a estudiar el idioma, también es
                      posible,{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        no es obligatorio
                      </span>{" "}
                      cursar una carrera universitaria, y estoy{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        seguro
                      </span>{" "}
                      de que una vez vengas a{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        Rusia
                      </span>
                      , no te querrás ir.
                    </Parrafo>
                    </div>
                  </OpacityAnimation>
                </div>
              </div>
            </div>
            <div>
              <div className="py-5">
                <div>
                  <OpacityAnimation>
                  <div className="bg-white w-full py-2">
                  <div className="md:w-[70%] w-[90%] mx-auto">
                    <Titulo styles="text-[#FFBD59] uppercase text-center">
                      ¿DIME CUÁL CARRERA DESEAS ESTUDIAR? Y BUSCAREMOS PARA TI
                      LAS MEJORES UNIVERSIDADES A TU DISPOSICIÓN
                    </Titulo>
                    </div>
                    </div>
                    <div className="md:w-[70%] w-[90%] mx-auto">
                    <Parrafo styles="text-white text-center">
                      <span className="font-extrabold text-[#FFBD59]">
                        Yo entiendo todo el lío que conlleva buscar que
                        universidad y qué carrera seguir
                      </span>
                      , así que para eso te tengo una mejor solución, al final
                      de la web habrá un botón para que llenes un formulario,{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        donde mi equipo de trabajo se pondrá en contacto contigo
                      </span>{" "}
                      y en una videollamada presentarte la solución en menos de
                      30 minutos y{" "}
                      <span className="font-extrabold text-[#FFBD59]">
                        así ya inicies el proceso de admisión y no te quedes sin
                        cupo.
                      </span>
                    </Parrafo>
                    </div>
                  </OpacityAnimation>
                </div>
              </div>
            </div>
            <OpacityAnimation>
              <div className="my-8 h-60 sm:h-96 overflow-hidden w-full lg:w-[710px] mx-auto border-2 border-[#FFBD59]">
                <Slider {...settings}>
                  {slider1.map((item, index) => (
                    <ImageWidth src={item.image} key={index} />
                  ))}
                </Slider>
              </div>
            </OpacityAnimation>        
            <div className="py-5">
              <OpacityAnimation>
                <div className="bg-white w-full py-2">
                <div className="md:w-[70%] w-[90%] mx-auto">
                  <Titulo styles="text-[#FFBD59] text-center md:w-[75%] mx-auto">
                  PASO A PASO DESDE QUE ESTAS EN TU PAÍS HASTA QUE LLEGAS A
                  RUSIA
                  </Titulo>
                  </div>
                </div>   
              </OpacityAnimation>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="w-full">
                  <div className="mt-6">
                  <div className="md:w-[70%] w-[90%] mx-auto">
                    <OpacityAnimation>
                      {proceso.map((item, index) => (
                        <div className="flex my-3 leading-6" key={index}>
                          <div className="flex flex-col">
                            <h1 className="my-0 text-lg font-semibold text-[#FFBD59]">
                              {item.title}
                            </h1>
                            {item.description ? (
                              <p className="text-white text-base sm:text-lg">
                                {item.description} <br />
                                {item.requisitos}
                              </p>
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
                        </div>
                      ))}
                    </OpacityAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="md:w-[70%] w-[90%] mx-auto">
            <OpacityAnimation>
              <div className="my-6 h-60 sm:h-96 overflow-hidden w-full lg:w-[710px] mx-auto border-2 border-[#FFBD59]">
                <Slider {...settings}>
                  {slider2.map((item, index) => (
                    <ImageWidth src={item.image} key={index} />
                  ))}
                </Slider>
              </div>
            </OpacityAnimation>
            <div className="pb-6 pt-6">
              <OpacityAnimation>
                <Titulo styles="text-[#FFBD59] text-center">
                  ESTANDO YA EN RUSIA ¿NO SABES DONDE VAS A VIVIR?
                </Titulo>
                <div className="mb-6">
                  <p className="text-lg text-white sm:text-xl m-0 mt-3">
                    En <span className="font-extrabold">ZDOROVO</span> te
                    brindamos dos opciones:
                  </p>
                  <ul className="list-disc list-inside text-lg font-bold text-[#FFBD59] sm:text-xl m-0 mt-3">
                    <li>RESIDENCIA ESTUDIANTIL</li>
                    <li>DEPARTAMENTOS PRIVADOS</li>
                  </ul>
                  <Parrafo styles="text-white">
                    Ellos ya están viviendo la experiencia de pertenecer a la
                    comunidad latina de más rápido crecimiento en Rusia con
                    ZDOROVO y tú,{" "}
                    <span className="font-extrabold text-[#FFBD59]">
                      ¿VAS SER EL PRÓXIMO?
                    </span>
                  </Parrafo>
                </div>
              </OpacityAnimation>
            </div>
          </div>
          <div className="w-[90%] mx-auto pb-10 overflow-hidden">
            <OpacityAnimation>
              <Slider {...settings2}>
                {banderas.map((item, index) => (
                  <div key={index}>
                    <div className="p-[13px]">
                      <div className="h-[482px] mx-auto border-2 border-[#FFBD59] w-[273px] overflow-hidden">
                        <WistiaProvider>
                          <WistiaPlayer
                            hashedId={item.video}
                            videoFoam={false}
                            style={{
                              width: "273px",
                              height: "482px",
                            }}
                          />
                        </WistiaProvider>
                      </div>
                      <div key={index} className="h-10 mt-4 mb-1">
                        <Image
                          src={item.image}
                          width={70}
                          alt={item.name}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </OpacityAnimation>

            <div className="w-full text-center mt-6">
              <div className="h-[2px] bg-[#FFBD59] w-full mb-10"></div>
              <OpacityAnimation>
                <Link
                  href="https://calendly.com/zdorovo-dileholaarusia/sesion-de-claridad"
                  target="_blank"
                  className="px-6 py-2 text-white text-lg bg-[#FFBD59] font-bold uppercase hover:bg-[#FFBD59] transition duration-500 ease-in-out rounded-lg"
                >
                  Quiero ser el proximo en Rusia
                </Link>
              </OpacityAnimation>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#004091] bg-[url('/bottonN.webp')] bg-cover bg-no-repeat bg-center h-96">
        <div className="flex items-center justify-center h-full">
          <div className="sm:h-20 h-16 mt-24">
            <Image
              src="/logo.webp"
              alt="Logo ZDOROVO"
              width={297.53}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  )
}
