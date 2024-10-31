const IngredientList = (props) => {
  return (
    <div>
      <h1>Ingredients List</h1>
      <ul>
        {props.ingredients.map((item, index) => (
          <div className="ingredients" key={index} style={{backgroundColor: item.color}}>
            <li>{item.name}</li>
            <button onClick={() => props.addStack(item)}>+</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
