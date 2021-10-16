import {useState, useEffect, useRef} from 'react';

// const isIntersect = (element: HTMLElement|null, rootMargin: string) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [isVisible, setVisible] = useState<boolean>(false);
//
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setVisible(entry.isIntersecting);
//             },
//             {rootMargin}
//         );
//
//         // @ts-ignore
//         element && observer.observe(element);
//         if(element){
//             return () => observer.unobserve(element);
//         }
//     }, []);
//     return isVisible;
// }
const isIntersect = (rootMargin: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isVisible, setVisible] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<HTMLElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {rootMargin}
        );

        // @ts-ignore
        ref.current && observer.observe(ref.current);
        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    }, [ref, isVisible]);
    return [ref, isVisible];
}


export default isIntersect;
