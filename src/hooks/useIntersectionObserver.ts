import React, { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      }, options);
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options, hasAnimated]);
  
    return [ref, isVisible]as const
  };
  