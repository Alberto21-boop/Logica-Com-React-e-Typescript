import { useState } from 'react';
import { AgeWithButton, AgeWithButtonContainerText, AgeWithButtonText, AgeWithButtonTextContainer, AgeWithButtonTextResult, AgeWithButtonTextTitle, AgeWithButtonTitleResult, ButtonResult, GetAgeNameWithButton, GetAgeWithButtonInput, InputAgeWithButtonText, ResultAgeAverageWithButtonText } from './styles';

export function IdadeComBotao() {
    const [nome, setNome] = useState<string>('')
    const [segundoNome, setSegundoNome] = useState<string>('')
    const [idade, setIdade] = useState<string>('')
    const [segundaIdade, setSegundaIdade] = useState<string>('')
    const [idadeMedia, setIdadeMedia] = useState<number>(0)
    const [showResult, setShowResult] = useState<boolean>(false)

    // Função para capturar os valores dos inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        if (field === 'nome') setNome(value);
        if (field === 'segundoNome') setSegundoNome(value);
        if (field === 'idade') setIdade(value);
        if (field === 'segundaIdade') setSegundaIdade(value);
    };

    // Função para calcular a média das idades
    const handleCalculateAverage = () => {
        const age1 = parseInt(idade);
        const age2 = parseInt(segundaIdade);
        if (!isNaN(age1) && !isNaN(age2)) {
            setIdadeMedia((age1 + age2) / 2);
            setShowResult(true)
        }
    };

    return (
        <AgeWithButton>
            <AgeWithButtonTextContainer>
                <AgeWithButtonTextTitle>Idade Com Botão</AgeWithButtonTextTitle>

                <AgeWithButtonText>
                    O desafio constiste em colher dois nomes de duas pessoas diferntes.
                </AgeWithButtonText>
                <AgeWithButtonText>
                    Assim como suas idades também, e de fato não devemos nos esquecer das idades.
                </AgeWithButtonText>
                <AgeWithButtonText>
                    Ao final devemos mostrar os nomes digitas e a média das idades.
                </AgeWithButtonText>
            </AgeWithButtonTextContainer>

            <AgeWithButtonContainerText>
                <InputAgeWithButtonText>
                    Entre com o primeiro nome por favor:
                </InputAgeWithButtonText>
                <GetAgeNameWithButton
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => handleChange(e, 'nome')}
                />

                <InputAgeWithButtonText>
                    Entre com o segundo nome por favor:
                </InputAgeWithButtonText>
                <GetAgeNameWithButton
                    type="text"
                    placeholder="Nome"
                    value={segundoNome}
                    onChange={(e) => handleChange(e, 'segundoNome')}
                />

                <InputAgeWithButtonText>
                    Entre com a primeira por favor:
                </InputAgeWithButtonText>
                <GetAgeWithButtonInput
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => handleChange(e, 'idade')}
                />


                <InputAgeWithButtonText>
                    Entre com a segunda idade por favor:
                </InputAgeWithButtonText>
                <GetAgeWithButtonInput
                    type="number"
                    placeholder="Idade"
                    value={segundaIdade}
                    onChange={(e) => handleChange(e, 'segundaIdade')}
                />
            </AgeWithButtonContainerText>

            <AgeWithButtonTitleResult>
                Clique no botão "calcular a média" para ver o resultado.
            </AgeWithButtonTitleResult>

            <ButtonResult onClick={handleCalculateAverage}>Calcular Média</ButtonResult>

            <ResultAgeAverageWithButtonText>
                {showResult && idadeMedia > 0 && nome && segundoNome ? (
                    <AgeWithButtonTextResult>A média da idade de {nome} e {segundoNome} é de {idadeMedia.toFixed(1)}</AgeWithButtonTextResult>
                ) : (
                    <AgeWithButtonText>Insira os nomes e as idades para se obter as médias das idades.</AgeWithButtonText>
                )}
            </ResultAgeAverageWithButtonText>

        </AgeWithButton>
    );
}