import { useEffect, useState } from 'react';
import { AgeContainer, AgeContainerText, AgeText, AgeTextContainer, AgeTextTitle, GetAgeInput, GetAgeName, InputAgeText, ResultAgeAverageText } from './styles';

export function Idades() {
    const [nome, setNome] = useState<string>('')
    const [segundoNome, setSegundoNome] = useState<string>('')
    const [idade, setIdade] = useState<string>('')
    const [segundaIdade, setSegundaIdade] = useState<string>('')
    const [idadeMedia, setIdadeMedia] = useState<number>(0)

    useEffect(() => {
        const nome1 = nome;
        const nome2 = segundoNome
        const idade1 = parseFloat(idade);
        const idade2 = parseFloat(segundaIdade);

        if (!isNaN(idade1) && !isNaN(idade2)) {
            const soma = idade1 + idade2;
            const media = soma / 2;

            setIdadeMedia(media);
        }
        setNome(nome1);
        setSegundoNome(nome2);
        setIdade(idade)
        setSegundaIdade(segundaIdade)
    }, [nome, segundoNome, idade, segundaIdade, idadeMedia]);



    return (
        <AgeContainer>
            <AgeTextTitle>Problema idades</AgeTextTitle>
            <AgeTextContainer>
                <AgeText>
                    O desafio constiste em colher dois nomes de duas pessoas diferntes.
                </AgeText>
                <AgeText>
                    Assim como suas idades também, e de fato não devemos nos esquecer das idades.
                </AgeText>
                <AgeText>
                    Ao final devemos mostrar os nomes digitas e a média das idades.
                </AgeText>
            </AgeTextContainer>

            <AgeContainerText>
                <InputAgeText>
                    Entre com o primeiro nome por favor:
                </InputAgeText>
                <GetAgeName
                    type="string"
                    step="0.01"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <InputAgeText>
                    Entre com o segundo nome por favor:
                </InputAgeText>
                <GetAgeName
                    type="string"
                    step="0.01"
                    value={segundoNome}
                    onChange={(e) => setSegundoNome(e.target.value)}
                />

                <InputAgeText>
                    Entre com a primeira idade:
                </InputAgeText>
                <GetAgeInput
                    type="number"
                    step="0.01"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />

                <InputAgeText>
                    Entre com a segunda idade:
                </InputAgeText>
                <GetAgeInput
                    type="number"
                    step="0.01"
                    value={segundaIdade}
                    onChange={(e) => setSegundaIdade(e.target.value)}
                />


                <ResultAgeAverageText>
                    {idadeMedia > 0 && nome && segundoNome ? (
                        <>
                            <AgeText>A média da idade de {nome} e {segundoNome} é de  = {idadeMedia.toFixed(1)}</AgeText>

                        </>
                    ) : (
                        <AgeText>Insira os nomes e as idades para se obter as medias das idades.</AgeText>
                    )}
                </ResultAgeAverageText>



            </AgeContainerText>
        </AgeContainer>
    );
}