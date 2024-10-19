import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      {/*Navbar*/}
      <Navbar />

      {/*Content*/}
      {<HomePage />}

      {/*Footer*/}
      {<Footer />}
    </div>
  );
}

export default App;
