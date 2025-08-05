import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, PostComponent } from "./Components";
import HomeLayout from "./Layouts/HomeLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/post" element={<PostComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
