import { useEffect, useState } from 'react';

const TextAnimation = ({ texts }: {texts: string[]}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [texts]);
  
    return (
        <div className="text-container w-full text-center flex">
           {/* <span> I 'm a {" "}</span> */}
          {texts.map((text, index) => (
            <h1
              key={index}
              className={`text-item text-center ${index === currentTextIndex ? 'visible' : ''}`}
            >
              {text}
            </h1>
          ))}
      </div>
    );
  };

export default TextAnimation;