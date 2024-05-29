import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='banner py-4'>
            <Carousel responsive={responsive} infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}>
                <div className='banner-img cursor-pointer'>
                    <img src="https://fakeshop-neeraj.netlify.app/banners/4.png" alt="banner" />
                </div>
                <div className='banner-img cursor-pointer'>
                    <img src="https://fakeshop-neeraj.netlify.app/banners/1.png" alt="banner" />
                </div>
                <div className='banner-img cursor-pointer'>
                    <img src="https://fakeshop-neeraj.netlify.app/banners/2.png" alt="banner" />
                </div>
                <div className='banner-img cursor-pointer'>
                    <img src="https://fakeshop-neeraj.netlify.app/banners/3.png" alt="banner" />
                </div>
            </Carousel>
        </div>

    )
}

export default Banner