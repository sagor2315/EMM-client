import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide1 from "../../assets/Corporate Event Planning and Execution 1.png";
import slide2 from "../../assets/Conference and Seminar Management 2.png";
import slide3 from "../../assets/Product Launch Coordination 3.png";
import slide4 from "../../assets/Team Building and Training Workshops 4.png";
import slide5 from "../../assets/Board Meeting and AGM services.png";
import slide6 from "../../assets/Trade Show and Expo Support 6.png";
import slide7 from "../../assets/Incentive Travel Planning 7.png";
import slide8 from "../../assets/Employee Recognition and Awards Galas 8.png";
import slide9 from "../../assets/Leadership Retreats and Offsite Meetings 9.png";

const Hero = () => {
  return (
    <Carousel className="max-w-screen-xl mx-auto">
      <div className="relative h-full w-full">
        <img
          src={slide1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Corporate Event Planning and Execution
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Comprehensive event planning and execution service for corporate
              events, ensuring a flawless and memorable experience for your
              attendees.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Conference and Seminar Management
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Professional management of conferences and seminars, handling
              logistics, technology, and participant engagement.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Product Launch Coordination
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Specialized service for a successful product launch, managing
              every aspect of the launch event.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide4}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Team Building and Training Workshops
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Tailored team-building and training workshops to enhance employee
              collaboration and skills.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide5}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Board Meeting and AGM Services
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Efficient management of board meetings and annual general
              meetings, ensuring a productive and professional atmosphere.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide6}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Trade Show and Expo Support
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Comprehensive support for your presence at trade shows and expos,
              including booth design, logistics, and promotion.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide7}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Incentive Travel Planning
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Tailored incentive travel programs to reward and motivate your
              employees or clients.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide8}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Employee Recognition and Awards Galas
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Elegant galas to recognize and celebrate your employees
              achievements, with full awards ceremony management.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={slide9}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-4 text-lg md:text-4xl lg:text-5xl leading-5"
            >
              Leadership Retreats and Offsite Meetings
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="md:text-xl text-sm md:mb-8 mb-2 opacity-80"
            >
              Strategic offsite retreats for your leadership team, fostering
              innovation and planning for the future.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                color="white"
                className="hover:bg-[#2B4F43] hover:text-[#FFF] font-bold hover:border-[#F9B900] bg-[#F9B900]"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
