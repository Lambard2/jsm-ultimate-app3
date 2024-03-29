import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellat velit numquam! Nobis ex libero totam aliquid earum delectus repudiandae.</p>
        <Button styles="mt-10"></Button>
      </div>
      
      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-full h-full'/>
      </div>
    </section>
  )
}

export default CardDeal