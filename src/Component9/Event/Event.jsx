import { FaLocationDot } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import eventThumb from "/images/charity-event-img.png";
import EventCard from "./EventCard";
import { BsArrowRight } from "react-icons/bs";
import subtitleIcon from "/images/sub-title-icon.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const eventData = [
  {
    eventDate: 16,
    eventMonth: "August",
    eventYear: 2025,
    eventTitle: "Food Supply for Orphan People - 2025",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "10/B Rd, Sandigo - USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(10.30 am to 12.00 pm)",
    eventThumb: eventThumb,
    eventUrl: "/event",
    eventBtnText: "Join Event",
    eventBtnIcon: <BsArrowRight />,
  },
  {
    eventDate: 17,
    eventMonth: "August",
    eventYear: 2025,
    eventTitle: "Education for Victim Kids And Employment",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "10/B Rd, Sandigo - USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(10.30 am to 12.00 pm)",
    eventThumb: eventThumb,
    eventUrl: "/event",
    eventBtnText: "Join Event",
    eventBtnIcon: <BsArrowRight />,
  },
  {
    eventDate: 18,
    eventMonth: "August",
    eventYear: 2025,
    eventTitle: "Medical Campaign For Flood Affected People",
    eventPlaceIcon: <FaLocationDot />,
    eventPlace: "10/B Rd, Sandigo - USA",
    eventTimeIcon: <LuClock3 />,
    eventTime: "(10.30 am to 12.00 pm)",
    eventThumb: eventThumb,
    eventUrl: "/event",
    eventBtnText: "Join Event",
    eventBtnIcon: <BsArrowRight />,
  },
];

const Event = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="Container">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
              <img src={subtitleIcon} alt="Icon" draggable={false} /> About Us
            </h5>
            <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-HeadingColor-0 mt-3.5">
              Creating a Brighter Future
              <br />
              Help the Humanity
            </h1>
          </div>
          <div>
            <PrimaryButton as="link" href="/about">
              More About Us <GoArrowRight size={22} />
            </PrimaryButton>
          </div>
        </div>
        <div className="box-row space-y-6 mt-[58px]">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="box relative"
              style={{ zIndex: index + 40 }} // every next box has higher z-index
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
