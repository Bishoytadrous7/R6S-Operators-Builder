import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
import './ReadOperators.css'

const ReadOperators = () => {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    const fetchOperators = async () => {
      const { data, error } = await supabase
        .from('r6s') 
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching operators:", error.message);
      } else {
        setOperators(data);
      }
    };

    fetchOperators();
  }, []);
let total = operators.length;
let attackers = 0;
let defenders = 0;
let shotgunUsers = 0;
let speedSum = 0;

for (let i = 0; i < operators.length; i++) {
  const op = operators[i];

  if (op.category === 'Attacker') {
    attackers++;
  }

  if (op.category === 'Defender') {
    defenders++;
  }

  if (op.weapon === 'Shotgun') {
    shotgunUsers++;
  }

  speedSum += Number(op.speed);
}

let attackerPercent = 0;
let defenderPercent = 0;
let shotgunPercent = 0;
let avgSpeed = 0;

if (total > 0) {
  attackerPercent = Math.round((attackers / total) * 100);
  defenderPercent = Math.round((defenders / total) * 100);
  shotgunPercent = Math.round((shotgunUsers / total) * 100);
  avgSpeed = (speedSum / total).toFixed(1);
  
}


return (
  <div className="OperatorsPage">
    <h2 className="OperatorsTitle">Your Operators</h2>

    <div className="OperatorSummary">
      <h3>Summary Stats</h3>
      <p>Attackers: {attackerPercent}%</p>
      <p>Defenders: {defenderPercent}%</p>
      <p>Shotgun Users: {shotgunPercent}%</p>
      <p>Average Speed: {avgSpeed}</p>
    </div>

    <div className="ReadOperators">
      {operators.length > 0 ? (
        operators.map((op) => (
          <Card
            key={op.id}
            id={op.id}
            name={op.name}
            role={op.role}
            weapon={op.weapon}
            speed={op.speed}
          />
        ))
      ) : (
        <h3>No Operators Yet 😞</h3>
      )}
    </div>
  </div>
);
}
export default ReadOperators;
