import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
import {useState} from 'react'

function App() {
  const [ir, setIr] = useState({
    card: {},
    form: false
  })

  let grupo = [
    { id: 1, color: 'rojo'},
  ]

  return (
    <>
      {ir.form && <Form card={ir.card}/>}
      {grupo.map((item) => <Card key={item.id} item={item} setIr={setIr}/>)}
    </>
  )
}

export default App