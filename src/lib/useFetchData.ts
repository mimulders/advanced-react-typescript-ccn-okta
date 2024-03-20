// src/lib/useFetchData.ts
import { useState, useEffect } from "react";
import axios from "axios";

import { FetchState } from "../util/fetchstate";
import { PostsResponse } from "./model";

export default function useFetchData(url: string) {
  const [state, setState] = useState<FetchState<PostsResponse>>({
    status: "loading",
  });

  useEffect(() => {
    (async () => {
      setState({ status: "loading" });
      try {
        const res = await axios.get<PostsResponse>(url);
        setState({ status: "success", data: res.data });
      } catch (error) {
        setState({ status: "error", error });
      }
    })();
  }, [url]);

  return state;
}
