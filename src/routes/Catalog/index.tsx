import "./styles.css";
import Card from "../../components/Card";
import Coments from "../../components/Coments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="dsc-card-section" className="dsc-container746">
          <div className="dsc-title">
            <h3>Venha nos visitar</h3>
          </div>
          <Card />
          <Card />
        </section>
        <section id="dsc-coments-section">
          <div className="dsc-title">
            <h3>O que estão dizendo</h3>
          </div>
          <div className="dsc-container960">
            <Coments />
            <Coments />
            <Coments />
            <Coments />
            <Coments />
            <Coments />
          </div>
        </section>
        <footer>
          <div>
            <Footer />
          </div>
        </footer>
      </main>
    </>
  );
}
