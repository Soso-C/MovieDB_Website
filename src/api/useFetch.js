import { useEffect } from "react";
import axios from "axios";

export function useFetch(url, state) {
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        state(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);
}
