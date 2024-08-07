import React from 'react'
import Link from 'next/link'
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
        <p className='mt-14 text-xl border border-black pl-2 font-bold'>
            International Delegates:
        </p>
        <div className="grid grid-cols-3 mt-8">
            <div className="col-span-2 flex flex-col justify-center font-semibold text-lg  pl-4 py-2">Registration Fees (including GST)</div>
            <div className="col-span-1 flex flex-col justify-center font-semibold pl-4 py-2"></div>
            <FeesComp
            type={'1. International delegate:'}
            fees={'USD 250'}
            />
            <FeesComp
            type={'2. International student'}
            fees={'USD 100'}
            />
            <FeesComp
            type={'3. SAARC & Developing Countries delegate'}
            fees={'USD 150'}
            />
            <FeesComp
            type={'4. SAARC & Developing Countries student'}
            fees={'USD 50'}
            />
        </div>
        <p className='mt-14 pl-2 text-xl border border-black font-bold'>
            National Delegates:
        </p>
        <div className="grid grid-cols-3 mt-8">
            <div className="col-span-2 flex flex-col justify-center text-lg  font-semibold pl-4 pb-2">Registration Fees (including GST)</div>
            <div className="col-span-1 flex flex-col justify-center font-semibold pl-4 pb-2"></div>
            <FeesComp
            type={'1. Academician/Professional:'}
            fees={'INR 6000'}
            />
            <FeesComp
            type={'2. Research Scholar'}
            fees={'INR 2500'}
            />
            <FeesComp
            type={'3. PG Students'}
            fees={'INR 1500'}
            />
            <FeesComp
            type={'4. UG Students'}
            fees={'INR 1000'}
            />
        </div>
        <p className='mt-14 pl-2 text-xl border border-black font-bold'>
            Account details for the payment:
        </p>
        <div className='grid grid-cols-3 mt-8 mb-3'>
            <FeesComp
            type={"Account No: "}
            fees={"50433562364"}
            />
            <FeesComp
            type={"Beneficiary: "}
            fees={"NIT Patna CF Accounts"}
            />
            <FeesComp
            type={"Bank Name:"}
            fees={"Indian Bank"}
            />
            <FeesComp
            type={"Branch: "}
            fees={"NIT Patna"}
            />
            <FeesComp
            type={"IFSC: "}
            fees={"IDIB000B810"}
            />
        </div>
        <p className='pt-4 pb-2 font-medium'>
            For International Payment only
        </p>
        <div className='grid grid-cols-3'>
            <FeesComp
            type={"SWIFT Code: "}
            fees={"IDIBINBBXXX"}
            />
        </div>
        <p className='mt-14 pl-2 border border-black' >
            <span className='font-semibold text-lg'>Registration: </span><Link className='text-blue-500' target="_blank" href="https://forms.gle/1nYFhS363vrv4aaV7">
            https://forms.gle/1nYFhS363vrv4aaV7
            </Link>
        </p>
    </div>
  )
}

export default Fees