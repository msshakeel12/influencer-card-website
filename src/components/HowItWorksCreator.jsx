import React from 'react';
import styles from '../style';
import { food, mvp, purple, tracking, yellow } from '../assets'; // Import your images

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

const HowItWorksCreator = () => {
  const features = [
    {
      title: "BUY",
      content: "Use The Influencer Card to shop at our partnered brands and enjoy exclusive offers.",
      image: mvp,
    },
    {
      title: "POST",
      content: "Share your purchase on your social media platforms, tagging the brand to showcase your authentic content.",
      image: food,
    },
    {
      title: "EARN",
      content: "Receive cashback rewards on your purchase, up to 100%, just for sharing your genuine experiences with your followers.",
      image: yellow,
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

export default HowItWorksCreator;