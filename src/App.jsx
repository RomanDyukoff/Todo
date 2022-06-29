import './App.scss';
import { Header, Main, Layout, Form, Button, List, Content } from './components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Layout>
          <Content>
            <Form />
            <Button />
            <List  />
          </Content>
        </Layout>
      </Main>
    </div>
  );
}

export default App;
