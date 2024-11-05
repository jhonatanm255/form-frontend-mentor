import React from 'react';
import Header from '../header';
import Check from "../../assets/images/icon-thank-you.svg";

function Confirm() {

  return (
    <>
      <div className="h-[95vh] flex flex-col justify-between">
        <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
          <Header currentPage={4} />

          <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
            <img className='flex justify-center mx-auto mt-12' src={Check} alt="logo-thanks" />
            <h1 className="text-3xl text-primary-marine-blue font-bold flex justify-center mt-8">
              Thank you!
            </h1>
            <p className="text-gray-500 text-base mt-4 mb-16 flex justify-center">
              Thanks for confirming your subscription! <br />
              We hope you have fun using our platform. If you ever need support,
              please feel free to email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm