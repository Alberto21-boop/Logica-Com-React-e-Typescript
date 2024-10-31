import { useEffect, useState } from 'react';
import {
    GetLandWidth,
    InputLandText,
    LandContainer,
    LandText,
    LandTextContainer,
    LandTextTitle,
    LandValuesContainer,
    ResultLand,
    ResultLandText
}
    from './styles';

export function Terreno() {
    // Mantém os estados de entrada como string
    const [larguraDoTerreno, setLarguraDoTerreno] = useState<string>('');
    const [comprimentoDoTerreno, setComprimentoDoTerreno] = useState<string>('');
    const [valorMetroQuadrado, setValorMetroQuadrado] = useState<string>('');
    const [area, setArea] = useState<number>(0);
    const [preco, setPreco] = useState<number>(0);


    // Cálculo automático de área e preço quando os valores confirmados mudam
    useEffect(() => {
        const largura = parseFloat(larguraDoTerreno);
        const comprimento = parseFloat(comprimentoDoTerreno);
        const valorMetro = parseFloat(valorMetroQuadrado);

        if (!isNaN(largura) && !isNaN(comprimento) && !isNaN(valorMetro)) {
            const novaArea = largura * comprimento;
            const novoPreco = novaArea * valorMetro;
            setArea(novaArea);
            setPreco(novoPreco);

        }
    }, [larguraDoTerreno, comprimentoDoTerreno, valorMetroQuadrado]);

    return (
        <>
            <LandContainer>
                <LandTextTitle>Problema Terreno</LandTextTitle>
                <LandTextContainer>
                    <LandText>
                        Neste desafio, desenvolvemos um algoritmo que lê as medidas de largura e
                    </LandText>
                    <LandText>
                        comprimento de um terreno regular com precisão decimal, assim como o valor
                    </LandText>
                    <LandText>
                        do metro quadrado do terreno, exibindo-o com duas casas decimais.
                    </LandText>
                </LandTextContainer>
            </LandContainer>

            <LandValuesContainer>
                <InputLandText>Digite a largura do terreno:</InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={larguraDoTerreno}
                    onChange={(e) => setLarguraDoTerreno(e.target.value)}
                />

                <InputLandText>Digite o comprimento do terreno:</InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={comprimentoDoTerreno}
                    onChange={(e) => setComprimentoDoTerreno(e.target.value)}
                />

                <InputLandText>Digite o valor em reais do metro quadrado do terreno:</InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={valorMetroQuadrado}
                    onChange={(e) => setValorMetroQuadrado(e.target.value)}
                />

            </LandValuesContainer>


            <ResultLand>
                {area > 0 && preco > 0 ? (
                    <>
                        <ResultLandText>Área do terreno = {area.toFixed(2)}</ResultLandText>
                        <ResultLandText>Preço do terreno = {preco.toFixed(2)}</ResultLandText>
                    </>
                ) : (
                    <ResultLandText>Insira os valores para calcular a área e o preço.</ResultLandText>
                )}
            </ResultLand>
        </>
    );
}
