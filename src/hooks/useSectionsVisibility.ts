import { useState, useRef, useEffect, useCallback } from 'react';

export function useSectionsVisibility(sectionIds: string[]) {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({});

  const setRefs = useCallback((node: HTMLElement | null) => {
    if (node) {
      sectionsRef.current[node.id] = node;
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        let highestVisibleSection: string | null = null;
        let highestVisibleRatio = 0;
        let lowestInvisibleSection: string | null = null;
        let lowestInvisibleTop = Infinity;

        entries.forEach((entry) => {
          const { target, isIntersecting, intersectionRatio, boundingClientRect } = entry;
          
          if (isIntersecting && intersectionRatio > highestVisibleRatio) {
            highestVisibleRatio = intersectionRatio;
            highestVisibleSection = target.id;
          } else if (!isIntersecting && boundingClientRect.top < lowestInvisibleTop) {
            lowestInvisibleTop = boundingClientRect.top;
            lowestInvisibleSection = target.id;
          }
        });

        if (highestVisibleSection) {
          setVisibleSection(highestVisibleSection);
        } else if (lowestInvisibleSection) {
          setVisibleSection(lowestInvisibleSection);
        } else if (entries.length > 0) {
          // If no section is visible or just exited viewport, find the next section
          const currentIndex = sectionIds.indexOf(visibleSection || '');
          const nextSection = sectionIds[currentIndex + 1] || sectionIds[0];
          setVisibleSection(nextSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-1px 0px -1px 0px'
      }
    );

    Object.values(sectionsRef.current).forEach((element) => {
      if (element) observer.current?.observe(element);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds, visibleSection]);

  return [visibleSection, setRefs] as const;
}