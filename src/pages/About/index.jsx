/* eslint-disable react/no-unescaped-entities */
import Django from '../../assets/svg/django.svg'
import Javascript from '../../assets/svg/javascript.svg'
import Material from '../../assets/svg/material.svg'
import Mongodb from '../../assets/svg/mongodb.svg'
import Mysql from '../../assets/svg/mysql.svg'
import Reacticon from '../../assets/svg/react.svg'
import Tailwind from '../../assets/svg/tailwind.svg'
import Wordpress from '../../assets/svg/wordpress.svg'
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll'

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.5
      });
    
      const trail = useTrail(12, {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { mass: 2, tension: 400, friction: 20 },
        delay: 10
      });
    
    
    return (
        <Element name='section1'>
            <div ref={ref} className="flex xs:flex-col xs:h-[880px] sm:h-[800px] 2xl:h-[1100px] w-full font-[open sans] font-normal bg-[#232424]">
                    <div className="flex flex-col justify-start mt-[1rem] ml-[3rem]  text-[#fffefe]">
                        <animated.p style={trail[0]} className="text-[30px] font-semibold ml-[4rem]"><span className='text-[#ffffff]'>About </span> Me</animated.p>  
                        <div className="w-[100%] xs:mt-3 xl:mt-0 flex flex-row justify-center">
                        <animated.div style={trail[1]} className='bg-[#5698e4] h-[2px] w-[65px] mt-3 mr-5 2xl:mt-6'></animated.div>  
                            <animated.div style={trail[2]} className="font-thin w-[70%] xs:text-[1rem] xl:text-[1.2rem] 2xl:text-[2rem]"> 
                            <p>With expertise in <span className='text-[#5698e4] font-normal'>Web Development</span>, 
                            I'm a skilled developer focused on delivering top-notch web solutions. My proficiency spans 
                            from crafting intuitive user interfaces using <span className='text-[#5698e4] font-normal'>React </span>
                            to designing powerful server-side functionalities with 
                            <span className='text-[#5698e4] font-normal'> Django</span>. 
                            I'm dedicated to producing <span className='text-[#5698e4] font-normal'>dynamic, responsive, and scalable web applications </span>
                            that push boundaries and surpass expectations. Let's work together to bring your digital visions to fruition.</p>
                            </animated.div>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center mt-[2rem] text-[#fffefe]">
                        <animated.p style={trail[3]} className="xs:text-[30px] xl:text-[40px] font-semibold">My Skills</animated.p>

                        <div className="flex flex-row w-full mt-[3rem] justify-center xs:font-normal xl:font-semibold xs:text-md xl:text-xl">
                            <animated.div style={trail[4]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center xs:text-md xl:text:xl'>
                                <img src={Reacticon} className='w-[50%]'></img>
                                <p>React JS</p>
                            </animated.div>
                            <animated.div style={trail[5]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Javascript} className='w-[50%]'></img>
                                <p>JavaScript</p>
                            </animated.div>
                            <animated.div style={trail[6]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Django} className='w-[50%]'></img>
                                <p>Django</p>
                            </animated.div>
                            <animated.div style={trail[7]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Mysql} className='w-[50%]'></img>
                                <p>MySQL</p>
                            </animated.div>
                        </div>

                        <div className="flex flex-row w-full mt-[5rem] justify-center items-center xs:font-normal xl:font-semibold xs:text-md xl:text-xl">
                            <animated.div style={trail[8]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Tailwind} className='w-[50%]'></img>
                                <p>Tailwind CSS</p>
                            </animated.div>
                            <animated.div style={trail[9]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Material} className='w-[50%]'></img>
                                <p>Material UI</p>
                            </animated.div>
                            <animated.div style={trail[10]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Mongodb} className='w-[50%]'></img>
                                <p>MongoDB</p>
                            </animated.div>
                            <animated.div style={trail[11]} className='xs:w-[40%] md:w-[20%] flex flex-col items-center'>
                                <img src={Wordpress} className='w-[50%]'></img>
                                <p>WordPress</p>
                            </animated.div>
                        </div>    
                    </div>


            </div>
        </Element>
    );
}

export default About;
