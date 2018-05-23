import React from 'react';

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
            Cada partida se juega en tres rondas. Para empezar una ronda, cada jugador elige 
            una carta cualquiera de su mano. Cuando todos los jugadores han escogido su carta,
            se revela que carta ha jugado cada uno y se pasan las que quedan en la mano.
            Así, comienza el turno siguiente con una mano nueva y una carta menos. Cuando todos 
            juegan la última carta de su mano, comienza una nueva ronda y se vuelven a repartir 
            8 cartas a cada jugador. Al final de la última ronda aparece la clasificación.
          </p>
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
