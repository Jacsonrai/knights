import React from "react";
import hero from "../../assets/hero.png";
import Button from "../../components/input/button";

//import statci image from assets
import horse from "../../assets/horse.png";
import star from "../../assets/star.png";
import knight from "../../assets/knight.png";
import mission from "../../assets/mission-logo.png";
import vision from "../../assets/vision-logo.png";
import value from "../../assets/values-logo.png";
import glass from "../../assets/look.png";
import knightImage from "../../assets/knight2.png";
import handleft from "../../assets/handleft.png";
import handRight from "../../assets/handright.png";
import pioneers from "../../assets/pioneers_img.png";
import warRoom from "../../assets/TheWarRoom.png";
import news1 from "../../assets/news-03-img.png";
import { ImageCardLabel } from "../../components/surfaces/card/index";
const HomeLayout = (props) => {
  const { newsData } = props;
  console.log(newsData.image);
  return (
    <div className="min-h-screen bg-pale-black">
      <div className="relative">
        <figure>
          <img
            src={hero}
            alt="home"
            className="object-cover w-screen h-[40rem] sm:h-auto"
          />
        </figure>
        <div
          className="absolute z-[1] bottom-16 sm:grid 
        sm:grid-cols-2 sm:bottom-0 sm:items-center 
        sm:left-10 lg:bottom-4 lg:left-28 xl:bottom-24
         xl:left-48 xl:gap-[30rem]
         2xl:gap-[50rem]
         "
        >
          <div className="pb-4 pl-4 pr-4 xl:w-1/2">
            <h4 className="text-lg font-semibold text-center text-white sm:text-left lg:text-2xl xl:w-[34rem]">
              The notion of set-made man or woman is a myth. Join an elite
              community of like-minded knight who strive for success
            </h4>
          </div>
          <div className="mx-auto my-0 w-fit xl:ml-auto">
            <Button btnLabel={"Join the war room"} btnSize={"small"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 pt-10 pb-10 pl-8 pr-8 text-left sm:flex sm:flex-row sm:justify-between lg:pl-32 lg:pr-32 ">
        <div className="pl-2 border-l-4 lg:w-[20rem]">
          <h4 className="text-lg text-white">
            Find a mentor who can be a trusted partner through your community
            journey
          </h4>
        </div>

        <div className="pl-2 border-l-4 lg:w-[20rem]">
          <h4 className="text-lg text-white">
            Connect with other community builders to collabrate and learn
            together
          </h4>
        </div>

        <div className="pl-2 border-l-4 lg:w-[20rem]">
          <h4 className="text-lg text-white">
            Attend our events for detailed knowledge from community experts
            across industries
          </h4>
        </div>
      </div>

      <div>
        <div className="lg:grid lg:grid-cols-2 lg:pb-6 lg:w-[87%] lg:mx-auto lg:my-0">
          <div className="lg:col-start-2">
            <h3 className="text-2xl text-center text-white uppercase lg:text-left lg:mt-2 lg:mb-2">
              The Knight war room
            </h3>
            <h6 className="text-lg tracking-wide text-center text-white lg:text-left lg:font-semibold">
              Once upon a time,there existed the Trava Kingdom,ruled by Wise
              King Svitanae
            </h6>
          </div>

          <div className="p-4 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <div className="h-[20rem] bg-black"></div>
          </div>

          <div className="pl-2 pr-2 lg:pl-0 lg;pr-0">
            <h3 className="mb-2 text-lg font-semibold tracking-wide text-center text-white lg:text-left ">
              Then, the terrible Dragons of the North came. Led by the Elder
              Wyrms, they rent lands with their teeth and claws,
            </h3>
            <div className="pl-2 pr-2 lg:p-0">
              <p className="text-center text-white lg:text-left">
                burnt cities with their fiery breath and ravaged the forests
                with their wings. Wherever the Dragons went, death followed
                suit. Fear and panic spreaded throughout Trava Kingdom,
                <br />
                <br />
                and the land once overflowing with life now barren, wasted and
                desolated.
                <br />
                <br />
                Before long, the Dragons had scourged all cities and villages of
                Trava Kingdom but the Sacred Citadel
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-2 pb-2 md:flex-row">
          <h6 className="text-white ">Join the Knights war room</h6>
          <div className="w-fit">
            <Button btnLabel={"join the war room"} btnSize={"medium"} />
          </div>
        </div>
      </div>

      <div className="p-2 pb-4 mt-8 ">
        <h4 className="text-2xl text-center text-white uppercase ">
          Where is the titanaires
        </h4>
        <div className="mt-10 lg:flex lg:justify-around">
          <div>
            <h6 className="pb-2 text-2xl font-semibold text-center text-white lg:text-left">
              We are everywere!
            </h6>
            <p className="pl-2 pr-2 text-center text-white lg:text-left lg:pb-4 lg:pt-4 lg:pl-0 lg:w-[30rem] ">
              The globalization of the world has made it critical to be a part
              of a world-spanning network.
            </p>

            <div className="pt-4 lg:w-[30rem]">
              <div className="relative rounded-sm shadow bg-pale-gray ">
                <figure>
                  <img
                    src={horse}
                    alt="horse"
                    className="absolute right-[-0.5rem] top-4 lg:top-[-0.5rem] lg:right-[-2rem]"
                  />
                </figure>
                <figure>
                  <img
                    src={star}
                    alt="star"
                    className="absolute right-20 top-12 lg:top-1 md:top-1"
                  />
                </figure>
                <div className="p-6">
                  <h4 className="text-3xl font-bold tracking-wider text-white md:w-[30rem]  lg:w-[20rem] xl:w-[25rem] ">
                    Subscribe to Community Club Weekly
                  </h4>
                  <p className="pt-10 text-white  lg:w-[23rem] md:w-[40rem]">
                    Get the coolest content in community delivered to your
                    inbox.From engagement to moderation, support to strategy -
                    we’ve got you covered. Puns included, free of charge.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col items-center p-2 lg:flex lg:flex-row lg:pl-6">
                    <div>
                      <input
                        placeholder="Your email address"
                        className="p-4 outline-none md:w-[40rem] w-[20rem] rounded-t-md text-md text-pale-gray lg:rounded-l-md lg:rounded-tr-none lg:w-[15rem]"
                      />
                    </div>
                    <div className="shadow drop-shadow-lg ">
                      <p className="pt-4 pb-4 font-semibold md:w-[40rem] w-[20rem] lg:w-[10rem] text-center text-white uppercase bg-black rounded-b-md md:rounded-bl-none md:rounded-r-md text-md ">
                        subscribe
                      </p>
                    </div>
                  </div>
                  <p className="p-4 text-center text-white">
                    You can unsubscribe at any time, no hard feelings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white lg:max-w-[32rem] pt-6 text-center lg:text-left">
            <p>
              <strong>
                Middangeard, where lay the Lending Pool, the lifesource of
              </strong>
              <br />
              Trava Kingdom itself. The brief respite afforded the Kingdom was
              but fleeting, and the final days drew nigh…
              <br />
              <br />
              In the darkest hours, King Svitanae walked to the Lending Pool,
              with the Holy Scepter tight in hand. “I summon thee, Goddess of
              the Pool. Heed my word, and deliver us from inevitable doom. Come,
              Viviane!”.
              <br />
              <br />
              <strong>
                A vague silhouette appeared, radiating a bright aura that
              </strong>
              <br />
              shone upon the castle not unlike midsummer noon. The Goddess
              Viviane appeared, bringing along her solemn voice: “The Champion
              hath been reincarnated,
              <br />
              <br />
              <strong>
                At the same moment, an enigmatic voice echoed throughout the
                Kingdom.
              </strong>
              <br />
              <br />
              “Legends of the Land, heed thine King’s call. Gather thyself at
              the <b>Citadel</b>,
              <br />
              <br />
              <b>
                Want to know how members of your business industry have found
                applications for AI?
              </b>
              <br />
              <br />
              Speak to an industry insider who knows the founder.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h4 className="pb-6 text-3xl font-semibold text-center text-white">
          Who are our members
        </h4>
        <h6 className="pb-6 text-3xl font-medium text-center text-white">
          They were just like you - looking for something more.
        </h6>
        <p className="text-center text-white">
          They found what they are looking for as knights
        </p>
        <div className="flex justify-center p-6">
          <figure>
            <img src={knight} alt="knight" />
          </figure>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-16 p-10 mt-10 lg:gap-10">
        <div className="bg-light-gray rounded-sm relative max-w-[25rem] sm:min-h-[10rem]">
          <figure>
            <img
              src={mission}
              alt=""
              className="w-20 absolute top-[-2.5rem] left-[7rem] sm:left-[10rem] lg:top-[5.5rem] lg:left-4 lg:w-28"
            />
          </figure>
          <p className="pt-12 pb-4 pl-4 pr-4 text-center text-white text-md">
            “Legends of the Land, heed thine King’s call. Gather thyself at.”
          </p>
        </div>

        <div className="bg-light-gray rounded-sm relative max-w-[25rem] sm:min-h-[10rem]">
          <figure>
            <img
              src={vision}
              alt=""
              className="w-20 absolute top-[-2.5rem] left-[7rem] sm:left-[10rem] lg:w-28 lg:left-[9rem] lg:top-[-4rem]"
            />
          </figure>
          <p className="pt-12 pb-4 pl-4 pr-4 text-center text-white text-md">
            and without exception, each was granted Men of all ages gathered at
            Middangeard, a Trava Knight Armor set, blessed by Viviane power
            through the Lending Pool.
          </p>
        </div>

        <div className="bg-light-gray rounded-sm relative max-w-[25rem] sm:min-h-[10rem]">
          <figure>
            <img
              src={value}
              alt=""
              className="w-20 absolute top-[-2.5rem] left-[7rem] sm:left-[10rem] lg:w-28  lg:top-[-2rem] lg:left-[21.5rem] "
            />
          </figure>
          <p className="pt-12 pb-4 pl-4 pr-4 text-center text-white text-md">
            The new Order of the Holy Knight of Trava was thus formed, and the
            hundred-year Draconic War thus began
          </p>
        </div>
      </div>
      <div className="p-2 mx-auto my-0 w-fit">
        <Button btnLabel={"join the war room"} btnSize={"small"} />
      </div>

      <div className="p-2 mt-16 mb-20">
        <h4 className="text-white lg:mx-auto lg:my-0 text-center text-2xl pb-2 lg:w-[25rem] uppercase">
          "Do you feel that you are not ready to become a knight?"
        </h4>
        <div className="lg:flex lg:justify-around lg:pt-20">
          <div className="text-center lg:text-left lg:w-[25rem]">
            <h6 className="text-xl font-semibold text-white ">
              I want you to understand something.
              <br />
              <br />
            </h6>
            <p className="text-white ">
              <b>NONE of</b> you are, trust me, if you are, we would know who
              you are by now. We dare you to try,
            </p>
            <div className="flex justify-center pt-8 pb-8 lg:justify-start">
              <figure>
                <img src={glass} alt="" />
              </figure>
            </div>
            <p className="font-bold text-white text-md">
              Whether you are a MAN or a WOMAN DOES NOT matter. What MATTERS is
              whether you are WORTHY or NOT.
              <br />
              <br />
              If you had that capability, we’d already know who you are..
            </p>
          </div>
          <div className="flex justify-center pt-4 lg:pt-0">
            <figure>
              <img
                src={knightImage}
                alt=""
                className="lg:w-[30rem] lg:h-[20rem]"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="mt-20 md:p-10 lg:p-0 ">
        <div className="lg:grid lg:grid-cols-2 lg:w-[80%] lg:mx-auto lg:my-0 lg:gap-10">
          <div className="md:pl-20 md:pr-20">
            <h4 className="text-2xl font-semibold text-center text-white lg:text-left">
              You are left with only two options.
            </h4>

            <div className="relative flex justify-start mt-2">
              <p className="absolute pt-2 pb-2 pl-8 pr-8 text-white border w-fit rounded-2xl top-4 md:top-12 lg:text-lg lg:pr-16 lg:pl-16">
                Become worthy spiritually
              </p>
              <figure>
                <img
                  src={handleft}
                  alt=""
                  className="h-[10rem] w-[15rem] md:w-[25rem] md:h-[15rem] lg:w-full lg:h-full"
                />
              </figure>
            </div>

            <div className="relative flex justify-end mt-2 lg:mt-0">
              <p className="absolute pt-2 pb-2 pl-8 pr-8 text-white border w-fit rounded-2xl top-4 md:top-12 lg:text-lg lg:pr-16 lg:pl-16">
                Become worthy financially
              </p>
              <figure>
                <img
                  src={handRight}
                  alt=""
                  className="h-[10rem] w-[15rem] md:w-[25rem] md:h-[15rem] lg:w-full lg:h-full"
                />
              </figure>
            </div>
          </div>
          <div className="lg:w-[30rem] text-center mt-4 md:mx-auto md:my-0 lg:text-left">
            <h4 className="text-2xl font-semibold text-white">
              - Do you have a business generating 20k in revenue a month?
              <br />
              <br />- Do you earn 2k doing a job?
              <br />
              <br />
            </h4>
            <p className="text-white">
              Those two levels of money are so similar, so close to each other,
              that it’s trivial to say there is ANY difference.
              <br />
              <br />
              Until the prophesied Champion of the Crystal would arrive
              <br />
              <br />
              You think $1 million is impressive?? <br />
              <br />
              It is not much money considering the potential of the Knights.{" "}
              <br />
              You are NOT worthy and,
              <br />
              You are NOT ready.
              <br />
              Nobody is Born a Knights, you have to BECOME ONE.
            </p>
          </div>
        </div>
        <div className="flex justify-center p-6">
          <Button btnLabel={"join the war room"} btnSize={"medium"} />
        </div>
      </div>

      <div className="p-2 mt-10">
        <h4 className="text-2xl text-center text-white uppercase md:text-3xl">
          FIVE ROAD HEADS.
        </h4>

        <div className="flex flex-col justify-around pt-6 md:flex-row sm:gap-8 md:mt-12 lg:pl-32 lg:pr-32">
          <figure>
            <img src={pioneers} alt="" className="sm:w-full md:w-fit" />
          </figure>
          <div className="text-center p-4 md:p-0 md:text-left md:w-[45rem]">
            <p className="text-lg text-white ">
              We have <b>1 billionaires</b> and <b>2 millionaires</b> onboard
              pioneering the community with their mentorship and investments.
              And,
              <br />
              <br />
              We are a growing community by the minute.
              <br />
              <br />
              (Early bird offers for the first
              <b> 50 pioneering members are available</b>)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-28">
        <div className="relative">
          <figure>
            <img
              src={warRoom}
              alt=""
              className="w-full h-[40rem] object-cover lg:object-fill"
            />
          </figure>
          <div className="absolute p-4 text-center text-white top-20 md:p-8 md:w-full md:mx-auto md:my-0">
            <h4 className="pb-4 text-2xl font-semibold lg:text-3xl">
              WHAT OUR MEMBER HAVE ACHIEVED.
            </h4>
            <p className="text-lg font-medium lg:text-center">
              These achievements may be a small step for the community
              <br className="hidden lg:block" /> but a huge milestone in the
              lives of these members.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="p-4 text-white">
          <h4 className="text-2xl text-center md:text-left">
            NEWS $ ANNOUNCEMENT
          </h4>
          <p className="pt-4 pb-6 text-center md:text-left">
            We expect future benefits as an investment in the form of a positive
            return. The return may consist of capital gain and/or investment
            income, including dividends, interest, rental income etc.
          </p>
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
            {newsData.length > 0 &&
              newsData.map((each, i) => (
                <div key={i}>
                  <ImageCardLabel
                    cardImage={each.image}
                    details={each.description}
                    categoryLabel={each.category}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
