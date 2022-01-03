import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
