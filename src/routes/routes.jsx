import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const CreateRoutes = () => (
    <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
    </Routes>
);

export default CreateRoutes;