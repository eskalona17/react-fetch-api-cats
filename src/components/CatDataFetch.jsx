import { useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const CAT_ENDPOINT_IMAGE_URL = "https://cataas.com/cat";

function CatDataFetch ({ onDataFetch }){
    useEffect(() => {
        // Fetch cat fact
        fetch(CAT_ENDPOINT_RANDOM_FACT)
          .then((res) => res.json())
          .then((data) => {
            const { fact } = data;
            onDataFetch(() => fact);
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
            onDataFetch(() => null, imageUrl);
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
          });
      }, []);
}

export default CatDataFetch