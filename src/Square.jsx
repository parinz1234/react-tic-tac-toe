const Square = ({ value, onClick }) =>  {
  return (
    <button type="button" style={{width: '100px', height: '100px'}} onClick={onClick} >{ value }</button>
  )
}

export default Square;