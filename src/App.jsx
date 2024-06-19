import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats,
  Brand,
  Influencer,
  Testimonials 
} from './components'
import styles from './style'

const App = () => {

  const [userType, setUserType] = useState(null); // State to track user type

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };


  return (
    <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar onLinkClick={handleUserTypeSelection} />
        </div>
      </div>
      <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                  </div>
                </div>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    {/* <Billing/> */}
                    <CardDeal />
                    {/* <Testimonials/> */}
                    {/* <Clients/> */}
                    <CTA />
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/brand" element={<Brand />} />
          <Route path="/influencer" element={<Influencer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App