import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import Header from "./Header";

function App() {
  // const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
