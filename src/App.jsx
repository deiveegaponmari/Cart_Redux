import './App.css'
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { saveProduct } from './Redux/Reducers/CartSlice';
import {handlechange,handleRemove} from "./Redux/Reducers/CartSlice";
function App() {

const dispatcher=useDispatch();
const{cartReducer}=useSelector(state=>state)
//console.log(product)
useEffect(()=>{
 fetch("http://localhost:5173/products.json")
  .then((response) => response.json())
  .then((result) =>dispatcher(saveProduct(result.products)))
  .catch((error) => {
    console.log('ERROR is occured at the', error)}) 
},[])

  return (
  <div className='container'>
        {
         cartReducer.product.map((element,index)=>{
            return <div className='card m-2' key={`${element.title}-${index}`} style={{ width: "30rem", height: "30rem" }}>
            <div className="card-body">
              <div className="d-flex ">
              <div className="flex-shrink-0">
              <div id={'carousal-${index}'} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
               {element.images.map((img,imgIndex)=>{
                    return  <div key={`${element.title}-img-${imgIndex}`}
                    className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}>
                    <img src={img} className="img-fluid  "
                     style={{ width: "100px", height: "100px" }} alt={element.title} />
                     </div>
                    
                  })}
                   </div>
                   <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                     </div>
                     </div>
                
                <div className="flex-grow-1 mx-3">
                  <h5>{element.title}</h5>
                  <p className="text-muted mb-2">{element.description}</p>

                </div>
                <div className="text-end">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" 
                    data-bs-toggle="dropdown" aria-expanded="false" >
                      {cartReducer.totals[element.id] ?.quantity || 1}
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item"
                       onClick={()=>dispatcher(handlechange({quantity:1,id:element.id}))}>1</button></li>
                      <li><button className="dropdown-item" 
                       onClick={()=>dispatcher(handlechange({quantity:2,id:element.id}))}>2</button></li>
                      <li><button className="dropdown-item" 
                       onClick={()=>dispatcher(handlechange({quantity:3,id:element.id}))}>3</button></li>
                    </ul>
                  </div>
                  <p>{element.price}</p>
                  <button className="btn btn-danger btn-sm" onClick={()=>dispatcher(handleRemove(element.id))}>Remove</button>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-1">SUBTOTAL:</p>
                  <p className="mb-1">SHIPPING:</p>
                  <hr />
                  <p className="fw-bold fs-5">TOTAL:</p>
                </div>
                <div className="text-end">
                  <p className="mb-1 fw-bold">{cartReducer.totals[element.id]?.subTotal || 0}
                  </p>
                  <p className="mb-1 text-success fw-bold">{element.shipping}</p>
                  <hr></hr>
                  <p className="fw-bold fs-5">{cartReducer.totals[element.id]?.Total || 0}</p>
                </div>
              </div>
            </div>
             <div>
          </div>
        </div>
          })
        }
    </div>
    
  )
}

export default App
