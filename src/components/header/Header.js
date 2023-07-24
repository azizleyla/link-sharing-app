import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Links from "../links/Links";
import Profile from "../profile/Profile";

const Header = () => {
    const[activeTab,setActiveTab] = useState()
  return (
    <>
    <div className="bg-[#fff] flex justify-between items-center px-2 py-2">
      <div>
        <img src="https://link-sharing-app.fly.dev/images/logo-devlinks-large.svg" />
      </div>

      <div>
   <button onClick={() => setActiveTab(1)} className={`bg-[#fff]  rounded-md py-2 px-3 ${activeTab===1 ? 'bg-[#EEEAFE] text-[#623cfe]' : "text-gray-500"}`}>Links</button>
   <button onClick={() => setActiveTab(2)} className={`bg-[#fff]  rounded-md py-2 px-3 ${activeTab===2 ? 'bg-[#EEEAFE] text-[#623cfe]' : "text-gray-500"}`}>Profile Details</button>
      </div>
      <div>
        <button className="border-[1px] rounded-md font-bold border-[#623CFE] p-2 text-[#623cfe]">Preview</button>
      </div>
    </div>
    {activeTab === 1 && <Links/>}
    {activeTab === 2 && <Profile/>}
    </>
  );
};

export default Header;
