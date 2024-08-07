import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const BrandRewards = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Mastering the Art of<br className='sm:block hidden'/> Influencer Marketing</h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
        Influence is for everyone! Creator? A regular ? You just need 1000 followers, 
        and The Influencer Card will help  MONETIZE YOUR IMPACT.
        Shop top brands with The Influencer Card → Share on Instagram → 
        Earn up to 100% cashback on your purchase!

        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default BrandRewards
