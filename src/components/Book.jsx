import React from 'react'

const Book = () => {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 text-base text-gray-500 max-md:mt-10 max-md:max-w-full">
            <div className="text-lg font-semibold text-center max-md:max-w-full">
              Easy and Fast
            </div>
            <div className="mt-7 text-5xl font-bold capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">
              Book your next trip <br />
              in 3 easy steps
            </div>
            <div className="flex gap-5 mt-9 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a1a17f2be0c6f5548f69ac1e250adf0094f432dc704ca64f660d7fd681c0ae?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="shrink-0 self-start aspect-[0.98] w-[47px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="font-bold leading-[124.5%] max-md:max-w-full">
                  Choose Destination
                </div>
                <div className="mt-3 leading-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b247aa0463cb52886d61740e61f8d45780e816bcb040b5644aa15daea514cf?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="shrink-0 self-start aspect-[0.98] w-[47px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="font-bold leading-[124.5%] max-md:max-w-full">
                  Make Payment
                </div>
                <div className="mt-2 leading-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-12 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab108e9d449a018d918072838cbd34ea6be5c69bfca8f0f771bff14668eb7e0?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="shrink-0 self-start aspect-[0.98] w-[47px]"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="font-bold leading-[124.5%] max-md:max-w-full">
                  Reach Airport on Selected Date
                </div>
                <div className="mt-2.5 leading-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e787cc7b461a3134ef266c5fa2a9d1ac656b6e05fbeb140e7df5847101e4d78d?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="mt-16 w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Book