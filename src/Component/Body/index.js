import { useEffect, useState } from "react"
import { api } from "../../Api/api"
import {BsFillCartPlusFill} from "react-icons/bs"
import "./style.css"

export const Body = () =>{
    const [products, setProducts] = useState([])

    const getProducts = async () => {
       await api.get("")
        .then((res) => setProducts(res.data.products))
    }
    useEffect(() => {
        getProducts()
    },[])


    return(
        <div className="conteiner">
         { products.map((product) => {
            return(
                <div className="product">
                <img className="img_product" src={product.images[1]}/>
                <p className="title_product">{product.title}</p>
                <p className="description_product">{product.description}</p>
                <p className="price_product">R${product.price}</p>

                
                <button><BsFillCartPlusFill className="add_products"/></button>
            </div>
            )
         })} 
        </div>
    )
}