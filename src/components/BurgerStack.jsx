const BurgerStack = (props) => {
  return (
    <div>
      <h1>Burger Stack</h1>
      <ul>
        {props.stack.map((item, index) => (
          <div className="ingredients" key={index} style={{ backgroundColor: item.color }}>
            <li>{item.name}</li>
            <button onClick={() => props.removeStack(item, index)}>-</button>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default BurgerStack;
