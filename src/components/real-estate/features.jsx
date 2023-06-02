import React from "react";
import Card from "./card";
import Footer from "./footer";
import Testimonials from "./testimonials";

const Features = () => {
  return (
  <>
    <div className="flex flex-col py-12 px-4 space-y-12 md:space-y-0 md:flex-row md:px-6">
      <div className="flex flex-col md:w-1/2 space-y-6">
        <p className="font-bold max-w-md mx-auto text-center text-4xl md:text-4xl md:text-left">
          {" "}
          What's different about Manage?
        </p>
        <p className="text-darkGrayishBlue max-w-sm text-start mx-auto md:text-start">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
    <div className="flex flex-col space-y-6 mx-auto w-3/4 md:w-1/3">
      <div className="space-y-2 pb-2">
        <div className="flex items-center space-x-4 bg-pink-100 md:bg-white">
          <h1 className="bg-brightRed w-[40px] text-center py-2 rounded-xl text-white ">01</h1>
          <p className="font-bold mx-auto">Track company-wide progress</p>
        </div>
        <p className="text-darkGrayishBlue">See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.</p>
      </div>
      {/*  */}
      <div className="space-y-2 pb-2">
        <div className="flex items-center space-x-4 bg-pink-100 md:bg-white">
          <h1 className="bg-brightRed w-[40px] text-center py-2 rounded-xl text-white ">02</h1>
          <p className="font-bold mx-auto py-2">Advanced built-in reports</p>
        </div>
        <p className="text-darkGrayishBlue">Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.</p>
      </div>
      {/*  */}
      <div className="space-y-2 pb-2">
        <div className="flex items-center space-x-4 bg-pink-100 md:bg-white">
          <h1 className="bg-brightRed w-[40px] text-center py-2 rounded-xl text-white ">03</h1>
          <p className="font-bold mx-auto">Everything you need in one place</p>
        </div>
        <p className="text-darkGrayishBlue">Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.</p>
      </div>
    </div>
    </div>
  <Testimonials />
  <Card />
  <Footer />
  </>
  );
};

export default Features;
