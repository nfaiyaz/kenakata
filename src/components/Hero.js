"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';


const Hero = () => {

    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/b_01.jpg",
            title: "Trending Item",
            mainTitle: "MEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/b_2.jpg",
            title: "Trending Accessories",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$30",
        },
        {
            id: 2,
            img: "/b_4.jpg",
            title: "Sale Offer",
            mainTitle: "BIG FAMILY SALE",
            price: "$50",
        }
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => {
                        return (
                            <Slide
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Hero