import React from 'react'

const Button = ({ styles }) => {
  const handleClick = () => {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    window.open('https://forms.gle/UfL1HUZUeyJQx7rv7', '_blank', 'noopener,noreferrer');
  }

  return (
    <button 
      type='button' 
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer`}
      onClick={handleClick}
    >
      Get Started
    </button>
  )
}

export default Button