import { useTrail, animated } from 'react-spring';
import pic2 from '../../assets/small.png';
import pdf from './Mark Tungul Resume.pdf';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";

const Profile = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1, 
    });
  
    const [animatedInView, setAnimatedInView] = useState(false);
  
    useEffect(() => {
      if (inView) {
        setAnimatedInView(true);
      }
    }, [inView]);
  
    const trail = useTrail(4, {
      opacity: animatedInView ? 1 : 0,
      transform: animatedInView ? 'translateY(0px)' : 'translateY(20px)',
      config: { mass: 2, tension: 400, friction: 20 },
    });

    const iconHover = "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
  
    return (
      <div
        className="flex xs:mt-5 rounded-[5000px] sm:mt-0 sm:flex-row xs:flex-col xs:h-[580px] sm:h-[750px] w-full font-[open sans] font-semibold"
        ref={ref}
      >
        <animated.div className="flex flex-col xs:w-full w-[40%] lg:pl-[150px] justify-center items-center" style={trail[0]}>
          <p className="text-[#b4b4b4] md:text-[45px] sm:text-[32px] xs:text-[2rem] xs:leading-[20px] sm:leading-[40px] xs:mt-10 sm:mt-2">Hello, I am</p>
          <ReactTyped 
            className='text-[#ffffff] font-bold lg:text-[50px] md:text-[80px] sm:text-[40px] xs:text-[2rem]' 
            strings={["Mark Jhosua"]}
            typeSpeed={70} 
            backSpeed={60} 
            loop />
          <p className="text-[#b4b4b4] font-thin xs:text-sm sm:text-md md:text-lg mt-2">A Web Developer who is passionate about</p>
          <p className="text-[#b4b4b4] font-thin xs:text-sm sm:text-md md:text-lg">crafting seamless digital experiences.</p>
          <a href={pdf} download='Mark Tungul Resume.pdf' target="_blank" type="button" className={`bg-black hover:bg-[#202020] text-white border-white font-bold py-2 px-4 rounded-lg mt-5 ${iconHover}`}> My Resume </a>
  
          <div className='flex flex-row mt-5'>
            <animated.a href="https://www.facebook.com/tuungss" target="_blank" rel="noopener noreferrer" style={trail[1]}>
              <FontAwesomeIcon className={`text-xl ${iconHover}`} style={{ paddingRight: '10px', color: 'white' }} icon={faFacebook} />
            </animated.a>
            <animated.a href="https://www.linkedin.com/in/tungul-mark/" target="_blank" rel="noopener noreferrer" style={trail[2]}>
              <FontAwesomeIcon className={`text-xl ${iconHover}`}  style={{ paddingRight: '10px', color: 'white' }} icon={faLinkedin} />
            </animated.a>
            <animated.a href="mailto:mjtungul21@gmail.com" target="_blank" rel="noopener noreferrer" style={trail[3]}>
              <FontAwesomeIcon className={`text-xl ${iconHover}`}  style={{ paddingRight: '10px', color: 'white' }} icon={faEnvelope} />
            </animated.a>
          </div>
        </animated.div>
        <animated.div className="flex w-[60%] xs:mt-12 sm:mt-0 xs:w-full xs:justify-center items-center xl:pr-[300px] md:w-0 lg:w-full " style={trail[0]}>
          <img className='xs:w-[250px] sm:mt-0 sm:w-[300px] md:w-0 rounded-[1000px]' src={pic2} alt="Profile" />
        </animated.div>
      </div>
    );
  };
  
  export default Profile;