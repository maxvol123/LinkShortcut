import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { useRoutes } from "./routes";
import axios from "axios";

function App() {
  const routes = useRoutes(false)
  return (
    <div className="App">
      <Nav></Nav>
      {routes}
   </div>
  );
}

export default App;
