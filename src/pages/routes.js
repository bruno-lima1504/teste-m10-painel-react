import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PainelLogin } from "../components/login";
import { Navigation } from "../components/navigation";
import { NotFound } from "../components/notfound/notfound";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path='/' element={<PainelLogin />} />
                <Route exact path='/navigation' element={<Navigation />} />
                <Route exact path='/notfound' element={<NotFound />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
