import React, { useEffect, useState } from "react";
import { dataProduct } from "./asset/data";
import { IProduct } from "./type/product";
import { useDispatch, useSelector } from "react-redux";
import { addDataProduct } from "./redux/product/productSlide";
import { FullDataProduct } from "./redux/selector";

function App() {
  const dispatch = useDispatch();
  const getDataProduct = useSelector(FullDataProduct);
  const [data, setData] = useState<IProduct[]>();

  const handleAddProduct = () => {
    dispatch(
      addDataProduct({
        name: "name 1",
        description: "description 1",
        type: "type 1",
        price: 50,
        id: "1",
      })
    );
  };

  // useEffect(() => {
  //   setData([...dataProduct]);
  // }, []);

  return (
    <div className="App">
      <button onClick={handleAddProduct}>add</button>
      {getDataProduct.data.map((item: IProduct) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}

export default App;
