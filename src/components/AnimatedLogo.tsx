import React, { useRef, useEffect } from 'react';

import { useTheme } from 'next-themes';
const AnimatedLogo = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const animationRunning = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    return () => {
      if (animationRunning.current) {
        cancelAnimation();
      }
    };
  }, []);

  const startAnimation = () => {
    // if (!animationRunning.current) {
    if (!svgRef.current) return;
    const paths = svgRef.current?.querySelectorAll('path') ?? [];
    paths.forEach((path: any) => {
      const animateElement = path.querySelector('animate');
      if (animateElement) {
        animateElement.beginElement();
      }
    });

    animationRunning.current = true;
    // }
  };

  const cancelAnimation = () => {
    if (!svgRef.current) return;
    const paths = svgRef.current!.querySelectorAll('path');

    paths.forEach((path) => {
      const animateElement = path.querySelector('animate');

      if (animateElement) {
        animateElement.endElement();
      }
    });

    animationRunning.current = false;
  };

  const handleMouseEnter = () => {
    startAnimation();
  };

  const handleMouseLeave = () => {
    // Do nothing, let the animation continue
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={'z-50'}
    >
      {theme === 'dark' ? (
        <svg
          ref={svgRef}
          id="logodark"
          className="w-[300px] md:w-[600px] lg:w-[500px] h-[259px] md:h-[300px] lg:h-[360px"
          viewBox="140 100 700 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <path
            d="M568.677 453.019H680.594C763.583 453.019 830.868 385.686 830.868 302.639C830.868 219.592 763.583 152.259 680.594 152.259H568.677V227.449H680.594C722.032 227.449 755.731 261.172 755.731 302.639C755.731 344.106 722.032 377.829 680.594 377.829H605.456"
            stroke="url(#paint0_linear_640_222)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,1194.52294921875"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.166666666666667s"
              values="0,0,0,1194.52294921875;  0,597.261474609375,597.261474609375,0;  1194.52294921875,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M325.833 302.639H159.667V453.019H234.804V377.829H282.441"
            stroke="url(#paint1_linear_640_222)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,514.510009765625"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.166666666666667s"
              values="0,0,0,514.510009765625;  0,257.2550048828125,257.2550048828125,0;  514.510009765625,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M605.418 340.234H531.07V152.259H455.933L304.155 415.424H455.97V453.019H531.107V415.424H568.676M455.97 340.234H434.293L455.97 302.639V340.234Z"
            stroke="url(#paint2_linear_640_222)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,1083.6363525390625"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.166666666666667s"
              values="0,0,0,1083.6363525390625;  0,541.8181762695312,541.8181762695312,0;  1083.6363525390625,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M412.579 152.259H159.667V227.449H369.187"
            stroke="url(#paint3_linear_640_222)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,537.6220092773438"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.166666666666667s"
              values="0,0,0,537.6220092773438;  0,268.8110046386719,268.8110046386719,0;  537.6220092773438,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <defs>
            <linearGradient
              id="paint0_linear_640_222"
              x1="699.772"
              y1="152.259"
              x2="699.772"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_640_222"
              x1="242.75"
              y1="302.639"
              x2="242.75"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_640_222"
              x1="454.787"
              y1="152.259"
              x2="454.787"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_640_222"
              x1="286.123"
              y1="152.259"
              x2="286.123"
              y2="227.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          ref={svgRef}
          id="logodark"
          className="w-[300px] md:w-[600px] lg:w-[500px] h-[259px] md:h-[300px] lg:h-[360px"
          viewBox="140 100 700 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <path
            d="M568.677 453.019H680.594C763.583 453.019 830.868 385.686 830.868 302.639C830.868 219.592 763.583 152.259 680.594 152.259H568.677V227.449H680.594C722.032 227.449 755.731 261.172 755.731 302.639C755.731 344.106 722.032 377.829 680.594 377.829H605.456"
            stroke="url(#paint0_linear_638_216)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,1194.52294921875"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.545454545454546s"
              values="0,0,0,1194.52294921875;  0,597.261474609375,597.261474609375,0;  1194.52294921875,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M325.833 302.639H159.667V453.019H234.804V377.829H282.441"
            stroke="url(#paint1_linear_638_216)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,514.510009765625"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.545454545454546s"
              values="0,0,0,514.510009765625;  0,257.2550048828125,257.2550048828125,0;  514.510009765625,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M605.418 340.234H531.07V152.259H455.933L304.155 415.424H455.97V453.019H531.107V415.424H568.676M455.97 340.234H434.293L455.97 302.639V340.234Z"
            stroke="url(#paint2_linear_638_216)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,1083.6363525390625"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.545454545454546s"
              values="0,0,0,1083.6363525390625;  0,541.8181762695312,541.8181762695312,0;  1083.6363525390625,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <path
            d="M412.579 152.259H159.667V227.449H369.187"
            stroke="url(#paint3_linear_638_216)"
            strokeWidth="8"
            strokeMiterlimit="10"
            strokeDasharray="0,0,0,537.6220092773438"
          >
            <animate
              attributeType="XML"
              attributeName="stroke-dasharray"
              repeatCount="1"
              dur="4.545454545454546s"
              values="0,0,0,537.6220092773438;  0,268.8110046386719,268.8110046386719,0;  537.6220092773438,0,0,0"
              keyTimes="0; 0.5; 1"
              fill="freeze"
            ></animate>
          </path>
          <defs>
            <linearGradient
              id="paint0_linear_638_216"
              x1="699.772"
              y1="152.259"
              x2="699.772"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#050A11"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_638_216"
              x1="242.75"
              y1="302.639"
              x2="242.75"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#050A11"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_638_216"
              x1="454.787"
              y1="152.259"
              x2="454.787"
              y2="453.019"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#050A11"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_638_216"
              x1="286.123"
              y1="152.259"
              x2="286.123"
              y2="227.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#050A11"></stop>
              <stop offset="1" stopColor="#2C3A99"></stop>
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default AnimatedLogo;
