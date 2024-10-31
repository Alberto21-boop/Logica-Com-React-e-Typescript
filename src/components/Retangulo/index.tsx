import { useEffect, useState } from 'react';
import { GetRectangledData, InputRectangleText, RectangleContainer, RectangleluesContainer, RectangleText, RectangleTextContainer, RectangleTextTitle, ResultRectangled, ResultRectangledText } from './styles';

export function Retangulo() {
    const [baseRetangulo, setBaseRetangulo] = useState<string>('')
    const [alturaRetangulo, setAlturaRetangulo] = useState<string>('')
    const [area, setArea] = useState<number>(0)
    const [perimetro, setPerimetro] = useState<number>(0)
    const [diagonal, setDiagonal] = useState<number>(0)

    useEffect(() => {
        const base = parseFloat(baseRetangulo);
        const altura = parseFloat(alturaRetangulo);

        if (!isNaN(base) && !isNaN(altura)) {
            const NovaArea = base * altura;
            const NovaPerimetro = base + altura + base + altura;
            const NovaDiagonal = Math.sqrt(base * base + altura * altura);

            setArea(NovaArea);
            setPerimetro(NovaPerimetro);
            setDiagonal(NovaDiagonal)
        }
    }, [baseRetangulo, alturaRetangulo]);


    return (
        <RectangleContainer>
            <RectangleTextTitle>
                Problema Retângulo
            </RectangleTextTitle>
            <RectangleTextContainer>
                <RectangleText>
                    Fazer um programa para ler as medidas da base e altura de um retângulo.
                </RectangleText>
                <RectangleText>
                    Em seguida, mostrar o valor da área, perimetro e diagonal deste retângulo, com quatro casas decimais:
                </RectangleText>
            </RectangleTextContainer>

            <RectangleluesContainer>
                <InputRectangleText>
                    Digete a base do retangulo:
                </InputRectangleText>
                <GetRectangledData
                    type="number"
                    step="0.01"
                    value={baseRetangulo}
                    onChange={(e) => setBaseRetangulo(e.target.value)}
                />

                <InputRectangleText>
                    Digete a altura do retangulo
                </InputRectangleText>
                <GetRectangledData
                    type="number"
                    step="0.01"
                    value={alturaRetangulo}
                    onChange={(e) => setAlturaRetangulo(e.target.value)}
                />
            </RectangleluesContainer>

            <ResultRectangled>

                {area > 0 && perimetro > 0 && diagonal > 0 ? (
                    <>
                        <ResultRectangledText>Área do Retangulo é = {area.toFixed(4)}</ResultRectangledText>
                        <ResultRectangledText>O Perimetro do Retangulo é de = {perimetro.toFixed(4)}</ResultRectangledText>
                        <ResultRectangledText>A Diagonal do Retangulo é de = {diagonal.toFixed(4)}</ResultRectangledText>
                    </>
                ) : (
                    <ResultRectangledText>Insira os valores para calcular a área, perimetro e a diagonal de um retangulo.</ResultRectangledText>
                )}

            </ResultRectangled>

        </RectangleContainer>
    );
}