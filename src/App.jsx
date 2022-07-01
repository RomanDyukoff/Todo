import './App.scss';
import { Header, Main, Layout, Form, Button, Todo } from './components';


const todos = [
  {
    title: 'kek',
    id: '123',
    checkt: false,
  },
  {
    title: 'lol',
    id: '345',
    checkt: false,
  },
  {
    title: 'cheburek',
    id: '222',
    checkt: true,
  },
]

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Layout>
          <Form />
          <Button />
          <Todo items={ todos }/>
        </Layout>
      </Main>
    </div>
  );
}

export default App;
