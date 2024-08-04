import React from 'react'
function FeesComp({ type,fees }) {
    return (
        <>
        
            <div className={`col-span-2 border-b border-gray-300 flex flex-col justify-start pl-2 py-2`}>{type}</div>
            <div className="col-span-1 flex border-b border-gray-300 flex-col justify-center pl-4 py-2">{fees}</div>
        </>
    )
}
function Fees() {
  return (
    <div>
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center font-semibold pl-4 py-2"></div>
            <div className="col-span-1 flex flex-col justify-center font-semibold text-lg pl-4 py-2">Registration Fees (including GST)</div>
            <FeesComp
            type={'1. International delegates:'}
            fees={'USD 250'}
            />
            <FeesComp
            type={'2. International students'}
            fees={'USD 100'}
            />
            <FeesComp
            type={'3. SAARC & Developing Countries delegate'}
            fees={'USD 150'}
            />
            <FeesComp
            type={'4. SAARC & Developing Countries students'}
            fees={'USD 75'}
            />
        </div>
        <p className='pt-14 text-xl'>
            National Delegates
        </p>
        <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center font-semibold pl-4 pb-2"></div>
            <div className="col-span-1 flex flex-col justify-center text-lg font-semibold pl-4 pb-2">Registration Fees (including GST)</div>
            <FeesComp
            type={'1. Academician/Professional:'}
            fees={'INR 6000'}
            />
            <FeesComp
            type={'2. Research Scholar'}
            fees={'INR 2500'}
            />
            <FeesComp
            type={'3. PG Students	'}
            fees={'INR 1500'}
            />
            <FeesComp
            type={'4. UG Students'}
            fees={'INR 1000'}
            />
        </div>
    </div>
  )
}

export default Fees