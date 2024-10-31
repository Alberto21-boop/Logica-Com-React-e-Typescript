import { SidebarButton, SidebarContainer, SideBarText } from './styles';


export function Sidebar() {
    return (
        <SidebarContainer>
            <SideBarText>Exercícios</SideBarText>
            <SidebarButton to="/">Problema Expressões</SidebarButton>
            <SidebarButton to="/exercicio2">Problema Terreno</SidebarButton>
            <SidebarButton to="/exercicio3">Problema Retângulo</SidebarButton>
            <SidebarButton to="/exercicio4">Problema idades</SidebarButton>
            <SidebarButton to="/exercicio4botao">Idades Botão</SidebarButton>
            <SidebarButton to="/exercicio5">Problema Soma</SidebarButton>
        </SidebarContainer>
    );
}