import { Header } from "@components/Header";
import { Container, Content,Icon } from "./styles";
import { Highligth } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup () {
    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Highligth
                    title="Nova turma"
                    subtitle="Crie uma turma para adicionar pessoas"
                />

                <Button title="Criar"/>

            </Content>
        </Container>
    )
}