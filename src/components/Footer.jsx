import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col px-5">
      <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start">
          <div className="text-5xl text-indigo-950">Jadoo.</div>
          <div className="mt-10 text-sm leading-4 text-gray-500">
            Book your trip in minute, get full
            <br />
            Control for much longer.
            <br />
          </div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-lg leading-6 text-gray-500 whitespace-nowrap">
          <div className="text-xl font-bold text-zinc-950">Company</div>
          <div className="mt-10">About</div>
          <div className="mt-5">Careers</div>
          <div className="mt-5">Mobile</div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-lg leading-6 text-gray-500 whitespace-nowrap">
          <div className="text-xl font-bold text-zinc-950">Contact</div>
          <div className="mt-10">Help/FAQ</div>
          <div className="mt-5">Press</div>
          <div className="mt-5">Affilates</div>
        </div>
        <div className="flex flex-col self-start mt-3 text-lg leading-6 text-gray-500">
          <div className="text-xl font-bold text-zinc-950">More</div>
          <div className="mt-11 max-md:mt-10">Airlinefees</div>
          <div className="mt-6">Airline</div>
          <div className="mt-5">Low fare tips</div>
        </div>
        <div className="flex flex-col self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97296ef53c0887421a81a0c8b2095643b4fe5ae1d55f526a974d7bfda8942320?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="max-w-full aspect-[4] w-[177px]"
          />
          <div className="mt-8 text-xl tracking-normal leading-6 text-gray-500">
            Discover our app
          </div>
          <div className="flex gap-2 mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f943f97c3f674ed2f7841abbef15b51bed6b1d200248a3740e475232e2998ae?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 max-w-full aspect-[3.03] w-[107px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11f6d32386940647b32971aeb54ee9acf20ca0c6cb034d988194abfc0c169e8?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="shrink-0 max-w-full aspect-[2.86] w-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="self-center mt-20 text-sm leading-4 text-gray-500 max-md:mt-10">
        All rights reserved@jadoo.co
      </div>
    </div>  
    </div>
  )
}

export default Footer