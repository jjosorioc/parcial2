import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const CreateRoutes = () => (
    <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
    </Routes>
);

export default CreateRoutes;