const Card = ({item, setIr}) => {
  const {color} = item
  return( 
    <div>
      <h3>Hola, por favor llene el formulario.</h3>
      <button onClick= {() => setIr({card: item, form: true})}>Ir</button>
    </div>
  )   
}

export default Card


