import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
// import { getAllCategories } from '../../Api/Category';
import {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const Home = () => {
 
    const [categories, setCategories] = useState([]);


    const options = {
    method: 'GET',
    url: 'https://ali-express1.p.rapidapi.com/categories',
    headers: {
        'X-RapidAPI-Key': '237425401amsha7ec5fa9e099898p150074jsn4d95a7fcf4b2',
        'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setCategories(response.data)
    }).catch(function (error) {
        console.error(error);
    });

    
    return (
        <div>
        <Navbar />
            <h1 className='text-center text-light'>Welcome to my Page</h1>
            <Carousel>
                <div>
                    <img src="https://th.bing.com/th/id/R.72324a1fbc46b40c18556afc43b89570?rik=gGFxTsomGjoHnA&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2016%2f07%2f29%2f13587007%2fGIRA_BANNER_-_Lorita_Dillon_--_Amazing_Beauty_Products_REV1_APPROVED.jpg&ehk=og%2fQO6I5zXV1K0SpcXOVyQ8iVAWfeJ0nksX3wlLenVs%3d&risl=&pid=ImgRaw&r=0" />
                    <p className="legend">Product 1</p>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/z/cosmetics-beauty-product-bottles-mockup-banner-gold-background-liquid-droplets-splash-skin-hair-body-care-cosmetic-154874327.jpg" />
                    <p className="legend">Product 2</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/e5/e4/48/e5e448d549d767f7e082e7667049b635.jpg" />
                    <p className="legend">Product 3</p>
                </div>
            </Carousel>
            <div className="display-5 text-center">All Product</div>
            <div className="text-center"><Link to={'/products'}> <button className='btn btn-success'>All Products</button> </Link></div>

            <div className="row my-5">
            {categories?.map((category)=> (
              
                <div className="col">
                      {console.log(category.id)}
                <div className="card bg-dark text-white" key={category.id}>
                <Link to="/products">
                    <div className="p-5 text-decoration-none">{category.name}</div>
                </Link>
            </div>
            </div>
            ))}
            </div>
            
        </div>
    );
}

export default Home;


{/* <div className="row">
            {categories.map((category)=> (
              
                <div className="col">
                      {console.log(category.id)}
                <div className="card bg-dark text-white" key={category.id}>
                <Link to="/products">
                    <div className="p-5 text-decoration-none">{category.name}</div>
                </Link>
            </div>
            </div>
            ))}
            </div> */}

            // const init = async () => {
            //     const result = await getAllCategories();
            //     setCategories(result.data);
            //     console.log(result.data);
            // }
        
            // console.log(categories);