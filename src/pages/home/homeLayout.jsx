import React from "react";
import hero from "../../assets/hero.png";
import Button from "../../components/input/button";
import horse from "../../assets/horse.png";
import star from "../../assets/star.png";
const HomeLayout = () => {
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

      <div className="p-2 pb-4 mt-8 lg:pl-32 lg:pr-32">
        <h4 className="text-2xl text-center text-white uppercase ">
          Where is the titanaires
        </h4>
        <div className="lg:grid lg:grid-cols-2 lg:pl-20 lg:pr-20">
          <div>
            <h6 className="pb-2 text-2xl font-semibold text-center text-white md:text-left">
              We are everywere!
            </h6>
            <p className="pl-2 pr-2 text-center text-white md:text-left lg:pb-4 lg:pt-4 lg:pl-0 lg:w-[30rem] ">
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

          <div>
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
