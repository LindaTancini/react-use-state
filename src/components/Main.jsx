// IMPORT ARRAY E USESTATE
import { useState } from "react";
import languages from "../data/languages";
console.log(languages);

// CREO FUNZIONE DEL COMPONENTE MAIN
function Main() {
  //CREO VARIABILE REATTIVA
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  return (
    <main>
      <div className="container py-5">
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary mb-4">HTML</button>
          <button className="btn btn-primary mb-4">CSS</button>
          <button className="btn btn-primary mb-4">JavaScript</button>
          <div className="card p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam
            officia autem quam, modi expedita consequatur, assumenda veritatis
            quidem non totam error, dolore necessitatibus omnis nostrum id culpa
            sequi perspiciatis.
          </div>
        </div>
      </div>
    </main>
  );
}

// ESPORTO FUNZIONE MAIN
export default Main;
