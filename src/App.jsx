import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const CAT_ENDPOINT_IMAGE_URL = "https://cataas.com/cat"; // You need to specify a cat name or ID here


function App() {
  const [fact, setFact] = useState();
  const[image, setImage] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });

      fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.blob(); // Fetch the image as a blob
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });

  }, []);

  return (
    <main>
      <h1>Cats App</h1>
      {fact && <p>{fact}</p>}
      {image && (
        <img src={image} />
      )}
    </main>
  );
}

export default App;
