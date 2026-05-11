'use client';

import { useEffect } from 'react';

export function ImageReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.editorial-image').forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    const images = document.querySelectorAll('.editorial-image');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.18 },
    );

    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  return null;
}
