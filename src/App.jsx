import  {Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Earn from "./pages/Earn/Earn";
import NFTs from "./pages/NFTs/NTFs";
import Swap from "./pages/Swap/Swap";
import Bridge from "./pages/Bridge/Bridge";

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path = "/"
          element = {<Home />}
        />
        <Route 
          path = "/Earn"
          element = {<Earn />}
        />
        <Route 
          path = "/NFTs"
          element = {<NFTs />}
        />
        <Route 
          path = "/Swap"
          element = {<Swap />}
        />
        <Route 
          path = "/Bridge"
          element = {<Bridge />}
        />
      </Routes>
    </div>
  );
}

export default App;
