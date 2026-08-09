
import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from "../context/ShopContext";
import Title from './Title';
import ProductItem from './ProductItem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const LatestCollection = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const { products } = useContext(ShopContext);
    const container = useRef();

    useEffect(() => {
        setLatestProducts(products.slice(0, 16));
    }, [products]);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.product-card');

        if (cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, { scope: container, dependencies: [latestProducts] });
    return (
        <div ref={container} className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    From perfectly oversized cotton tees and baggy mid-rise denim...
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <div key={index} className="product-card">
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LatestCollection;