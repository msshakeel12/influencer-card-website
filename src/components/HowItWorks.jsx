import React from 'react';
import styles from '../style';
import { post, purple, tracking } from '../assets'; // Import your images

const FeatureItem = ({ title, content, image, imageOnRight }) => (
  <div className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between mb-20`}>
    <div className={`w-full md:w-1/2 ${imageOnRight ? 'md:pr-10' : 'md:pl-10'}`}>
      <h3 className="font-poppins font-semibold text-white text-[28px] mb-4">{title}</h3>
      <p className="font-poppins text-dimWhite text-[18px] leading-[27px]">{content}</p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
      <img src={image} alt={title} className="w-[50%] h-auto" />
    </div>
  </div>
);

const HowItWorks = () => {
  const features = [
    {
      title: "CREATE AN OFFER",
      content: "Share a product or service, set the credit, and select dates and times for Creators to engage.",
      image: post,
    },
    {
      title: "AI-POWERED VERIFICATION",
      content: "Our AI automatically scans and validates Creator posts for quality assurance before credit is released.",
      image: purple,
    },
    {
      title: "TRACK",
      content: "Eliminate the guesswork and see the marketing impact in real-time.",
      image: tracking,
    },
  ];

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className={`${styles.heading2} text-center mb-16`}>HOW IT WORKS</h2>

        {features.map((feature, index) => (
          <FeatureItem
            key={feature.title}
            {...feature}
            imageOnRight={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;