import React from 'react';
import espera from '../images/espera.png';
import finalizado from '../images/finalizado.png';
import jugada from '../images/jugada.png';
import nojugada from '../images/nojugada.png';
import salas from '../images/salas.png';

const Rules = () => {    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <br/>
          <h2>
            Reglas del juego CDG
          </h2>
          <br/>
          <h3>
            Dinámica de juego
          </h3>
          <p className="text-justify">
          Este es un juego de cartas para cuatro jugadores en el que el objetivo es conseguir más puntos que el resto de jugadores. 
          Cada partida consta de tres rondas y cada ronda tiene ocho turnos. Cuando comienza la primera ronda, se reparten 8 cartas 
          a cada jugador. Durante un turno, cada jugador debe elegir la carta que desea utilizar en ese turno, todos eligen a la vez. 
          El turno acaba cuando todos los jugadores escogen su carta o cuando se acaba el tiempo del turno (1 minuto) y se escoge una 
          carta aleatoria para cada los jugadores que no escogieron ninguna carta. Cuando acaba el turno, la carta elegida por cada 
          jugador pasa a su mesa y se intercambian las manos de los jugadores con el resto de cartas aún no jugadas entre los jugadores 
          de forma circular. Así comienza un nuevo turno en el que los jugadores tienen que volver a elegir que carta jugar con su 
          nueva mano. Cuando se juega la última carta de la ronda, ésta finaliza, se calculan los puntos de la ronda y se reparten de 
          nuevo 8 cartas a cada jugador para comenzar una nueva ronda. Al final de la tercera y última ronda aparece la clasificación. 
          </p>
          <p className="text-justify">
            A continuación podemos observar una captura nada más entrar en la aplicación, donde tenemos un listado de salas a las que 
            nos podemos unir si no están llenas:
          </p>
          <img src={salas} alt="Captura de la pantalla de salas"/>
          <p className="text-justify">
          Cuando entramos a una sala, tenemos que esperar a que se unan el resto de jugadores si no hay 4 ya, a partir de aquí también 
          tenemos la posibilidad de cambiar nuestro nombre en la sala:
          </p>
          <img src={espera} alt="Captura de la pantalla de espera"/>
          <p className="text-justify">
          Y una vez que comience la partida tendremos que seleccionar una carta de todas la de nuestra mano:
          </p>
          <img src={nojugada} alt="Captura de la pantalla cuando aun no has jugado una carta"/>
          <p className="text-justify">
          Procedemos a seleccionar una carta de tipo PAREJA y nos llevaría a la siguiente vista hasta que todos los jugadores decidan su carta:
          </p>
          <img src={jugada} alt="Captura de la pantalla de carta jugada"/>
          <p className="text-justify">
          Tras acabar el último turno de la tercera ronda, obtendremos una clasificación como la siguiente:
          </p>
          <img src={finalizado} alt="Captura de la pantalla de finalizacion"/>
          <br/>
          <br/>
          <h3>
            Cartas
          </h3>
          <h4>
            Pareja
          </h4>
          <p className="text-justify">
            Por cada dos cartas Pareja jugadas en la misma ronda obtienes 5 puntos. <br/>
            Si juegas una sola no otorga ningún punto. 
          </p>
          <h4>
            Trío
          </h4>
          <p className="text-justify">
            Por cada tres cartas Trío jugadas en la misma ronda obtienes 10 puntos. <br/>
            Si juegas una o dos no otorga ningún punto. 
          </p>
          <h4>
            Incremental
          </h4>
          <p className="text-justify">
            Otorga tantos puntos como el turno actual. 
          </p>
          <h4>
            Acumulativo
          </h4>
          <p className="text-justify">
            Cuantas más cartas Acumulativo juegues en la misma ronda, más puntos obtendrás:
          </p><p>
            1 Carta = 1 Punto   <br/>
            2 Cartas = 3 Puntos   <br/>
            3 Cartas = 6 Puntos   <br/>
            4 Cartas = 10 Puntos   <br/>
            5 o más Cartas = 15 Puntos   <br/>
          </p>
          <h4>
            Simple
          </h4>
          <p className="text-justify">
            Hay 3 tipos de carta Simple:
          </p><p>
            Simple1 = 1 Punto   <br/>
            Simple2 = 2 Puntos   <br/>
            Simple3 = 3 Puntos   <br/>
          </p>
          <h4>
            Combo
          </h4>
          <p className="text-justify">
            Cuando usas una carta Combo, la próxima carta Simple que juegues en esa ronda, 
            otorgará el triple de puntos.
          </p>
          <h4>
            Finale
          </h4>
          <p className="text-justify">
            Esta carta solo otorga puntos al final de la partida, y da más puntos en cuantas 
            más rondas distintas hayas jugado al menos una carta Finale:
          </p><p>
            1 Ronda = 0 Puntos   <br/>
            2 Rondas = 7 Puntos   <br/>
            3 Rondas = 15 Puntos   <br/>
          </p>
          <h4>
            Común
          </h4>
          <p className="text-justify">
            Al final de la ronda, el jugador que más cartas Común haya jugado obtendrá 6 puntos, 
            mientras que el jugador con menos cartas Común haya jugado, perderá 4 puntos. En caso 
            de empate se reparten las ganancias y pérdidas, descartando el resto.
          </p>
        </div>
      </div>      
    </div>
  );
};


export default Rules;
