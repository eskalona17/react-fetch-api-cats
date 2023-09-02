import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPINT_RANDOM_FACT = "https://catfact.ninja/fact";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);
  
  return (
    <main>
      <h1>Cats App</h1>
      {fact}
    </main>
  );
}

export default App;
