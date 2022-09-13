import React from 'react'
// import { faker } from '@faker-js/faker'
import './carousel.css'

const Carousel = ({images}) => {
  // const imageCarousel = [...Array(10)].map(()=>({
  //   image: faker.image.fashion(1234, 2345, true)
  // }))
  let box = document.querySelector('.image-container');

  // setInterval(() => {
  //     nextBtn()
  //   }, 2000);

  const prevBtn = ()=>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  const nextBtn = ()=>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }

  return (
    <div className='image_carousel my-5'>
        <button className='prev-btn' onClick={prevBtn}><p>&lt;</p></button>
        <button className='next-btn' onClick={nextBtn}><p>&gt;</p></button>
        <div className="image-container">
        {images.map((img)=>{
          return <img src={img} alt="" key={img}/>
        })}
        </div>
    </div>
  )
}

export default Carousel