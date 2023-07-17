"use client"
import Image from "next/image"
import Line from "@/components/Line/page"
import Slider from "react-slick"
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

const programas = [
  {
    index: 0,
    title: "Carreras",
    description:
      "La Universidad Estatal de Moscú es una universidad pública de investigación ubicada en Moscú, Rusia. Fundada en 1755 por Mijaíl Lomonósov, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/moscu.jpg",
  },
  {
    index: 1,
    title: "Maestrías",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/maestria.jpg",
  },
  {
    index: 2,
    title: "Curso de ruso",
    description:
      "La Universidad Estatal de Kaerov es una universidad pública de investigación ubicada en Kaerov, Rusia. Fundada en 1724 por Pedro el Grande, es la universidad más antigua de Rusia y una de las más prestigiosas del mundo.",
    imagen: "/ruso.jpg",
  },
]

const preguntas = [
  {
    title: "¿Cuáles son los requisitos para estudiar en Rusia como extranjero?",
    description:
      "Los requisitos pueden variar según la universidad y el programa, pero generalmente necesitarás presentar una solicitud de admisión, un pasaporte válido, certificados de estudios anteriores, un formulario de solicitud de visa, un seguro médico y pruebas de dominio del idioma ruso (a menos que el programa se imparta en inglés).",
  },
  {
    title:
      "¿Qué opciones de financiamiento están disponibles para estudiar en Rusia?",
    description:
      "Hay varias opciones de financiamiento disponibles, como becas gubernamentales, becas universitarias, programas de intercambio, financiamiento personal o préstamos educativos. Puedes investigar las becas ofrecidas por el gobierno ruso, tu propio gobierno, organizaciones internacionales y fundaciones educativas.",
  },
  {
    title: "¿Es necesario hablar ruso para estudiar en Rusia?",
    description:
      "Depende del programa y la universidad. Algunos programas se imparten completamente en inglés, especialmente a nivel de posgrado, mientras que otros requieren un nivel mínimo de competencia en ruso. Sin embargo, aprender ruso básico puede ser beneficioso para la vida cotidiana y la interacción con los lugareños.",
  },
  {
    title: "¿Cómo es la vida estudiantil en Rusia?",
    description:
      "La vida estudiantil en Rusia es vibrante y diversa. Las universidades ofrecen una amplia gama de actividades extracurriculares, clubes estudiantiles y eventos culturales. Además, hay muchas oportunidades para explorar la cultura rusa, como visitar museos, asistir a festivales y viajar a diferentes ciudades del país durante las vacaciones.",
  },
  {
    title:
      "¿Cuál es el costo de vida en Rusia para los estudiantes extranjeros?",
    description:
      "El costo de vida en Rusia puede variar según la ciudad y el estilo de vida individual. En general, las ciudades más grandes como Moscú y San Petersburgo tienden a ser más costosas que las ciudades más pequeñas. Sin embargo, en comparación con otros destinos de estudio en Europa o América del Norte, Rusia puede ser más asequible en términos de alojamiento, transporte y alimentos.",
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

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }
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
          <OpacityAnimation>
            <div className="w-[85%] mx-auto py-16">
              <Titulo>Universidades y programas</Titulo>
              <Line />
              <Slider {...settings3}>
                {programas.map((item, index) => (
                  <div key={index} className="px-4 py-6 relative">
                    <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-lg">
                      <div className="bg-[#001959]/30 absolute h-full w-full">
                        <div className="flex items-center justify-center h-full">
                          <h1 className="text-xl font-bold text-white lg:text-4xl sm:text-2xl md:text-3xl">
                            {item.title}
                          </h1>
                        </div>
                      </div>
                      <div>
                        <div className="w-full h-96">
                          <Image
                            src={item.imagen}
                            alt={item.description}
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </OpacityAnimation>
        </div>
        <div>
          <div className="bg-white py-4">
            <div className="w-[85%] sm:w-[60%] mx-auto">
              {" "}
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
        <div>
          <div className="w-[85%] mx-auto py-16">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <ImageWidth
                src="/idioma.jpg"
                alt="Tienes alguna duda, te invitamos a revisar las preguntas más frecuentes."
              />
              <div className="w-full md:w-1/2 md:ml-10 lg shadow-gray-300:mrl-20">
                <Titulo>FAQ</Titulo>
                <Line />
                <Parrafo>
                  Tienes alguna duda, te invitamos a revisar las preguntas más
                  frecuentes.
                </Parrafo>
                {preguntas.map((item, index) => (
                  <OpacityAnimation key={index}>
                    <details className="mt-1">
                      <summary className="flex leading-6 text-[#001959] border-b border-[#001959] p-2 font-semibold">
                        {item.title}
                      </summary>
                      <div className="m-3">
                        <Parrafo>{item.description}</Parrafo>
                      </div>
                    </details>
                  </OpacityAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="lg:p-20 text-white">
        <div className="mx-auto w-[95%] md:w-[85%] p-4 pt-6 md:pt-20 lg:pb-0">
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-3 sm:gap-8">
            <Image
              src="/logoW.png"
              alt="ZDOROVO"
              width={800}
              height={800}
              className="w-56 md:w-72 lg:w-80 mb-6"
            />

            <ul className="text-lg">
              <li className="mb-2">
                <p>
                  Contáctanos para saber mas información sobre los programas.
                </p>
              </li>
              <li className="mb-2">
                <h2 className="mb-2 text-lg font-bold uppercase">
                  Numero de contacto
                </h2>
                <p>+495 95220935</p>
              </li>
              <li className="mb-2">
                <h2 className="mb-2 text-lg font-bold uppercase">
                  Correo electronico
                </h2>
                <p>informacionzdorovo@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
