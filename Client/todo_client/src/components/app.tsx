import { h } from "preact";
import { Suspense } from "preact/compat";
import { Route, Router } from "preact-router";
import { useState, useEffect } from "preact/hooks";

import Header from "./header";
import fetchGraphQL from "../fetchGraphQL";

import Home from "../routes/home";
import Profile from "../routes/profile";
import { RelayEnvironmentProvider } from "react-relay";
import Environment from "../Environment";

const App = () => {
  useEffect(() => {
    // let isMounted = true;
    // fetchGraphQL(
    //   `
    //     query MyQuery {
    //         todos {
    //           items{description
    //           name
    //           id
    //           isDone}
    //         }
    //       }
    //     `,
    //   null
    // )
    //   .then((response) => {
    //     if (!isMounted) {
    //       return;
    //     }
    //     const data = response.data;
    //     console.log('Fetched using "fetch":', data);
    //   })
    //   .catch((error) => {
    //     console.error("Error in fetch:", error);
    //   });
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={<p>Query Loading in progress..</p>}>
        <Header />
        <Router>
          <Route path="/" component={Home} />
          <Route path="/profile/" component={Profile} user="me" />
          <Route path="/profile/:user" component={Profile} />
        </Router>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
