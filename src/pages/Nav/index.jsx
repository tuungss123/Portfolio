import { Link } from 'react-scroll';
import { useTrail, animated } from 'react-spring';

const Nav = () => {
  const trail = useTrail(3, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { mass: 1, tension: 120, friction: 14 }, // Adjust tension and friction for slower animation
  });


  return (
    <div className="w-full flex flex-row font-[open sans] font-thin text-[#ffffff] text-lg justify-center h-12 pt-3">
      <div className="flex flex-row">
        <animated.a style={trail[0]} className="m-2">
          <Link to="section1" smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
        </animated.a>
        <animated.a style={trail[1]} className="m-2">
          <Link to="section2" smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
        </animated.a>
        <animated.a style={trail[2]} className="m-2">
          <Link to="section3" smooth={true} duration={500} className='cursor-pointer'>Hire Me</Link>
        </animated.a>
      </div>
    </div>
  );
};

export default Nav;