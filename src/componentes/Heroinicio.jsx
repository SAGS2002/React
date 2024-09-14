import React from 'react'

const heroinicio = () => {
  return (
    <>
  <body className='bg-dark text-white-50'> 
    <div className='container'>
      <h3 className='text-center py-4'>Herramientas utilizadas</h3>
        <div className='row mt-5'>
          <div className='col-md-6 d-flex flex-column align-items-center justify-content-center'>
            <p>
              <span className='fw-bold h4'>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas.</span>
              Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.
            </p>
            <p>
            Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.
            </p>
            <div className='text-center'>
            <a href='https://es.react.dev/' type="button" class="btn btn-outline-success">Web oficial de react</a>
            </div>
          </div>
          <div className='col-md-6'>
            <img src="https://profWilliamArte.github.io/reactEtapa1/assets/heroinicio01-DM6cUGbj.jpg" className='img-fluid img-thumbnail' />
          </div>
        </div>
        <hr className='my-5'/>
        <div className='row '>
          <div className='col-md-6 order-2 d-flex flex-column align-items-center justify-content-center'>
            <p>
              <span className='fw-bold h4'>DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON</span>
              para el desarrollo, pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.
            </p>
            <p>
              <b>DummyJSON</b>
              también ofrece endpoints específicos para diferentes recursos, como productos, publicaciones, usuarios, imágenes, autenticación, entre otros. Estos endpoints te permiten obtener datos específicos para tus necesidades de desarrollo.
            </p>
            <div className='text-center'>
            <a type="button" class="btn btn-outline-info">Web oficial DummyJSON</a>
            </div>
          </div>
          <div className='col-md-6'>
            <img src="https://profWilliamArte.github.io/reactEtapa1/assets/heroinicio02-CxvW9Y7l.jpg" className='img-fluid img-thumbnail' />
          </div>
        </div>
        <hr className='my-5'/>
        <div className='row'>
          <div className='col-md-6 d-flex flex-column align-items-center justify-content-center'>
            <p>
              <span className='fw-bold h4'>Bootstrap es un framework de desarrollo web gratuito y de código abierto que facilita el proceso de creación de sitios web responsivos y orientados a dispositivos móviles.</span>
              Proporciona una colección de sintaxis para diseños de plantillas y estilos para una amplia variedad de componentes y elementos de interfaz. Bootstrap es ampliamente utilizado debido a su facilidad de uso, su estructura de archivos sencilla y su capacidad para adaptarse a diferentes tamaños de pantalla. Permite a los desarrolladores y diseñadores web crear sitios web de manera eficiente y garantiza que los elementos de la interfaz funcionen de manera óptima en todos los dispositivos.
            </p>
            <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' type="button" class="btn btn-outline-warning">Web oficial de Bootstrap</a>
          </div>
          <div className='col-md-6'>
            <img src="https://profWilliamArte.github.io/reactEtapa1/assets/heroinicio03-B90QZVkr.jpg" className='img-fluid img-thumbnail' />
          </div>
        </div>
    </div>   
  </body>  
    </>
  )
}

export default heroinicio