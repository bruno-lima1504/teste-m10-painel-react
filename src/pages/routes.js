import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { PainelLogin } from "../components/login";
import { Navigation } from "../components/navigation";
import { NotFound } from "../components/notfound/notfound";


const AppRoutes = () => {
    return (
        <Div>
        <BrowserRouter>
            <Routes>

                <Route exact path='/' element={<PainelLogin />} />
                <Route exact path='/navigation' element={<Navigation />} />
                <Route exact path='/notfound' element={<NotFound />} />
                
            </Routes>
        </BrowserRouter>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
`

export { AppRoutes }
