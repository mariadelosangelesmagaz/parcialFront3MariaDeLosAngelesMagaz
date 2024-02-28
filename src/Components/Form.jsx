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
    if(customer.datos.length > 3 && customer.masDatos.length > 2){
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
    }
}
return (
  <>
      <h4>Bienvenido {card.color}</h4>
      {!show && <form onSubmit={handleSubmit}> 
          <label >Deme sus datos: </label>
          <input type="text" onChange={({target}) => setCustomer({...customer, datos: target.value})}/>
          <label >Deme mas datos: </label>
          <input type="text" onChange={(event) => setCustomer({...customer, masDatos: event.target.value})}/>
          <button>Guardar</button>
      </form>}
      {show && <h4>{customer.datos}, se guardaron sus datos</h4>}
      {err && <p>Coloque la información correctamente.</p>}
      <hr />
  </>
)
}

export default Form

