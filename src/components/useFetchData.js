import { useEffect, useState } from "react";

export default function useFetchData(URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fonctionnne pas");
      }
    }

    fetchData();
  }, [URL]);

  return { data };
}
