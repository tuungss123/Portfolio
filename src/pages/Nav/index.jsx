import { Link } from 'react-scroll';
import { useTrail, animated } from 'react-spring';

const Nav = () => {
  const trail = useTrail(3, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });


  return (
    <div className="w-full flex flex-row font-[open sans] font-thin text-[#ffffff] text-xl justify-center h-12 pt-3">
      <div className="flex flex-row">
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