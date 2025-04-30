import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Container } from './styles';
import { Highligth } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new")
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll();
      setGroups(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert("Turmas", "Não foi possível carregar as turmas.")
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, [])

  )
  // array vazio: executa uma única vez sempre após a renderização do componente
  // dentro pode ter estados, sempre que o estado alterar, o useEffect é executado de novo

  return (
    <Container>
      <Header />
      <Highligth
        title='Turmas'
        subtitle='Jogue com sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)}/>
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />

      
      
    </Container >
  );
}


