import Header from "../header/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ margin: "3rem auto", width: "90%", maxWidth: "45rem" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
