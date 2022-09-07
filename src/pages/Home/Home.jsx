import React, { useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'
import img1 from '../../Assets/Images/img1.jpg'
import img2 from '../../Assets/Images/img2.jpg'
import img3 from '../../Assets/Images/img3.jpg'
import img4 from '../../Assets/Images/img4.jpg'
import img5 from '../../Assets/Images/img5.jpg'
import img6 from '../../Assets/Images/img6.jpg'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import './home.css'


const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
        <Navbar search={search} setSearch={setSearch}/>
        <Carousel images={[img1, img2, img3, img4, img5, img6]} />
        <LatestProducts search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Home