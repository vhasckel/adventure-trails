import { useState, useEffect } from "react";
import data from "../../api.json";

function TrailsAPI() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    setTrails(data.trails);
  }, []);
  return trails;
}

export default TrailsAPI;
