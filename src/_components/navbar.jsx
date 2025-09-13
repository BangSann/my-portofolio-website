import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Profile",
    link: "/profile",
  },
];

const Navbar = () => {
  const currentPath = window.location.pathname;
  // =============================
  // Spring Animations
  // =============================

  const navbarAnimation = useSpring({
    from: {
      height: "1000px",
      //   backgroundColor: "blue",
    },
    to: {
      height: "65px",
      //   backgroundColor: "white",
    },
    delay: 1500,
    config: { duration: 2000, tension: 120, friction: 14 },
  });

  const logoAnimation = useSpring({
    from: {
      transform: "translateX(40vw) translateY(40vh) scale(3)",
    },
    to: {
      transform: "translateX(0vw) translateY(0vh) scale(1)",
    },
    delay: 1500,
    config: { duration: 2000, tension: 120, friction: 14 },
  });

  const navListAnimation = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    delay: 3500,
    config: { duration: 1000 },
  });

  const burgerAnimation = useSpring({
    from: {
      width: "0px",
      opacity: 0,
      padding: "0px 0px",
    },
    to: {
      width: "auto",
      opacity: 1,
      padding: "0 8px",
    },
    delay: 3800,
    config: { duration: 1000 },
  });

  // mod button state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const buttonAnimation = useSpring({
    from: {
      width: "0px",
      opacity: 0,
    },
    to: {
      width: "60px",
      opacity: 1,
    },
    delay: 3500,
    config: { duration: 1000 },
  });

  const { x } = useSpring({
    x: isDarkMode ? 16 : -12, // geser kanan kalau dark, geser kiri kalau light
    config: { tension: 500, friction: 100 },
  });

  // mod button state

  return (
    <animated.section
      className="shadow-md fixed w-full top-0 bg-white z-10"
      style={navbarAnimation}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <animated.button
              style={burgerAnimation}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden truncate hover:bg-white hover:border-white"
            >
              <GiHamburgerMenu size={18} />
            </animated.button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((nav, i) => (
                <animated.li key={i} style={navListAnimation}>
                  <Link className={`font-light`} to={nav.link}>
                    {nav.title}
                  </Link>
                </animated.li>
              ))}
            </ul>
          </div>

          <animated.div style={logoAnimation}>
            <Link to={"/"} className="flex items-center">
              <img src="/logo/sanncode.png" className="w-4" />
              <span className="text-lg font-semibold">annCode</span>
            </Link>
          </animated.div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((nav, i) => (
              <animated.li key={i} style={navListAnimation}>
                <Link
                  className={`${
                    nav.link == currentPath ? "font-medium" : "font-extralight"
                  }`}
                  to={nav.link}
                >
                  {nav.title}
                </Link>
              </animated.li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <animated.button
            className={`relative p-4 rounded-full relative flex items-center bg-slate-200 hover:bg-slate-300 cursor-pointer inset-shadow-md`}
            style={buttonAnimation}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <animated.span
              className={`absolute w-6 h-6 flex items-center justify-center rounded-full shadow-md ${
                isDarkMode ? "bg-slate-500" : "bg-white"
              } transition-colors duration-1000`}
              style={{
                transform: x.to(
                  (val) => `translateX(${val}px) rotate(${val * 4}deg)`
                ),
              }}
            >
              {isDarkMode ? (
                <BiMoon className="text-white" />
              ) : (
                <BiSun className="text-orange-400" />
              )}
            </animated.span>
          </animated.button>
        </div>
      </div>
    </animated.section>
  );
};

export default Navbar;
