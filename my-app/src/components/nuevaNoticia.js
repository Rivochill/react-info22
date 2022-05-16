
function nuevaNoticia() {
  const noticia = {
    title : "React Course 2022",
    description: "Object destructuring Demo "
  }

  const {title, description} = noticia

  return (
    <div className="my-class">
      <h1 className="my-title">Nueva Noticia: {title} </h1>
    </div>
  )
}

export default nuevaNoticia;