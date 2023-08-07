import { Nav } from "./Nav";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(false)
  console.log(routes);
  
  return (
    <div className="App">
      <Nav></Nav>
      {routes}
   </div>
  );
}

export default App;
