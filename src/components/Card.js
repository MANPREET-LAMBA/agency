import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Card({ url, linkx }) {

    const boxRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const mm = gsap.matchMedia();

        // Run animation ONLY on desktop
        mm.add("(min-width: 768px)", () => {

            gsap.utils.toArray(".cardx").forEach((card) => {
                gsap.to(card, {
                    scale: 0.6,
                    opacity: 0.5,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 20%",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

        });

        return () => mm.revert(); // cleanup

    }, []);

    return (
        <div ref={boxRef} className="cardx w-[70vw] lg:h-[60vh] rounded-2xl lg:sticky top-30p">
            <a href={linkx}>
                <img className="rounded-2xl" src={url} />
            </a>
        </div>
    );
}