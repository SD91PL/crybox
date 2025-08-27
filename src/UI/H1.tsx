type H1Props = {
  children: React.ReactNode
  center?: boolean
}

export default function H1({ children, center }: H1Props) {
  return (
    <h1 className={`mt-10 font-bold text-[2rem] ${center ? 'text-center' : ''}`}>
      {children}
    </h1>
  )
}