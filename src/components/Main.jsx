// IMPORT ARRAY E USESTATE
import { useState } from "react";
import languages from "../data/languages";

// CREO FUNZIONE DEL COMPONENTE MAIN
function Main() {
  // CREO VARIABILE REATTIVA
  const startingLanguage = null;
  const [selectedLanguage, setSelectedLanguage] = useState(startingLanguage);

  return (
    <main>
      <div className="container py-5">
        <div className="d-flex flex-wrap gap-2">
          {/* CON MAP VADO A ITERARE NELL'ARRAY E PRENDO IL LORO ID E TITLE */}
          {languages.map((language) => (
            <button
              key={language.id}
              // USO METODO TERNARIO CON AND PER CAMBIARE STILE AL BOTTONE IN BASE A QUALE CLICCO
              className={`btn mb-4 ${
                selectedLanguage && selectedLanguage.id === language.id
                  ? "btn-warning"
                  : "btn-primary"
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language.title}
            </button>
          ))}
        </div>

        <div className="card p-4">
          {/* USO METODO TERNARIO PER FAR SI CHE ESCA UN MESSAGGIO SE NON SELEZIONO NULLA */}
          {!selectedLanguage ? (
            <p>Nessun linguaggio selezionato</p>
          ) : (
            <>
              <h4>{selectedLanguage.title}</h4>
              <p>{selectedLanguage.description}</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

// ESPORTO FUNZIONE MAIN
export default Main;
