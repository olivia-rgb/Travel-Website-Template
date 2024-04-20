import React from 'react'

const Testimonials = () => {
  return (
    <div>
    <div className="flex gap-5 justify-between px-5 max-md:flex-wrap">
      <div className="flex flex-col self-start mt-4">
        <div className="text-lg font-semibold text-gray-500 uppercase">
          Testimonials
        </div>
        <div className="mt-6 text-5xl font-bold capitalize text-indigo-950 max-md:text-4xl">
          What people say
          <br />
          about Us.
        </div>
        <div className="flex gap-5 justify-between self-start mt-24 max-md:mt-10">
          <div className="shrink-0 w-3 h-3 rounded-full bg-slate-700" />
          <div className="shrink-0 w-3 h-3 rounded-full bg-neutral-200" />
          <div className="shrink-0 w-3 h-3 rounded-full bg-neutral-200" />
        </div>
      </div>
      <div className="flex gap-5 items-start text-gray-500 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64e9aceae1a258c92bfec6e94889e7609e9642fd0d5871f7b54ffc8e4e410fb1?apiKey=f417b8c00fe14582a1a201b8017683ae&"
          className="shrink-0 self-start rounded-full aspect-square w-[68px]"
        />
        <div className="flex flex-col grow shrink-0 items-start self-end pr-12 pb-7 mt-32 rounded-xl border-2 border-solid shadow-2xl basis-0 border-neutral-100 w-fit max-md:mt-10 max-md:max-w-full">
          <div className="flex z-10 flex-col px-9 py-10 mt-0 text-base leading-8 bg-white rounded-xl shadow-2xl max-md:pl-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </div>
            <div className="self-end text-slate-600">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </div>
            <div className="text-sm max-md:max-w-full">Lahore, Pakistan</div>
          </div>
          <div className="flex flex-col mt-2 ml-9 max-md:ml-2.5">
            <div className="text-lg font-semibold">Chris Thomas</div>
            <div className="mt-4 text-sm">CEO of Red Button</div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5f11abc4a494571b04ccde58e0b83ccc597e9bfca6bf9de6f38463b3b41b13e?apiKey=f417b8c00fe14582a1a201b8017683ae&"
        className="shrink-0 my-auto w-3.5 aspect-[0.2]"
      />
    </div>
    </div>
  )
}

export default Testimonials