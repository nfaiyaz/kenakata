import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
    {
        img: "/Jacket.png",
        title: "Jacket",
        desc: "MEN Yarn Fleece Full Zip Jacket",
        rating: 4,
        price: 45.00,
    },

    {
        img: "/skirt.png",
        title: "Skirt",
        desc: "Red Floral Wrap Midi Skirt",
        rating: 5,
        price: 35.00,
    },

    {
        img: "/shirt.png",
        title: "Shirt",
        desc: "Blue Floral Full Sleeve Shirt",
        rating: 3,
        price: 28.00,
    },

    {
        img: "/shoe.png",
        title: "Shoe",
        desc: "Brown Formal Shoe",
        rating: 2,
        price: 37.00,
    },

    {
        img: "/sunglass.png",
        title: "Sunglass",
        desc: "Black Coloured Light Resistant Glass",
        rating: 1,
        price: 20.00,
    },

    {
        img: "/watch.png",
        title: "Watch",
        desc: "Round Silver-colored Chronograph Watch",
        rating: 5,
        price: 32.00,
    },

    {
        img: "/perfume.png",
        title: "Perfume",
        desc: "Women Perfume",
        rating: 4,
        price: 29.00,
    },
]

const NewProducts = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>

                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {
                        productsData.map((item, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    rating={item.rating}
                                    price={item.price}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default NewProducts