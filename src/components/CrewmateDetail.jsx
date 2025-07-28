import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../client';

const CrewmateDetail = () => {
  const { id } = useParams();
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const fetchOperator = async () => {
      const { data, error } = await supabase
        .from('r6s')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching operator:", error.message);
      } else {
        setOperator(data);
      }
    };

    fetchOperator();
  }, [id]);

  if (!operator) {
    return <p>Loading...</p>;
  }

  return (
    <div className="OperatorDetail">
      <h2>{operator.name}</h2>
      <p><strong>Category:</strong> {operator.category}</p>
      <p><strong>Role:</strong> {operator.role}</p>
      <p><strong>Weapon:</strong> {operator.weapon}</p>
      <p><strong>Speed:</strong> {operator.speed}</p>

      
      {/* ✅ Link to edit form */}
      <Link to={`/edit/${id}`}>
        <button className="betButton">Edit this Operator</button>
      </Link>
    </div>
  );
};

export default CrewmateDetail;
