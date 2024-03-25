// src/pages/home/HomePage.tsx
import React, { useContext, useEffect, useState } from "react";
import useFetchData from "../../lib/useFetchData";

import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { FetchState } from "../../util/fetchstate";
import { PostsResponse } from "../../lib/model";
// import axios from "axios";
import axios from "../../axios"; // import the axios instance from the axios.ts file; it contains the base url
import { ThemeContext } from "../../lib/theme";

export default function HomePage() {
  // Declare a state variable state and a function setState to update the state.
  // Use the useState hook to initialize the state with an object containing a status property set to "loading".
  // The FetchState type is used to define the shape of the state object.
  // const [state, setState] = useState<FetchState<PostsResponse>>({
  //   status: "loading",
  // });
  // useEffect(() => {
  //   (async () => {
  //     // debugger;
  //     setState({ status: "loading" });
  //     try {
  //       const res = await axios.get(
  //         // "https://coders-network-api.onrender.com/posts?offset=1&limit=2"
  //         "/posts?offset=1&limit=3" //relying on the baseUrl from the axios.ts file
  //       );
  //       // update the state with the fetched data. Set the status property to "success"
  //       // and assign the response data to the data property.
  //       setState({ status: "success", data: res.data });
  //     } catch (error) {
  //       setState({ status: "error", error });
  //     }
  //   })();
  // }, []);

  //replace the above code with a call to custom hook useFetchData
  //make sure the return value has type as defined in Postsresponse
  const state = useFetchData<PostsResponse>("/posts?offset=1&limit=3");

  const { theme } = useContext(ThemeContext);

  return (
    <Container fixed>
      <Typography variant="h3" component="h1">
        Codaisseur Coders Network
      </Typography>
      <p>Welcome!</p>
      {state.status === "loading" && <p>Loading...</p>}
      {state.status === "error" && <p>ERROR!</p>}
      {state.status === "success" && (
        <Grid container spacing={3}>
          {state.data.rows.map((post) => {
            return (
              <Grid key={post.id} item xs={4}>
                <Card>
                  <CardContent
                    style={{ maxHeight: "15rem", overflow: "hidden" }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        color: theme.colors.textColor,
                        backgroundColor: theme.colors.backgroundColor,
                      }}
                    >
                      {post.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
