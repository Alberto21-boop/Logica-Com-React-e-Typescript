import { Routes, Route } from 'react-router-dom';
import { Expressao } from './components/Expressao';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Terreno } from './components/Terreno';


export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/exercicio1" element={<Expressao />} />
                <Route path="/exercicio2" element={<Terreno />} />
            </Route>
        </Routes>
    );
}
