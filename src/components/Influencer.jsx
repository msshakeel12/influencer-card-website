import React from 'react';
import styles from '../style';
import Footer from './Footer';
import Stats from './Stats';
import InfluencerHero from './InfluencerHero';

const Influencer = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <InfluencerHero />
                  </div>
                </div>
        {/* Brand Page Content */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <h1 className="font-poppins font-semibold text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
              Brand Page
            </h1>
            <p className={`${styles.paragraph} max-w-[690px] mt-5`}>
              This is where you can add content for your brand page.
            </p>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Stats />
                    {/* <Business /> */}
                    {/* <Billing/> */}
                    {/* <CardDeal /> */}
                    {/* <Testimonials/> */}
                    {/* <Clients/> */}
                    {/* <CTA /> */}
                    <Footer />
                  </div>
                </div>      </div>
    </div>
  );
};

export default Influencer