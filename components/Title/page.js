export default function Titulo({ children, styles }) {
  return (
    <h1 className={`my-0 font-bold leading-6 text-[#001959] lg:text-4xl text-2xl md:text-3xl ${styles || ""}`}>
      {children}
    </h1>
  )
}
