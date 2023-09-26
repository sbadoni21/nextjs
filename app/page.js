import BestSellingProducts from '@/components/BestSellingProducts'
import BrowseByCategories from '@/components/BrowseByCategories'
import FlashSale from '@/components/FlashSale'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OurProducts from '@/components/OurProducts'
import Image from 'next/image'

export default function Home() {
  return (
  <>
   
    <Hero />
    <FlashSale />
    <BrowseByCategories/>
    <BestSellingProducts/>
    <OurProducts />
    </>
    
  
   
    
  )
}
