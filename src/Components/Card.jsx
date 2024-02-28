const Card = ({item, setIr}) => {
  const {color} = item
  return( 
    <div>
      <h3>Hola, soy una tarjeta</h3>
      <h4>Color: {color}</h4>
      <button onClick= {() => setIr({card: item, form: true})}>Ir</button>
    </div>
  )   
}

export default Card



