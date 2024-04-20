import React from 'react'

const Subscriber = () => {
  return (
    <div>
    <div className="flex flex-col pt-3.5">
      <div className="flex overflow-hidden relative flex-col pb-20 pl-20 mt-3.5 w-full min-h-[407px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b7c917b1d5e8ae64d5448b20b461845d36132a980ba38f0c7039024112609c7?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41914013cf528a7b75dc7bcdda5d6e641dabaca79a7cd825960912ae1d98fe9d?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="z-10 self-end mt-0 aspect-square w-[70px]"
        />
        <div className="flex relative flex-col self-center mt-8 w-full max-w-[1043px] max-md:max-w-full">
          <div className="text-4xl font-semibold text-center text-gray-500 leading-[54px] max-md:max-w-full">
            Subscribe to get information, latest news and other
            <br />
            interesting offers about Jadoo
          </div>
          <div className="flex gap-5 self-start mt-20 ml-28 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto gap-3.5 px-8 py-6 text-sm bg-white rounded-xl text-slate-700 max-md:flex-wrap max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a20709b43323652327981e2c1b7b7878dbaf118e078010d6639d36a4c876ef11?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="shrink-0 aspect-[1.16] w-[21px]"
              />
              <div className="flex-auto my-auto">Your email</div>
            </div>
            <div className="justify-center px-12 py-7 text-lg font-semibold text-center text-white whitespace-nowrap rounded-xl bg-[linear-gradient(180deg,#FF946D_0%,#FF7D68_100%)] max-md:px-5">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Subscriber