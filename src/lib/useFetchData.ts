// src/lib/useFetchData.ts
import { useState, useEffect } from "react";
import axios from "../axios"; //import the axios instance from the axios.ts file; it contains the base url

import { FetchState } from "../util/fetchstate";

export default function useFetchData<Data>(url: string) {
  const [state, setState] = useState<FetchState<Data>>({
    status: "loading",
  });

  useEffect(() => {
    (async () => {
      setState({ status: "loading" });
      try {
        const res = await axios.get(url); //url will be appended to the base url from the axios.ts file
        setState({ status: "success", data: res.data });
      } catch (error) {
        setState({ status: "error", error });
      }
    })();
  }, [url]);

  return state;
}
