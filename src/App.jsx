import './App.css'
import HighText from './components/highlightText/highlighttext'
import ShowLabel from './components/alertButton/alertbutton'

function App() {
  return (
    <>
      <HighText title='Texto destacado' color='red'></HighText>
      <ShowLabel label='Botão para baixar arquivo'/>
    </>
  )
}

export default App
