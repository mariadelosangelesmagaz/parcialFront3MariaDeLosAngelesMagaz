import {useState} from 'react'
const Form = ({card}) => {
  const [customer, setCustomer] = useState ({
    datos: '',
    masDatos:''
  })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(customer.datos.length >= 3 && customer.masDatos.length >= 6){
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
    }
}
return (
  <>
      <h4>Formulario</h4>
      {!show && <form onSubmit={handleSubmit}> 
          <label >Indique su nombre : </label>
          <input type="text" onChange={({target}) => setCustomer({...customer, datos: target.value})}/>
          <label >Elija un color de 6 letras o mas: </label>
          <input type="text" onChange={(event) => setCustomer({...customer, masDatos: event.target.value})}/>
          <button>Guardar</button>
      </form>}
      {show && <h4>Se guardaron sus datos: {customer.datos} {customer.masDatos}</h4>}
      {err && <p>“Por favor chequea que la información sea correcta”.</p>}
      <hr />
  </>
)
}

export default Form