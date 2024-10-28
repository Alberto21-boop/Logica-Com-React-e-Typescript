import { useState } from 'react';
import { GetLandWidth, InputLandText, LandContainer, LandText, LandTextContainer, LandTextTitle, LandValuesContainer } from './styles';

export function Terreno() {
    const [larguraDoTerreno, setLarguraDoTerreno] = useState('');
    const [comprimentoDoTerreno, setComprimentoDoTerreno] = useState('');
    const [valorMetroQuadrado, setValorMetroQuadrado] = useState('');

    const handleInputLarguraDoTerreno = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setLarguraDoTerreno(isNaN(parseFloat(inputValue)) ? '' : inputValue);
    };

    const handleComprimentoDoTerreno = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setComprimentoDoTerreno(isNaN(parseFloat(inputValue)) ? '' : inputValue);
    };

    const handlevalorMetroQuadrado = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValorMetroQuadrado(isNaN(parseFloat(inputValue)) ? '' : inputValue);
    };


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
                <InputLandText>
                    Digite a largura do terreno:
                </InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={larguraDoTerreno}
                    onChange={handleInputLarguraDoTerreno}
                />

                <InputLandText>
                    Digite o comprimento do terreno:
                </InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={larguraDoTerreno}
                    onChange={handleComprimentoDoTerreno}
                />

                <InputLandText>
                    Digite o valor em reais do metro quadrado do terreno:
                </InputLandText>
                <GetLandWidth
                    type="number"
                    step="0.01"
                    value={larguraDoTerreno}
                    onChange={handlevalorMetroQuadrado}
                />

            </LandValuesContainer>
        </>
    );
}