import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/error/ErrorPage"
import HomePage from "../pages/home/HomePage"
import PokedexPage from "../pages/pokedex/PokedexPage"
import DetailsPage from '../pages/details/DetailsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:id" element={<DetailsPage/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}