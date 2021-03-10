import React, { useEffect } from 'react';
import CountUp from 'react-countup';

import Layout from '../Templates/Layout';
import { Main, HeroSection, AdvantageCard, FeatureCard, SectionWithCTA, SectionTitle } from '../Components';

import CustomSolution from '../Assets/Images/custom-solution.jpg';
import Handle from '../Assets/Images/handle.jpg';
import Profile from '../Assets/Images/profile.jpg';

import EnergyIcon from '../Assets/Images/Icons/Energy Saving.svg';
import SoundLessIcon from '../Assets/Images/Icons/No Sound.svg';
import SafeIcon from '../Assets/Images/Icons/Safe and Secure.svg';
import ThermalIcon from '../Assets/Images/Icons/Thermal Insulation.svg';
import TimeIcon from '../Assets/Images/Icons/Time Saving.svg';
import WeatherIcon from '../Assets/Images/Icons/Weather Resistant.svg';

function Home(props) {
     useEffect(() => {
          window.scrollTo(0, 0);
          return null;
     }, []);

     const features = [
          { img: Profile, imgAlt: "", heading: "International Brands", description: "We carry window solutions from global industry leaders like Kommerling & Veka, to bring you custom solutions specially designed for local conditions in Pakistan." },

          { img: Handle, imgAlt: "", heading: "Windows & Doors Hardware", description: "Combine the best in window profiles with the best European and Turkish hardware to suit every architectural style from traditional to contemporary." },

          { img: CustomSolution, imgAlt: "", heading: "Customized Solutions", description: "We don't just offer a range of designs and styles but also give you the flexibility to customize the designs as per your need and requirement." },
     ];

     const advantages = [
          { icon: SafeIcon, heading: "Safe & Secure", description: "Unprecedented security. Fitted with multi-point locking hardware, it is extremely difficult to break in through a locked window/door. Difficult to ignite and self-extinguishing in case of a fire. Engineered with the safety of your loved ones and property in mind." },

          { icon: EnergyIcon, heading: "Energy Saver", description: "Save on energy costs, lowering the amount spent on heating or cooling your home. Fitted with either single or double glazing, keep your home comfortable all year round. Your energy expenses will be less, as temperature transfer through uPVC windows and doors is limited." },

          { icon: TimeIcon, heading: "Maintenance-Free", description: "Made to save you time and money. They will never require sanding, painting or varnishing. They will never rot or warp, leaving you with more time to relax and enjoy life." },

          { icon: SoundLessIcon, heading: "A Quiet Home", description: "After a busy work day, a peaceful environment helps you to de-stress. Even if you live close to busy highways, your home will be soothingly quiet with uPVC windows and doors, allowing you to relax." },

          { icon: ThermalIcon, heading: "Thermal Insulation", description: "uPVC windows and doors are a great option because of its thermal insulation. It can be installed in extremely hot or cold environments; it can withstand any form of extreme climate." },

          { icon: WeatherIcon, heading: "Durable", description: "You can leave your windows to take care of themselves. They are manufactured from special, high performance uPVC. uPVC can last long in extraordinary condition, which means your speculation will be one that keeps going. They will likewise not loose their shading or blur at all amid their life expectancy. Tough and durable, keeping their glossy looks for many years." }
     ];


     function Count({ p_text, count }) {

          return (
               <div className="a-counter">
                    <h1>
                         <CountUp end={count} duration={5} suffix="+" />
                    </h1>
                    <p className="p-text">{p_text}</p>
               </div>
          )
     }

     return (
          <Layout>
               <Main>
                    <HeroSection heading="The Residence Collection" subHeading="We are the No. 1 UPVC Windows & Doors solution provider in Pakistan." ctaText="See Our Products & Services" img="hero" />

                    <section className="a-section">
                         <section className="a-section-inner">
                              <section className="features-section">
                                   {
                                        features.map((aFeature, index) => {
                                             return (
                                                  <FeatureCard key={index} img={aFeature.img} imgAlt={aFeature.imgAlt} heading={aFeature.heading} description={aFeature.description} />
                                             )
                                        })
                                   }
                              </section>
                         </section>
                    </section>

                    <section className="a-section">
                         <section className="a-section-inner">
                              <SectionTitle text="Who we are" />

                              <div className="counters">
                                   <Count p_text="Years of Experience" count={13} />
                                   <Count p_text="Projects" count={2000} />
                                   <Count p_text="Associate Architects" count={150} />
                                   <Count p_text="Associate Real Estate Developers" count={15} />
                              </div>

                              <section>
                                   <p className="p-text">TRC is the fabricator of uPVC windows and doors meeting international quality standards, and uses specially designed profiles for local climate that are duly tested and certified. Our past 13+ years presence in industry has empowered us to gain crucial experience and knowledge of the diversity in Pakistani climatic conditions.</p><br />

                                   <p className="p-text">The prime goal of TRC is to innovate and create quality solutions that enhance the new-era architecture, TRC offers a wide range of custom-made uPVC windows and doors. Our trained team ensures an excellent finish and timely execution of projects. TRC believes in long term relationships with its clients and strives to offer quality solutions that satisfies the aesthetic and performance needs.</p>
                              </section>
                         </section>
                    </section>

                    <section className="a-section">
                         <div className="a-section-inner">
                              <SectionTitle text="Why use UPVC Windows?" />

                              <div className="advantages-container">
                                   {
                                        advantages.map((anAdvantage) => {
                                             return (
                                                  <AdvantageCard icon={anAdvantage.icon} heading={anAdvantage.heading} description={anAdvantage.description} />
                                             )
                                        })
                                   }
                              </div>
                         </div>
                    </section>

               </Main>

               <SectionWithCTA h1_text={`Interested in our Services?`} p_text="We lay great emphasis on personal commitment, comprehensive workmanship &#x26; your satisfaction." cta_text="Lets Talk!" cta_link="/Contact" />
          </Layout>
     );
}
export default Home;