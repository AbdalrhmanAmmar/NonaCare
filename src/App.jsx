import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/layout/Layout";

function App() {
let router = createBrowserRouter([
  {
    path: "",
    element: <Layout  />,
    children: [
      {
        index: true,
       
      },
   
      
  
  

    ],
  },
]);
  return (
    <>
              <RouterProvider router={router} />

    </>
  );
}

export default App;
