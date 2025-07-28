import { useState } from 'react';
import './CreateOperators.css';
import { supabase } from '../client';

const CreateOperators = () => {
 const [operator, setOperator] = useState({
  name: "",
  category: "",
  role: "",
  weapon: "",
  speed: 1
});
const optionsByCategory = {
  Attacker: {
    roles: ["Entry", "Breacher"],
    weapons: ["Rifle", "SMG"],
    speed: [1,2, 3]
  },
  Defender: {
    roles: ["Anchor", "Roamer", "Support"
    ],
    weapons: ["SMG", "Shotgun"],
    speed: [1, 2,3]
  },
};
  const handleChange = (event) => {
    const { name, value } = event.target;
    setOperator((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const createOperator = async (event) => {
    event.preventDefault();

    await supabase
      .from('r6s')
      .insert({
        name: operator.name,
        category: operator.category,
        role: operator.role,
        weapon: operator.weapon,
        speed: operator.speed
      })
      .select();

    window.location = '/';
  };
   const deleteOperator = async (event) => {
    event.preventDefault();

    await supabase
      .from('r6s')
      .delete()
      .eq('id', id);

    window.location = '/';
  };

  return (
  <div>
    <form onSubmit={createOperator}>
      <label>Category</label><br />
      <select
        name="category"
        value={operator.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        {Object.keys(optionsByCategory).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select><br /><br />

      {operator.category && (
        <>
          <label>Role</label><br />
          {optionsByCategory[operator.category].roles.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setOperator({ ...operator, role: r })}
              className={operator.role === r ? 'selected' : ''}
            >
              {r}
            </button>
          ))}<br /><br />

          <label>Weapon</label><br />
          <select
            name="weapon"
            value={operator.weapon}
            onChange={handleChange}
          >
            <option value="">Select Weapon</option>
            {optionsByCategory[operator.category].weapons.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select><br /><br />

          <label>Speed</label><br />
          <select
            name="speed"
            value={operator.speed}
            onChange={handleChange}
          >
            {optionsByCategory[operator.category].speed.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select><br /><br />
        </>
      )}

      <label>Name</label><br />
      <input
        type="text"
        name="name"
        value={operator.name}
        onChange={handleChange}
      /><br /><br />

      <input type="submit" value="Submit" />
    </form>
  </div>
);
}

export default CreateOperators;
