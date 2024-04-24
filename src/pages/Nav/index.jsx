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
        <animated.a style={trail[0]} className="m-2">Skills</animated.a>
        <animated.a style={trail[1]} className="m-2">Projects</animated.a>
        <animated.a style={trail[2]} className="m-2">Hire Me</animated.a>
      </div>
    </div>
  );
};

export default Nav;