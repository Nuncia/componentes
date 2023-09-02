import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';

function App() {

  return (
    <>
      <h1>Reutilizando componentes</h1>
      <MyCard
        imagen = 'http://placekitten.com/g/200/300'
        title = 'Gatito'
        colorButton = 'info'
        textButton='Adoptar'
      />
      <br />
        <MyCard
    imagen = 'http://placekitten.com/g/200/400'
    title = 'Gato'
    colorButton = 'success'
    textButton='Adoptar'
  />
</>
  )
}

export default App
