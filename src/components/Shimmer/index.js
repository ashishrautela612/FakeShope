import React from "react";
import "./Shimmer.css";

const CardShimmer = () => {
    return (
        <div className='cardShimmer shimmer-card flex flex-col justify-center items-center py-6 gap-3 px-6 cursor-pointer'>
            <div className="shimmer-img stroke animate"></div>
            <div className='card-details flex flex-col gap-6 w-full'>
                <div className="shimmer-title stroke animate"></div>
                <div className='flex justify-between items-center pt-3'>
                    <div className="shimmer-tags stroke animate"></div>
                </div>
                <div className="shimmer-details stroke animate"></div>
            </div>
        </div>
    );
};

export const Shimmer = () => {
    const numberOfCards = 20;
    return (
        <div className="shimmer-container">
            {Array(numberOfCards).fill("").map((_, index) => (
                <CardShimmer key={index} />
            ))}
        </div>
    );
};


export const ProductShimmer = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
                <div className="flex items-center m-3">
                    <div className="shimmer-title stroke animate w-24 h-6"></div>
                </div>
                <div className="flex">
                    <div className="p-3 w-1/2">
                        <div className="text-center p-4">
                            <div className="shimmer-img stroke animate"></div>
                        </div>
                    </div>
                    <div className="border p-4 w-1/2">
                        <div className="mt-4 mb-3">
                            <div className="shimmer-title stroke animate w-32 h-6 mb-3"></div>
                            <div className="shimmer-title stroke animate w-48 h-8 mb-3"></div>
                            <div className="shimmer-title stroke animate w-24 h-6 mb-3"></div>
                            <div className="shimmer-title stroke animate w-32 h-10 mt-2"></div>
                        </div>
                        <div className="shimmer-details stroke animate w-full h-20 mt-4"></div>
                        <div className="flex items-center mt-4">
                            <div className="shimmer-tags stroke animate w-32 h-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


