import { useState } from "react";
import CatDataFetch from "./CatDataFetch";

function Cat() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState();

  // Callback function to handle fetched data
  const handleDataFetched = (factData, imageData, fetchError) => {
    if (fetchError) {
      setError(fetchError);
    } else {
      if (factData) {
        setFact(factData);
      }
      if (imageData) {
        setImage(imageData);
      }
    }
  };

  return (
    <main>
      <h1>Cats App</h1>
      {error && <p>Error fetching data: {error.message}</p>}
      <CatDataFetch onDataFetch={handleDataFetched} />
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt="Cat"/>}
    </main>
  );
}

export default Cat;
