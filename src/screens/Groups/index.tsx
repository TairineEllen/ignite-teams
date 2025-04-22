
import { Header } from '@components/Header';
import { Container } from './styles';
import { Highligth } from '@components/Highlight';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highligth
        title='Turmas'
        subtitle='Jogue com sua turma'
      />
      
    </Container >
  );
}


