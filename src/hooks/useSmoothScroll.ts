// hooks/useSmoothScroll.ts
// import { useCallback } from 'react';

// export const useSmoothScroll = () => {
//   return useCallback((e: React.MouseEvent, sectionId: string) => {
//     e.preventDefault();
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, []);
// };

export const useSmoothScroll = () => {
  return (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
};