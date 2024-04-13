import { useState, useEffect } from "react";

function useTrailsAPI(url) {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrails(data.trails);
      } catch (error) {
        console.error("Error fetching trails:", error);
      }
    };

    fetchTrails();
  }, [url]);

  return trails;
}

export default useTrailsAPI;
