import NavBar from "./NavBar"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
