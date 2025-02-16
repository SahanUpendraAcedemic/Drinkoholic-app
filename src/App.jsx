import Header from "./components/Header";
import Footer from "./components/Footer";
import Routers from "./routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routers /> 
        <main className="p-5 min-h-screen"></main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
