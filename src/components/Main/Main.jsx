import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import Greetings from "./Greetings";
import PromptCards from "./PromptCards";
import ShimmerUI from "./ShimmerUI";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className=" flex-1 flex-row min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl mt-3 py-2 px-5">
        <div className=" flex flex-row gap-1">
          <p className="text-2xl font-semibold text-slate-700">Gemini</p>
          <img className="w-6" src={assets.gemini_icon} alt="" />
        </div>
        <img
          className="w-11 border rounded-full"
          src={assets.user_icon}
          alt=""
        />
      </div>

      {/* main container */}

      <div className="w-screen md:w-[900px] m-auto ">
        {!showResult ? (
          <>
            <Greetings />

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-1">
              <PromptCards />
            </div>
          </>
        ) : (
          <div className="py-2 pb-6 md:py-0 px-[5%] max-h-[70vh] overflow-y-scroll no-scrollbar">
            <div className="my-10 mx-0 flex items-center gap-5">
              <img
                className="w-12 rounded-full"
                src={assets.user_icon}
                alt=""
              />
              <p className=" text-xl font-bold">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-4">
              <img className="w-10" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <ShimmerUI />
                </div>
              ) : (
                <p
                  className="text-lg font-normal leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        {/* Main Bottom */}
        <div className="absolute bottom-6 w-full mt-2 md:mt-1 max-w-[900px] px-5 mx-auto rounded-3xl">
          <div className="flex items-center justify-between gap-3 md:gap-5 bg-gray-100 py-3 px-5 border rounded-[48px] shadow-sm shadow-red-400">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className=" flex-1 bg-transparent border-none outline-none p-1 text-lg "
              type="text"
              placeholder="Start Messaging"
            />
            <div className="flex flex-row items-center justify-between gap-2 md:gap-5">
              <img className=" w-4 md:w-6" src={assets.gallery_icon} alt="" />
              <img className="w-4 md:w-6" src={assets.mic_icon} alt="" />
              <img
                onClick={() => onSent()}
                className="w-4 md:w-6 mr-1 cursor-pointer"
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="text-sm font-medium my-3 mt-4 text-gray-500 mx-auto text-center">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.Your <b>privacy</b> and <b>Gemini</b>{" "}
            Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
