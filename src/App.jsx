import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { saveProduct } from './Redux/Reducers/CartSlice';
import { handlechange, handleRemove } from "./Redux/Reducers/CartSlice";
function App() {
const [activeIndex,setActiveIndex]=useState({});
  const dispatcher = useDispatch();
  const { cartReducer } = useSelector(state => state)
  //console.log(product)
  const productData =
  {
    "products": [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "shipping": 30,
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-photo/kyiv-ukraine-november-24-2017-red-iphone-7-plus-with-empty-screen-white-background_392895-384422.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147842889.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-vector/realistic-notch-smartphone-mockup-template-slim-bezels-buttons-mock-up-mobile-device-technology_1072380-692.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-vector/smart-phone-mockup-green-background-with-blank-screen-vector-cell-phone-template-design-with-front-back-view-set_117553-1910.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid"
        ]
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "shipping": "FREE",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
          "https://img.freepik.com/free-vector/front-view-iphone-16-pro-max-desert-titanium-mockup-with-siri-frame-black-screen-isolated-black_90220-3056.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147842890.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-psd/black-iphone-with-black-background-black-background_382352-29554.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-photo/shot-smartphone_931878-585851.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid"
        ]
      },
      {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "shipping": 45,
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
          "https://img.freepik.com/premium-vector/realistic-smartphone-vector-illustration_92926-134.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/free-photo/black-friday-sale-banner-template-mobile-mockup_460848-6322.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/free-photo/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033648.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid"
        ]
      },
      {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "shipping": "FREE",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
          "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4765.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/free-vector/triple-camera-black-smartphone-concept-mockup_1017-19784.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-vector/smartphone-back-front_66219-1913.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid"
        ]
      },
      {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "shipping": 50,
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
          "https://img.freepik.com/free-photo/new-cell-phone-white-background_58702-4804.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-psd/smartphone-skin-mock-up-isolated_1310-1596.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid",
          "https://img.freepik.com/premium-vector/smartphone-mockup_66219-1974.jpg?ga=GA1.1.688042556.1704957884&semt=ais_hybrid"
        ]
      }
    ]
  }
  useEffect(() => {
    dispatcher(saveProduct(productData.products))

  }, [])
  function handlePrevButton(index,imgLength){
    setActiveIndex((prev)=>{
      const newIndex=prev[index] > 0 ? prev[index] -1 : imgLength -1;
      return{
        ...prev ,[index]:newIndex
      }
    })
  }
  function handleNextButton(index,imgLength){
    setActiveIndex((prev)=>{
      const newItem=prev[index] < imgLength -1 ? prev[index] + 1 :0;
      return {
        ...prev,[index]:newItem
      }
    })
  }

  return (
    <div className='container'>
      {
        cartReducer.product.map((element, index) => {
          const imagesLength=element.images.length;
          const currentActiveIndex=activeIndex[index] || 0;
          return <div className='card m-2' key={`${element.title}-${index}`}
            style={{ width: "30rem", height: "30rem" }}>
            <div className="card-body">
              <div className="d-flex ">
                <div className="flex-shrink-0">
                  <div id={`carousal-${index}`} className="carousel slide"
                    data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {element.images.map((img, imgIndex) => {
                        return <div key={`${element.title}-img-${imgIndex}`}
                          className={`carousel-item ${imgIndex === currentActiveIndex ? "active" : ""}`}>
                          <img src={img} className="img-fluid  "
                            style={{ width: "100px", height: "100px" }}
                            alt={element.title} />
                        </div>

                      })}
                    </div>
                    <button className="carousel-control-prev" type="button"
                    onClick={()=>handlePrevButton(index,imagesLength)}
                      data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next"  
                    onClick={()=>handleNextButton(index,imagesLength)} 
                      type="button"
                      data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                      <span className="carousel-control-next-icon"
                        aria-hidden="true"></span>
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
                      {cartReducer.totals[element.id]?.quantity || 1}
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item"
                        onClick={() => dispatcher(handlechange({ quantity: 1, id: element.id }))}>1</button></li>
                      <li><button className="dropdown-item"
                        onClick={() => dispatcher(handlechange({ quantity: 2, id: element.id }))}>2</button></li>
                      <li><button className="dropdown-item"
                        onClick={() => dispatcher(handlechange({ quantity: 3, id: element.id }))}>3</button></li>
                    </ul>
                  </div>
                  <p>{element.price}</p>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatcher(handleRemove(element.id))}>Remove</button>
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
