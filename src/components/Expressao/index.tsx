import { ExpressaoContainer, ExpressaoParagraph, ExpressaoTitle } from './styles';

export function Expressao() {

    const A: number = 2 * 6 / 3
    const B: number = 3 + 2 * 4
    const C: number = (3 + 4) * 4
    const D: number = 2 * 3 ** 4
    const E: number = 60 / (3 + 4) * 4
    const F: number = 60 / ((3 + 2) * 4)

    return (
        <ExpressaoContainer>
            <ExpressaoTitle>Expressões Aritimeticas</ExpressaoTitle>
            <ExpressaoParagraph>Expressão 1: 2 x 6 / 3 = {A}</ExpressaoParagraph>
            <ExpressaoParagraph>Expressão 2: 3 + 2 X 4 = {B}</ExpressaoParagraph>
            <ExpressaoParagraph>Expressão 3: (3 + 2) x 4 = {C}</ExpressaoParagraph>
            <ExpressaoParagraph>Expressão 4: 2 x 3 ^ 4 = {D}</ExpressaoParagraph>
            <ExpressaoParagraph>Expressão 5: 60 / (3 + 4) x 4 = {E}</ExpressaoParagraph>
            <ExpressaoParagraph>Expressão 6: 60 / ((3 + 4) x 4) = {F}</ExpressaoParagraph>
        </ExpressaoContainer>
    );
}