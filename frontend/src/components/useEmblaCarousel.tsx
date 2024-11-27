import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="embla h-full border-2 border-blue-300 lg:hidden"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
        <div className="embla__slide">
          <video
            className="border h-full  w-full object-cover object-center"
            src="https://www.notion.com/front-static/pages/product/super-duper/hero/hero-illustration.mp4"
          ></video>
        </div>
        <div className="embla__slide">
          <img
            className="border h-full  w-full object-cover object-center"
            src="https://c7.alamy.com/comp/HER5EH/hand-drawn-management-design-line-management-business-drawing-hand-HER5EH.jpg"
            alt=""
          />
        </div>
        <div className="embla__slide">
          <img
            className="border h-full  w-full object-cover object-center"
            src="https://cdn.prod.website-files.com/668cdb4718c0f5195a92717d/66a83d38dd44e03e114223f5_Understanding-top-tasks.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
