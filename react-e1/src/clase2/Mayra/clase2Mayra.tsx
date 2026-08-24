import Saludo from "./exercise1"
import TarjetaProducto from "./exercise2"
import TarjetaPerfil2 from "./exercise3"
import './clase2.css'

function Clase2Mayra(){
  return (
      <>
      <div style={{display: 'flex'}}>
        <TarjetaPerfil2
          nombre='Gustavo Adrian Cerati' 
          descripcion='Gustavo Adrián Cerati Clark (11 de agosto de 1959 – 4 de septiembre de 2014) fue un músico y cantautor argentino que alcanzó reconocimiento internacional por ser el líder, vocalista, compositor y guitarrista de la banda de rock Soda Stereo . Es ampliamente considerado por la crítica y la música como uno de los artistas más importantes e influyentes del rock latino.' 
          url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeddmYV8NGMqkxXcPzVCmEK8WI__SVHMRupbygezulnHyM0vGS0vxZEz6H5n4tizB5bE8v41tJxkChoSGjkSCJQy6zEVo3sF5K1zFub8&s=10'
        />
        <TarjetaPerfil2 
          nombre='Charly Garcia' 
          descripcion='Carlos Alberto García Moreno, más conocido por su nombre artístico Charly García, es un músico, cantautor, multinstrumentista, compositor y productor discográfico argentino, considerado una de las figuras más importantes de la música popular argentina, latinoamericana y del rock en español.' 
          url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-tUj5RzegsLD7AANXWFaitqz0eRS0Lzg1pacoau1nwVE5UUn795XaaGD2P36xG2QZ9hrSgW3jD1IBZ3BkPR1mcGDJg8NwvheKifc6_A&s=10'
        />
      </div>
      
      <div>
        <Saludo nombre='Mario'/>
        <Saludo nombre='Claudia'/>
        <Saludo nombre='Gepeto'/>
      </div>

      <div style={{display: 'flex'}}>
        <TarjetaProducto
          nombre='Arvejas'
          precio={3500}
          stock={200}
        />
        <TarjetaProducto
          nombre='Lentejas'
          precio={4500}
          stock={100}
        />
        <TarjetaProducto
          nombre='Encendedor'
          precio={1000}
          stock={30}
        />
      </div>
      </>
  )
}

export default Clase2Mayra