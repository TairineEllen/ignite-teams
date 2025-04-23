import { Header } from "@components/Header";
import { Container, Content,Icon } from "./styles";
import { Highligth } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                    style={{ marginTop: 20}}
                />
            </Content>
        </Container>
    )
}