import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};
//here the RootLayout has access to the each page content in the children prop similar to <Outlet/> in react router
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by Wild-oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
