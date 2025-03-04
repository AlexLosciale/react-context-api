import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./pages/homePage";
import ChiSiamo from "./pages/ChiSiamo";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
