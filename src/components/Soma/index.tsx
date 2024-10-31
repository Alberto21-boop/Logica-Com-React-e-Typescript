import { useEffect, useState } from 'react';
import { GetSomaData, InputSomaText, ResultSoma, ResultSomaText, SomaContainer, SomaDataContainer, SomaText, SomaTextContainer, SomaTextTitle } from './styles';

export function Soma() {
    const [numeroX, setNumeroX] = useState<number>(0)
    const [numeroY, setNumeroY] = useState<number>(0)
    const [soma, setSoma] = useState<number>(0)

    useEffect(() => {
        const X = numeroX
        const Y = numeroY

        if (!isNaN(X) && !isNaN(Y)) {
            const soma = X + Y

            setSoma(soma)
        }

        setNumeroX(numeroX)
        setNumeroY(numeroY)
    })


    return (
        <SomaContainer>
            <SomaTextTitle>Problema Soma</SomaTextTitle>

            <SomaTextContainer>
                <SomaText>
                    Fazer um programa para ler dois valores inteiros.
                </SomaText>

                <SomaText>
                    Tera o valor X e Y, e depois mostrar o valor na tela.
                </SomaText>

                <SomaText>
                    Assim como exibir os valores de X e Y em tela.
                </SomaText>
            </SomaTextContainer>

            <SomaDataContainer>
                <InputSomaText>
                    Digite o numero X:
                </InputSomaText>
                <GetSomaData
                    type="number"
                    value={numeroX}
                    onChange={(e) => setNumeroX(Number(e.target.value))}
                />

                <InputSomaText>
                    Digite o numero Y:
                </InputSomaText>
                <GetSomaData
                    type="number"
                    value={numeroY}
                    onChange={(e) => setNumeroY(Number(e.target.value))}
                />
            </SomaDataContainer>

            <ResultSoma>
                {numeroY > 0 && numeroX > 0 && soma > 0 ? (
                    <>
                        <ResultSomaText>O numero X digitado é = {numeroX}</ResultSomaText>
                        <ResultSomaText>O numero Y digitado é = {numeroY}</ResultSomaText>
                        <ResultSomaText>O valor da soma é = {soma}</ResultSomaText>
                    </>
                ) : (
                    <ResultSomaText>Digite os numeros para ver o valor da soma!</ResultSomaText>
                )}
            </ResultSoma>
        </SomaContainer>
    );
}