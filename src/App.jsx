import './App.css'
import Container from './components/Hello/Container'

function App() {
  const name = "mohammed"
  const style = {backgroundColor : "red"}
  return (
    <>
    <Container>
      
    </Container>
    <Container class = "reverse" style = {style} />
    </>
  )
}

export default App
