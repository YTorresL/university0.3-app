export default function Parrafo({ children, styles }) {
  return (
    <p className={`mt-4 text-base sm:text-lg ${styles || ""}`}>{children}</p>
  )
}
