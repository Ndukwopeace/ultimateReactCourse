import "./App.css";
import Footer from "./Footer";
import  Header  from "./Header";
// import {pizzaData} from "./data"
import Menu from "./Menu";



function App() {
  return (
    <div className="container">
      <Header />
      <Menu/>
      <Footer />
    </div>
  );
}

export default App;
