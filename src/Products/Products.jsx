import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import sofa from '../pic/sofa.png';
import lamp from '../pic/lamp.png';
import closet from '../pic/closet.png';
import bed from '../pic/bed.png';
import toilet from '../pic/toilet.png';
import oven from '../pic/oven.png';
import SearchBar from './searchbar';

function Products(){
    return(
        <div className="Products">
            <h3 className='product-header'>Product</h3>
            <div className="searchbar-container">
                <SearchBar/>
                <div className="product-grid">
                    <ProductCard
                        imgsrc={oven}
                        title="Modern oven"
                        detail="Cost: $2.00" />
                    <ProductCard
                        imgsrc={sofa}
                        title="Sofa"
                        detail="Cost: $2.22" />
                    <ProductCard
                        imgsrc={lamp}
                        title="Lamp"
                        detail="Cost: $1.59" />
                    <ProductCard
                        imgsrc={closet}
                        title="Modern Closet"
                        detail="Cost: $30.00" />
                    <ProductCard
                        imgsrc={bed}
                        title="Modern Bed"
                        detail="Cost: $250.00" />
                    <ProductCard
                        imgsrc={toilet}
                        title="Toilet"
                        detail="Cost: $5.67" />
                </div>
            </div> {/* Closing div for searchbar-container */}
        </div>
    );
}

export default Products;
