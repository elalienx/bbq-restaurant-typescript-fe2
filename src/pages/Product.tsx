// NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import { useItems } from "state/ItemsContext";
import eStatus from "interfaces/eStatus";
import iProduct from "interfaces/iProduct";
import { readDocument } from "scripts/fireStore";

export default function Product() {
  // Global state
  const { catId, productId } = useParams();

  // Local state
  const initialProduct: iProduct = {
    id: "",
    title: "",
    imageURL: "",
    text: "",
    price: 0,
  };
  const [product, setProduct] = useState(initialProduct);
  const [status, setStatus] = useState(eStatus.Loading);

  // Properties
  const path = `menu/${catId}/content/`;

  // Methods
  useEffect(() => {
    async function loadData(path: string) {
      const data = await readDocument(path, productId).catch(onFail);
      console.log(data);

      if (data) onSuccess(data as iProduct);
    }
    loadData(path);
  }, []);

  function onSuccess(data: iProduct) {
    setProduct(data);
    setStatus(eStatus.Loaded);
  }

  function onFail(error: string) {
    console.error(error);
    setStatus(eStatus.Error);
  }

  return (
    <div id="product">
      <h1>Product Page of {product.title}</h1>
      <img src={product.imageURL} alt="Product picture" />
      <p>{product.text}</p>
      <p>
        Price: <b>{product.price}</b>
      </p>
    </div>
  );
}
