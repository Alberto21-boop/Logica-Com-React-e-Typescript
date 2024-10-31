import { Routes, Route } from 'react-router-dom';
import { Expressao } from './components/Expressao';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Terreno } from './components/Terreno';
import { Retangulo } from './components/Retangulo';


export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Expressao />} />
                <Route path="/exercicio2" element={<Terreno />} />
                <Route path='/exercicio3' element={<Retangulo />} />
            </Route>
        </Routes>
    );
}
