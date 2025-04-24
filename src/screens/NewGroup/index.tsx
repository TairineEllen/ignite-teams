import { Header } from "@components/Header";
import { Container, Content,Icon } from "./styles";
import { Highligth } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup () {
    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate("players", { group: "Bichos"})
    }

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
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}