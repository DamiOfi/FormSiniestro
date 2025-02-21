import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <GlobalStyles />
      <Navbar />
      <main className="content">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
