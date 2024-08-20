import { Link } from 'react-scroll';
import { useTrail, animated } from 'react-spring';
import Mark from '../../assets/svg/Mark.svg'

const Nav = () => {
  const trail = useTrail(3, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });


  return (
    <div className="w-[100%] flex flex-row font-[open sans] justify-between items-center font-thin text-[#ffffff] xs:text-md xs:pl-2 xs:pr-2 sm:text-xl h-20 sm:pl-10 sm:pr-10 pt-3">
      <div className='h-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <a href="https://portfolio-nn2y.onrender.com/">
        <img src={Mark} className='xs:w-[180px] sm:w-[220px]'></img>
        </a>
      </div>
      <div className="flex flex-row w-[80%] justify-end">
        <animated.a style={trail[0]} className="m-2 group relative">
          <Link to="section1" smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
          <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </animated.a>
        <animated.a style={trail[1]} className="m-2 group relative">
          <Link to="section2" smooth={true} duration={500} className='cursor-pointer'>Works</Link>
          <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 absolute left-1/2 transform -translate-x-1/2"></div>
        </animated.a>
        <animated.a style={trail[2]} className="m-2 group relative">
          <Link to="section3" smooth={true} duration={500} className='cursor-pointer'>Hire Me</Link>
          <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500 absolute right-0 origin-right transform"></div>
        </animated.a>
      </div>
    </div>
  );
};

export default Nav;