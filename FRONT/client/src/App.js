import 'bootstrap/dist/css/bootstrap.min.css';

import Kanban from './Components/Kanban'
import { Container } from 'react-bootstrap';
import AuthProvider from './Contexts/AuthContext'

function App() {
  return (
        <AuthProvider>
          <Container>
            <Kanban />
          </Container>
        </AuthProvider>
  );
}

export default App;