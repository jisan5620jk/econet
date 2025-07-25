/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        PrimaryColor: ['#41c575'],
        PrimaryColor2: ['#ff8540'],
        SecondaryColor: ['#0c2318'],
        HeadingColor: ['#0c2318'],
        TextColor: ['#4d6459'],
        TextColor2: ['#9daaa4'],
        ReviewText: ['#ffb108'],
        BodyBg: ['#f8f9f5'],
        BodyBgDark: ['#182f24'],
        BodyBgDark2: ['#243b30'],
        BoxBg: ['#fff4dd'],
        BoxBg2: ['#f1ffde'],
        BoxBg3: ['#e7ffd8'],
        BorderColor: ['#ffffff21'],
      },
      screens: {
        xsm: '380px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px ',
        '4xl': '1700px',
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      keyframes: {
        movebtn: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        dance7: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(320px)' },
        },
        dance3: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-35px)' },
        },
        shrink: {
          '0%': { transform: 'translateY(20px) translateX(-50%)' },
          '50%': { transform: 'translateY(-20px) translateX(-50%)' },
          '100%': { transform: 'translateY(0px) translateX(-50%)' },
        },
        dance: {
          '0%, 100%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        dance4: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(570px)' },
        },
        dance5: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(300px)' },
        },
        rotateme: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': {
            transform: 'translateY(10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        dance2: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': {
            transform: 'translate3d(25px, -25px, 0)',
          },
          '100%': { transform: 'translate3d(0, -25px, 25px)' },
        },
        headerSlideDown: {
          '0%': { margin: '-150px 0 0' },
          '100%': { margin: '0' },
        },
        headerSlideUp: {
          '0%': { margin: '0' },
          '100%': { margin: '-150px 0 0' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.2)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(.5)' },
        },
        swing: {
          '0%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotational: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        wobble_vertical: {
          '16.65%': { transform: 'translateY(8px)' },
          '33.3%': { transform: 'translateY(-6px)' },
          '49.95%': { transform: 'translateY(4px)' },
          '66.6%': { transform: 'translateY(-2px)' },
          '83.25%': { transform: 'translateY(1px)' },
          '100%': { transform: 'translateY(0)' },
        },
        rotateX: {
          '0%': { transform: 'rotate3d(0, 0, 0)' },
          '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
          '100%': { transform: 'rotate3d(0, 1, 0, 360deg)' },
        },
        ripple_white: {
          '0%': {
            boxShadow:
              '0 0 0 0 rgba(255,255,255,0.3), 0 0 0 10px rgba(255,255,255,0.3), 0 0 0 20px rgba(255,255,255,0.3)',
          },
          '100%': {
            boxShadow:
              '0 0 0 10px rgba(255,255,255,0.3), 0 0 0 20px rgba(255,255,255,0.3), 0 0 0 30px rgba(255, 255, 255, 0)',
          },
        },
        shine: {
          '100%': { left: '100%', opacity: '0' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(20deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        rotateZoom: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.1) rotate(10deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        write: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '100%': { transform: 'translateX(100px) rotate(-10deg)' },
        },
        zigzagWriteExtreme: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '12.5%': {
            transform: 'translateX(20px) translateY(1px) rotate(-5deg)',
          },
          '25%': {
            transform: 'translateX(40px) translateY(-1px) rotate(5deg)',
          },
          '37.5%': {
            transform: 'translateX(60px) translateY(1px) rotate(-5deg)',
          },
          '50%': {
            transform: 'translateX(80px) translateY(-1px) rotate(5deg)',
          },
          '62.5%': {
            transform: 'translateX(100px) translateY(1px) rotate(-5deg)',
          },
          '75%': {
            transform: 'translateX(120px) translateY(-1px) rotate(5deg)',
          },
          '87.5%': {
            transform: 'translateX(140px) translateY(5px) rotate(-5deg)',
          },
          '100%': { transform: 'translateX(160px) translateY(0) rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        movebtn: 'movebtn 3s linear infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        rotational: 'rotational 10s linear infinite',
        rotate: 'rotate 20s linear infinite',
        zoomInOut: 'zoomInOut 2s alternate infinite',
        dance2: 'dance2 3s alternate infinite',
        dance3: 'dance3 2s alternate infinite',
        dance: 'dance 4s ease-in-out infinite',
        dance4: 'dance4 10s alternate infinite',
        dance5: 'dance5 10s alternate infinite',
        dance7: 'dance7 4s alternate infinite',
        swing: 'swing 1s ease-in-out 1s forwards infinite alternate',
        fadeInUp: 'fadeInUp 0.5s linear',
        rotateX: 'rotateX 5s linear infinite',
        headerSlideDown:
          '500ms ease-in-out 0s normal none 1 running headerSlideDown',
        headerSlideUp:
          '500ms ease-in-out 0s normal none 1 running headerSlideUp',
        wobble_vertical: 'wobble_vertical 1s forwards ease-in-out',
        ripple_white: 'ripple_white 1s linear infinite',
        shine: 'shine 800ms',
        zoomIn: 'zoomIn 800ms forwards',
        zoomOut: 'zoomOut 800ms forwards',
        flip: 'flip 1.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        rotateZoom: 'rotateZoom 3s infinite ease-in-out',
        write: 'write 2s ease-in-out infinite',
        zigzagWriteExtreme: 'zigzagWriteExtreme 1.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        fadeUp: 'fadeUp 1s ease forwards',
      },
      boxShadow: {
        cases: '0px 10px 15px rgba(187, 187, 187, 0.2)',
        shade: '0px 0px 20px rgba(187, 187, 187, 0.2)',
        shades: '0px 0px 35px rgba(212, 216, 215, 0.5)',
        shadow: '0px 30px 50px rgba(152,178,240,0.5)',
        shadows: '0px 0px 40px rgba(152,178,240,0.5)',
      },
      lineHeight: {},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const delays = {
        '.delay-500': { 'animation-delay': '0.5s' },
        '.delay-900': { 'animation-delay': '0.9s' },
        '.delay-1300': { 'animation-delay': '1.3s' },
        '.delay-1700': { 'animation-delay': '1.7s' },
        '.delay-2000': { 'animation-delay': '2s' },
      };
      addUtilities(delays, ['responsive', 'hover']);
    },
  ],
};
