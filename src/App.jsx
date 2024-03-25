import Roollayout from "./component/Roollayout";
import Banner from "./component/Banner";
import About from "./component/About";
import Home from "./component/Home";
import Prouduct from "./component/Prouduct";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Roollayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Prouduct" element={<Prouduct />}></Route>
      <Route path="/Benner" element={<Banner />}></Route>

      <Route path="/About/:id" element={<About />}></Route>
      <Route path="*" element={<h2>this is error page</h2>}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
