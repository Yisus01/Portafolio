import React from 'react'
import jugador from "../img/jugador.png"
function Acercademi() {
  return (
    <>
        <div className="acercademi">

            <div className='acercademi-izquierda'>

                <div className='acercademi-izquierda-texto'>
                    <h2>Sobre mi</h2>
                    <p>Soy un profesional del desarrollo de software, especializado en el desarrollo web front-end. Desde que comencé mis estudios en programación, descubrí mi interés por crear interfaces web intuitivas y atractivas. Cada día me dedico a aprender y practicar nuevas tecnologías para seguir mejorando mis habilidades. Me considero una persona responsable, dinámica y creativa, con una gran capacidad de adaptación y un constante deseo de trabajar y aprender. Tengo iniciativa para resolver problemas y disfruto enfrentando nuevos desafíos en el campo de la tecnología. En el futuro, planeo expandir mis conocimientos y dominar una variedad aún mayor de herramientas y técnicas en el desarrollo web</p>
                </div>

                <div className='acercademi-izquierda-info'>
                    <ul>
                        <li><span>LinkedIn:</span> aa</li>
                        <li><span>Contacto:</span> bb</li>
                        <li><span>Correo:</span> cc</li>
                    </ul>
                </div>

            </div>

            <div className='acercademi-derecha'>
                <img src={jugador} alt="" /> 
            </div>

        </div>
        {/* <img src={jugador} alt="" /> */}
    </>
  )
}

export default Acercademi
