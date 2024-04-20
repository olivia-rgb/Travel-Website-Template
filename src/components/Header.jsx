import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-15">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-15 font-bold max-md:mt-10 max-md:max-w-full ">
            <div className="text-xl text-red-400 uppercase max-md:max-w-full">
              Best Destinations around the world
            </div>
            <div className="mt-9 text-8xl tracking-tighter leading-[89px] text-indigo-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life
            </div>
            <div className="mt-14 text-base leading-8 text-gray-500 max-md:mt-10 max-md:max-w-full">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2754fe9e7db70a9a40f5dc4574b086c58e4465f7507496e7eb4c5e1ed266ae?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="mt-10 max-w-full aspect-[6.25] w-[379px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/42f2109a34b7404868a4eeae90178a6e54980c504c57e6543ca5a4ae2bad04e2?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="grow w-full aspect-[1.03] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header