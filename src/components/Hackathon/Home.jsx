import React from 'react'
import BackGround from './BackGround'
import { ShimmerButtonDemo } from '../ShimmerButton/ShimmerButtonDemo'
const Home = () => {
  return (
    <div
  className="h-[100vh] md:h-[80vh]"
  style={{
    backgroundImage: "url('https://i.ibb.co/r3TYPYL/Hackathon-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
    <header class="py-4 md:py-6 text-white gap-10">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                <img
                  className="w-auto h-10"
                  src="https://i.ibb.co/qrhhX9Y/logo-semi.png"
                  alt=""
                  />
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="text-gray-900">
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                    <a href="#" title="" class="text-base text-white font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Challenges </a>

                    <a href="#" title="" class="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Criteria </a>

                    <a href="#" title="" class="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> TimeLine </a>
                </div>

                <div class="lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                <a href="#" title="" className=""  role="button">
                <ShimmerButtonDemo />
              </a>
                </div>
            </div>
        </div>
    </header>

    <section class="md:pt-52 pt-12  lg:pt-8 pb-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                    <div class="text-center lg:text-left">
                        <p className='text-[#2DCDC4] text-2xl'>14-15 November</p>
                        <h1 class="text-5xl font-bold leading-tight sm:text-5xl sm:leading-tight text-white lg:leading-tight lg:text-6xl font-pj">Taking Tech for the
                        <h1 className="text-6xl font-bold text-transparent"
                        style={{
                            WebkitTextStrokeWidth: "2px",
                            WebkitTextStrokeColor: "white",
                        }}
                        >
                        Future
                        </h1>
                            </h1>
                        <p class="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Register Now.</p>

                        {/* <form action="#" method="POST" class="mt-8 sm:mt-10">
                            <div class="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email address"
                                    class="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                    required=""
                                />
                                <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                    <button type="submit" class="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Get Free Card</button>
                                </div>
                            </div>
                        </form> */}
                    </div>

                </div>

                <div className='block sm:hidden lg:block'>
                <svg
                    className="w-full"
                    width="386"
                    height="400"
                    viewBox="0 0 386 472"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M270.339 123.822L261.874 108.394L320.037 45.4188L318.827 43.2148L234.465 58.4366L226 43.0085L317.284 27.335L332.601 55.2524L270.339 123.822Z"
                    fill="#2DCDC4"
                    />
                    <path
                    d="M16.2268 125.162C14.397 121.827 13.9504 118.553 14.887 115.339C15.8571 112.01 18.0097 109.431 21.3448 107.601L36.0194 99.5501L43.3387 112.891L34.3339 117.831C32.3328 118.929 31.9422 120.59 33.1621 122.813L49.5695 152.718C50.952 155.238 51.2753 157.761 50.5394 160.286C49.8776 162.77 48.2497 164.724 45.6557 166.147L44.9887 166.513L46.0866 168.514L46.7536 168.148C49.3476 166.725 51.8701 166.402 54.3211 167.178C56.8461 167.914 58.8 169.542 60.1825 172.062L76.5899 201.967C77.8098 204.19 79.4203 204.753 81.4214 203.655L90.4262 198.715L97.7455 212.055L83.071 220.106C79.7358 221.936 76.404 222.366 73.0755 221.396C69.8617 220.459 67.3399 218.324 65.5101 214.988L47.0289 181.304C45.8497 179.154 44.2595 178.629 42.2584 179.726L35.2546 183.569L26.4715 167.56L33.4753 163.718C35.4763 162.62 35.8873 160.996 34.708 158.847L16.2268 125.162Z"
                    fill="#2DCDC4"
                    />
                    <path
                    d="M113.896 115.401C115.075 117.55 116.665 118.076 118.666 116.978L125.67 113.135L134.453 129.144L127.449 132.986C125.448 134.084 125.037 135.708 126.216 137.857L144.698 171.542C146.528 174.877 146.937 178.172 145.926 181.426C145.03 184.714 142.915 187.273 139.58 189.103L124.905 197.154L117.586 183.813L126.591 178.873C128.592 177.775 128.982 176.114 127.762 173.891L111.355 143.986C109.972 141.466 109.612 138.964 110.274 136.48C111.01 133.954 112.675 131.98 115.269 130.557L115.936 130.191L114.838 128.19L114.171 128.556C111.577 129.979 109.017 130.323 106.492 129.587C104.041 128.81 102.125 127.162 100.742 124.642L84.3346 94.7372C83.1147 92.5138 81.5042 91.9511 79.5031 93.049L70.4983 97.9895L63.179 84.649L77.8536 76.5977C81.1887 74.7679 84.4835 74.3584 87.7379 75.3691C91.0257 76.2651 93.5846 78.3806 95.4144 81.7158L113.896 115.401Z"
                    fill="#2DCDC4"
                    />
                    <path
                    d="M340.146 230.5L333.342 253.846L327.409 263.342L329.393 264.928L335.786 258.3L358.912 245.612L365.68 257.946L342.553 270.634L333.528 272.466L333.8 274.991L344.997 275.088L368.343 281.892L364.399 295.423L341.053 288.618L331.557 282.685L329.972 284.669L336.599 291.062L349.288 314.189L336.954 320.956L324.265 297.829L322.434 288.805L319.909 289.076L319.811 300.273L313.007 323.619L299.477 319.676L306.281 296.33L312.215 286.834L310.231 285.248L303.838 291.876L280.711 304.564L273.944 292.23L297.07 279.542L306.095 277.71L305.824 275.185L294.627 275.088L271.281 268.284L275.224 254.753L298.57 261.558L308.066 267.491L309.652 265.507L303.024 259.114L290.336 235.987L302.67 229.22L315.358 252.347L317.189 261.371L319.715 261.1L319.812 249.903L326.616 226.557L340.146 230.5Z"
                    fill="#2DCDC4"
                    />
                    <path
                    d="M187.768 434.625C185.553 430.588 185.074 426.414 186.331 422.102C187.65 417.575 190.328 414.204 194.365 411.989C198.402 409.774 202.615 409.365 207.002 410.761C211.453 411.941 214.786 414.549 217.001 418.586L228.228 439.049C230.824 443.782 231.432 448.52 230.049 453.262C228.806 457.929 225.818 461.56 221.086 464.157L210.437 469.999L204.25 458.724L214.064 453.34C217.823 451.278 218.556 448.159 216.265 443.982L213.401 438.762C212.516 439.791 211.448 440.649 210.195 441.336C206.297 443.475 202.123 443.954 197.672 442.774C193.285 441.378 189.983 438.662 187.768 434.625ZM143.777 354.444C141.562 350.407 141.083 346.233 142.34 341.922C143.659 337.394 146.337 334.023 150.374 331.809C154.411 329.594 158.623 329.184 163.011 330.58C167.462 331.76 170.795 334.369 173.01 338.406C175.224 342.443 175.672 346.725 174.353 351.252C173.096 355.563 170.449 358.826 166.413 361.041C162.376 363.256 158.164 363.666 153.776 362.27C149.366 360.874 146.033 358.265 143.777 354.444Z"
                    fill="#2DCDC4"
                    />
                </svg>
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Home