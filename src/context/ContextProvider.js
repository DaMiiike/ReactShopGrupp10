import React from "react";
import AppContext from "./AppContext";

function ContextProvider(props) {
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(" https://codexplained.se/cars.php");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {}
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
