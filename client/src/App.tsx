import { Nav } from "./Nav";
import { useRoutes } from "./routes";
import { Me } from "./hooks/Me";
import { useState } from "react";

function App() {
  const [login,setLogin]=useState(false)
  let routes = useRoutes(login)
  const promise = Me()
  
  promise.then(function (val) {
  if (val!= undefined) {
    setLogin(true)    
  }else{
    setLogin(false)
  }
});
  return (
    <div className="App">
      <Nav></Nav>
      {routes}
   </div>
  );
}

export default App;
