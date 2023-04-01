import React from "react";
import { umamiEvent, gtagEvent } from "../util";

const Pricing = () => {
  const referrer = document.referrer;
  const getStarted = () => {
    umamiEvent("Free", { referrer })
    gtagEvent("Free")
    window.location.href = "https://slack-redirect.i365.tech/";
  };
  const contackUS = () => {
    umamiEvent("Premium", { referrer })
    gtagEvent("Premium")
    window.location.href = "mailto:me@myreader.io"
  }
  return (
    <section id="pricing">
      <h2 className="text-4xl mb-4 text-center font-black">Choose Your Plan</h2>
      <div className="pricing px-4">
        <div className="pricing__item free">
          <h2 className="font-extrabold">Free</h2>
          <p className="price font-normal">$0/m</p>
          <ul className="benefits">
            <li>Web read with myGPTReader</li>
            <li>Ask myGPTReader anything</li>
            <li>Today Hot News</li>
          </ul>
          <button className="cta bg-slate-800 font-semibold" onClick={getStarted}>
            Get Started
          </button>
        </div>
        <div className="pricing__item premium">
          <h2 className="font-extrabold">Premium</h2>
          <p className="price font-normal">$?/m</p>
          <ul className="benefits">
            <li>Web read with myGPTReader</li>
            <li>Ask myGPTReader anything</li>
            <li>Today Hot News</li>
            <li className="font-bold text-indigo-600 text-lg">Document read with myGPTReader</li>
            <li className="font-bold text-purple-600 text-lg">Voice chat with myGPTReader</li>
            <li className="font-bold text-pink-600 text-lg">Bot for you</li>
            <li className="italic">More in the future</li>
          </ul>
          <button className="cta bg-gray-800 font-semibold" onClick={contackUS}>Contact US</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
