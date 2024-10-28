import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles';
import { Expressao } from '../../components/Expressao';
import { Sidebar } from '../../components/Sidebar';

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Sidebar />
            <Outlet />
        </LayoutContainer>
    );
}