import { RouterProvider } from "react-router-dom";
import routes from "./router/Routes";


function App() {
  return (
    <div className="overflow-hidden max-w-screen-2xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
