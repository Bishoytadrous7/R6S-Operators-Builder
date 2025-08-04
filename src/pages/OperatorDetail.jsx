import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const OperatorDetail = () => {
  const { id } = useParams();
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const fetchOperator = async () => {
      const { data } = await supabase
        .from('r6s')
        .select()
        .eq('id', id)
        .single();

      setOperator(data);
    };

    fetchOperator();
  }, [id]);

  if (!operator) return <h2>Loading...</h2>;

  return (
    <div className="OperatorDetail">
      <h2>{operator.name}</h2>
      <p>Role: {operator.role}</p>
      <p>Weapon: {operator.weapon}</p>
      <p>Speed: {operator.speed}</p>
      <Link to={`/edit/${id}`}>
        <button>Edit This Operator</button>
      </Link>
    </div>
  );
};

export default OperatorDetail;
