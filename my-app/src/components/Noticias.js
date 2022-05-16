
function Noticia (){
    const noticia = {
      titulo : "React course 22",
      descripcion : "Object destructuring Demo"
    }
  
    const {titulo, descripcion} = noticia
  
    return (
      <div className = "my-class">
        <h1 className= "my-title">Nueva Noticia : {titulo} </h1>
      </div>
    )
  
  }

export default Noticia