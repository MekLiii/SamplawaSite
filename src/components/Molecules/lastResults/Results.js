import React from "react";
import {data} from '../../../data/data'

function Results({opponent, result}) {
    const counter = data.length;
    const matchData = data[counter - 1];
    console.log(matchData)

  return (
    <div>
      <section>
          <p>Ostatnie wyniki</p>
      </section>
      <section>
          <div>
                <p>{matchData.data}</p>
              <p>{matchData.opponent} vs Sampława</p>
              <p>{matchData.wynik}</p>
          </div>
          <div></div>
      </section>
    </div>
  );
}

export default Results;
