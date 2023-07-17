export default function Parrafo({ children, styles }) {
  return <p className={`text-white ${styles || ""}`}>{children}</p>
}
