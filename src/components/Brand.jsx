import React from 'react';
import styles from '../style';
import Footer from './Footer';
import BrandHero from './BrandHero';
import Business from './Business';
import Billing from './Billing';
import CardDeal from './CardDeal';
import Testimonials from './Testimonials';
import Clients from './Clients';
import HowItWorks from './HowItWorks';
import CTA from './CTA';

const Brand = () => {
    return (
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <BrandHero />
                    </div>
                </div>
                {/* Brand Page Content */}
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    
                </div>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* <BrandRewards /> */}
                        <HowItWorks/>
                        <CTA />
                        <Footer />
                    </div>
                </div>     
                </div>
        </div>
    );
};

export default Brand