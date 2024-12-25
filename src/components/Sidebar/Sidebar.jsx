import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const loadPromt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="min-h-screen py-6 px-2 inline-flex flex-col justify-between bg-slate-100 shadow-md shadow-rose-300">
      {/* Top Part */}
      <div className="ml-3 block cursor-pointer">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="w-6 mt-2"
          src={assets.menu_icon}
          alt=""
        />

        <div className="mt-12 inline-flex items-center gap-3 py-3 px-4 bg-gray-200 border rounded-[48px] text-sm text-gray-600 cursor-pointer">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {extended ? (
            <p className="text-sm text-gray-700 cursor-pointer">New Chat</p>
          ) : null}
        </div>

        {extended ? (
          <div className="flex flex-col">
            <p className="mt-8 mb-5">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPromt(item)}
                  className="flex items-start gap-3 p-2 my-1 pr-10 cursor-pointer border rounded-[48px] hover:bg-slate-200"
                >
                  <img className="w-6" src={assets.message_icon} alt="" />
                  <p className="text-neutral-600">{item.slice(0, 15)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* bottom part */}
      <div className=" inline-flex flex-col p-3">
        <div className="inline-flex py-2 px-3 flex-row my-1 rounded-3xl hover:bg-slate-200 cursor-pointer">
          <img className="w-6 mr-2" src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="inline-flex py-2 px-3 flex-row my-1 rounded-3xl hover:bg-slate-200 cursor-pointer">
          <img className="w-6 mr-2" src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="inline-flex py-2 px-3 flex-row my-1 rounded-3xl hover:bg-slate-200 cursor-pointer">
          <img className="w-6 mr-2" src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
