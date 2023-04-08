import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserOrders } from "redux/main/main-operations"
import { selectIsLoading, selectUserOrders } from "redux/main/main-selectors"
import Spinner from "./Spinner"

const UserOrders=()=>{
const orders=useSelector(selectUserOrders)
const dispatch=useDispatch()
const isLoading=useSelector(selectIsLoading)
useEffect(()=>{
dispatch(getUserOrders())
},[dispatch])
return(
    <div className="container">
        <h1 className="order-centered">My orders</h1>
        
       {isLoading ? <Spinner/> : orders.length>0 && 
       <ul className="order-list">
        {orders.map(({_id,status,quantity,itemId:{description,name,image,price}})=>{
            return  <li key={_id} className="order">
            <div className="order-info">
              <h3>{name}</h3>
              <p>{description}</p>
              <p className="status">{status}</p>
            </div>
            <div className="order-details">
              <div className="order-image">
                <img  src={`http://localhost:3000/${image}`}  alt={name} />
              </div>
              <div className="order-quantity">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="order-price">
                <span>Price:</span>
                <span>{price}</span>
              </div>
            </div>
          </li>
        })}
        </ul>}
        {orders.length===0 &&
        <p className="basket__empty">You haven`t got any orders</p>}
    </div>
)
}
export default UserOrders