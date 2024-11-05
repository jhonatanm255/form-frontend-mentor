import React from 'react'

function Confirmation() {
  return (
    <>
      <div className="bg-blue-50 rounded-xl p-4">
        <section className="flex justify-between">
          <div>
            <p className="text-lg font-semibold text-primary-marine-blue">
              Arcade (Monthly)
            </p>
            <p className="text-gray-400 underline">Change</p>
          </div>
          <p className="text-lg font-bold text-primary-marine-blue flex items-center">
            $9/mo
          </p>
        </section>
        <hr className="mt-2" />
        <section className="mt-4">
          <div className="flex justify-between">
            <p className="text-gray-400">Online service</p>
            <p className="text-primary-marine-blue font-semibold">+$1/mo</p>
          </div>
        </section>
        <section className="mt-4">
          <div className="flex justify-between">
            <p className="text-gray-400">Larger storage</p>
            <p className="text-primary-marine-blue font-semibold">+$2/mo</p>
          </div>
        </section>
      </div>
      <section className="mt-4 px-4">
        <div className="flex justify-between">
          <p className="text-gray-400">Total (per month)</p>
          <p className="text-primary-purplish-blue text-lg flex items-center font-bold">+$12/mo</p>
        </div>
      </section>
    </>
  );
}

export default Confirmation;