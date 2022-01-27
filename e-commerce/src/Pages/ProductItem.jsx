import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import NavBar from "./../Components/NavBar"
import Announcement from "./../Components/Announcement"
import "./../styles/productItem.css"
import { useLocation } from "react-router-dom";
import { publicRequest } from "./../requestMethod"

function ProductItem(props) {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="product-container">
        <div className="image-container">
          <img src={product.image} />
        </div>
        <div className="info-container">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>{product.price} €</span>
          <div className="filter-container">
            <div className="filter">
              <span>Color</span>
              {product.color?.map((c) => <div key={c} className="filter-color" style={{ backgroundColor: c }} onClick={() => setColor(c)}></div>)}
            </div>
            <div className="filter">
              <span>Size</span>
              <select onChange={(e) => setSize(e.target.value)} >
                {product.size?.map((s) => <option key={s} value={s} >{s}</option>)}
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <AddOutlinedIcon onClick={() => handleQuantity("inc")} />
              <span>{quantity}</span>
              <RemoveOutlinedIcon onClick={() => handleQuantity("dec")} />
            </div>
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProductItem;