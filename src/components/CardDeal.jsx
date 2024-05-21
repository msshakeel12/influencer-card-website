import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Apply for your personal <br className='sm:block hidden'/> Influencer Card</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Join the waitlist now to be among the first to 
        start earning cashback with The Influencer Card.
        
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
