import { Link } from "react-router-dom";
import { EmblaCarousel } from "../components/useEmblaCarousel";

export const LandingPage = () => {
  return (
    <section>
      <nav className="flex justify-between p-4 bg-[var(--primary-color)] items-center col-span-12 h-20  ">
        <Link
          to="/"
          className="h-full hover:scale-[1.02] flex items-center space-x-2"
        >
          <img src="TrackDailyLogo.svg" alt="" className="h-full scale-[0.7]" />
          <h2 className="text-xl">Track Daily </h2>
        </Link>

        <div className="flex gap-4">
          <Link className="buttonStyle" to="login">
            Login
          </Link>
          <Link className="buttonStyle" to="signup">
            Sign-Up
          </Link>
        </div>
      </nav>
      <div className=" px-4 sm:px-0 grid lg:grid-cols-2 grid-rows-[40%_60%] sm:grid-rows-[25%_75%] sm:w-[80%] lg:w-[90%]  mx-auto h-[85vh] items-center sm:items-start  lg:grid-rows-[20%_20%_20%_20%_20%]">
        <div className="space-y-2 sm:space-y-4 text-center lg:text-start  max-w-[520px] lg:w-full mx-auto lg:row-[1/3] h-full flex flex-col justify-center lg:col-span-1">
          <h1>Create something beautiful today.</h1>
          <h2>Track Daily helps you get more done.</h2>
        </div>
        <EmblaCarousel />

        <video
          className=" h-full  w-full object-cover object-center row-span-3 hidden  lg:block"
          src="https://www.notion.com/front-static/pages/product/super-duper/hero/hero-illustration.mp4"
        ></video>

        <img
          className=" h-full  w-full object-cover object-center hidden  lg:block row-[3/6]"
          src="https://c7.alamy.com/comp/HER5EH/hand-drawn-management-design-line-management-business-drawing-hand-HER5EH.jpg"
          alt=""
        />

        <img
          className=" h-full  w-full object-cover object-center hidden  lg:block col-[2/3] row-[4/6]"
          src="https://cdn.prod.website-files.com/668cdb4718c0f5195a92717d/66a83d38dd44e03e114223f5_Understanding-top-tasks.png"
          alt=""
        />
      </div>
    </section>
  );
};
