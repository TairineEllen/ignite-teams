import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highligth } from "@components/Highlight";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highligth
                title="Nome da turma"
                subtitle="Adicione a galera e separe os times"
            />
        </Container>
    )
}