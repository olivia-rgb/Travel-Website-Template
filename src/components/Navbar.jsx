import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex gap-5 justify-between text-lg text-gray-800 max-md:flex-wrap mb-7">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b3ec95f0653896d0c431ef9d1022ad9e3d8fb2984d41427d3cd9bfc6735aa4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
        className="shrink-0 my-auto max-w-full aspect-[3.33] w-[115px]"
      />
      <div className="flex gap-5 max-md:flex-wrap">
        <div className="flex flex-auto gap-5 items-center px-5 max-md:flex-wrap max-md:max-w-full">
          <div className="grow self-stretch my-auto">Desitnations</div>
          <div className="self-stretch my-auto">Hotels</div>
          <div className="self-stretch my-auto">Flights</div>
          <div className="self-stretch my-auto">Bookings</div>
          <div className="self-stretch my-auto font-medium">Login</div>
          <div className="justify-center self-stretch px-6 py-3 font-medium rounded-md border border-gray-800 border-solid max-md:px-5">
            Sign up
          </div>
        </div>
        <div className="flex gap-2.5 px-5 my-auto font-medium whitespace-nowrap">
          <div>EN</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7839733cbe854c08829e110e998ab4fd327adb751b03c9b75f3a5e13303978de?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="shrink-0 my-auto border border-gray-800 border-solid aspect-[1.49] stroke-[1px] stroke-gray-800 w-[9px]"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar