// IMPORT ARRAY E USESTATE
import { useState } from "react";
import languages from "../data/languages";
console.log(languages);

// CREO FUNZIONE DEL COMPONENTE MAIN
function Main() {
  //CREO VARIABILE REATTIVA
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  return (
    <main>
      <div className="container py-5">
        <div className="d-flex flex-wrap gap-2">
          {/*CON MAP VADO A ITINERARE NELL'ARRAY E PRENDO IL LORO ID E TITLE*/}
          {languages.map((language) => (
            <button
              key={language.id}
              className="btn btn-primary mb-4"
              onClick={() => setSelectedLanguage(language.id)}
            >
              {language.title}
            </button>
          ))}

          <div className="card p-4">
            {/* USO FIND PER CERCARE UN DETERMINATO ELEMENTO NELL'ARRAY */}
            <h4>
              {
                languages.find((language) => language.id == selectedLanguage)
                  .title
              }
            </h4>
            <p>
              {
                languages.find((language) => language.id == selectedLanguage)
                  .description
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// ESPORTO FUNZIONE MAIN
export default Main;
