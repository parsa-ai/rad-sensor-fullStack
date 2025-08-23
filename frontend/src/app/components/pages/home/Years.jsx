'use client'
import { useEffect, useState, useRef } from 'react';


function Years() {
      const countUp1 = useCountUp(10 , 1500);
  const countUp2 = useCountUp(15 , 2000);
  const countUp3 = useCountUp(4 , 1000);

  const articleItems = [
    { id: 1, text: 'Years', obj: countUp1 },
    { id: 2, text: 'Business Partners', obj: countUp2 },
    { id: 3, text: 'Solutions', obj: countUp3 },
  ];

    return (
        <section className='bg-[linear-gradient(91.72deg,#B2B2B2_-16.43%,#D9D9D9_107.16%)] p-10 flex md:h-80 justify-center items-center relative ' >
            <main className='w-4/5 flex flex-col md:flex-row gap-14 justify-between items-center'>
                {articleItems.map((items) => {
                    return (
                        <article className='flex flex-col items-center ' ref={items.obj.ref} key={items.id}>
                            <h5 className='text-7xl text-[#2C81AA] font-bold'>+{items.obj.count}</h5>
                            <p className='text-3xl text-[#2C81AA] font-bold w-36 md:w-auto text-center '>{items.text}</p>
                        </article>
                    )
                })}
            </main>
            <div className='w-32 h-24 rounded-4xl border-8 opacity-5 absolute -left-16 bottom-10'></div>
        </section>
    )
}

const useCountUp = (end = 5, duration = 1000) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const startTime = performance.now();
                    const animate = (now) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const current = Math.floor(progress * end);
                        setCount(current);
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // حداقل ۵۰٪ سکشن دیده شود
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return { count, ref };
};

export default Years