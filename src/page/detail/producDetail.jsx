import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
import Header from "../../component/header";
import Footer from "../../component/footer";
import api from "../../config/axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const fetchFlowerDetails = async () => {
    try {
      const response = await api.get(`Flowers/${id}`);
      setFlower(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFlowerDetails();
  }, [id]);

  if (!flower) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="text-gray-700 body-font overflow-hidden bg-white product-detail">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-3/6 w-full object-cover object-center rounded border border-gray-200" src={flower.imageUrl} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-3 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Tên sản phẩm</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-3">{flower.flowerName}</h1>
              <span className="title-font font-medium text-xl text-gray-900">{flower.price}</span>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">Lưu ý : Sản phẩm thực tế có thể sẽ khác đôi chút so với sản phẩm mẫu do đặc tính cắm, gói hoa thủ công. Các loại hoa không có sẵn, hoặc hết mùa sẽ được thay thế bằng các loại hoa khác, nhưng vẫn đảm bảo về định lượng hoa, tone màu, kiểu dáng và độ thẩm mỹ như sản phẩm mẫu.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <div className="relative">
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className="px-4 text-lg border-2 py-2 text-gray-800 font-bold rounded hover:bg-gray-300 transition duration-300 ease-in-out disabled:cursor-not-allowed" 
                onClick={() => setQuantity(quantity - 1)} 
                disabled={quantity <= 1}>
                  -
                </button>
                  <span className="mt-1 mx-4 text-4xl font-semibold">{quantity}</span>
                <button className="px-4 text-lg border-2 py-2  text-gray-800 font-bold rounded hover:bg-gray-300 transition duration-300 ease-in-out" onClick={() => setQuantity(quantity + 1)}>+</button>
                <button className="flex ml-2 text-lg border-2 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded">Thêm vào giỏ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;