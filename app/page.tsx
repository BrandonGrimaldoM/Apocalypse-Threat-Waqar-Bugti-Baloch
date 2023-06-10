"use client";
import { ChevronDoubleRightIcon, Bars3Icon } from "@heroicons/react/24/solid";

import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(
        window.navigator.userAgent
      )
    );

    document.addEventListener("mousemove", (event: MouseEvent) => {
      const cursor = document.querySelector(".cursor") as HTMLElement;
      cursor.style.left = event.pageX - 15 + "px";
      cursor.style.top = event.pageY - 15 + "px";
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex items-center justify-center h-96 ">

        <h1 className="text-4xl text-white text-center">
          This template only has design for desktop and not for mobile devices.
        </h1>
        </div>
      ) : (
        <>
          <div className="bg-[url('/images/background.png')] bg-cover absolute z-0 w-screen h-full scale-150 bg-center "></div>

          <div className="flex">
            <section className="w-full overflow-hidden relative flex justify-center h-[1080px]">
              <img
                src="/images/manos-zombies.png"
                alt="manos-zombies"
                className="opacity-[0.8] w-[800px] h-auto -bottom-96 absolute animate-bounce"
              />
              <img
                src="/images/humo.png"
                alt="humo"
                className="object-contain absolute z-20 animate-pulse bottom-0 left-0"
              />
              <div className="relative z-40 lg:translate-y-10">
                <h1 className="uppercase zombie text-center select-none 2xl:text-[21.6vw] xl:text-[20vw] lg:text-[18.5vw]">
                  zombie
                </h1>
                <h2 className="text-4xl font-medium pb-7">
                  THE DEAD DON&apos;T DIE
                </h2>
                <p className="leading-9 pb-7">
                  Lorem ipsum dolor sit amet consectetur. <br /> Convallis
                  tincidunt parturient sed tortor.
                </p>
                <button className="flex bg-[#3F0A81] rounded-[70px] px-20 items-center gap-10 py-5">
                  <p className="text-2xl">MORE INFO</p>
                  <ChevronDoubleRightIcon className="text-white w-8 h-8" />
                </button>
              </div>
            </section>

            <div className="w-52 bg-[#A731DF]/20 backdrop-blur-[2px] flex flex-col items-center pt-12 justify-between relative ">
              <div className="absolute w-96 h-40 bg-[#A731DF]/20 backdrop-blur-[2px] rounded-l-[35px] flex justify-center bottom-[20%] right-[100%]">
                <div className="flex gap-14 items-center">
                  <div>
                    <p className="text-2xl pb-5">APOCALYSE</p>
                    <p>
                      lorem ipsum dolor sit <br /> amet concectet.
                    </p>
                  </div>
                  <PlayCircleIcon className="text-white w-20 h-20" />
                </div>
              </div>

              <Bars3Icon className="text-white w-10 h-10" />

              <div className="flex flex-col gap-7">
                <svg
                  width="21"
                  height="39"
                  viewBox="0 0 21 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4809 38.5137V20.9458H19.3773L20.2612 14.1H13.4829V9.72877C13.4829 7.74533 14.0317 6.39544 16.874 6.39544L20.5 6.39351V0.269884C18.7455 0.0841903 16.9822 -0.00580775 15.2179 0.000290233C9.9897 0.000290233 6.4118 3.19112 6.4118 9.05094V14.1H0.5V20.9458H6.4118V38.5137H13.4809Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="35"
                  height="26"
                  viewBox="0 0 35 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6127 0.51368H17.8074C19.6056 0.520242 28.7171 0.585872 31.1738 1.24654C31.9165 1.44817 32.5933 1.84119 33.1365 2.38631C33.6797 2.93144 34.0703 3.60959 34.2693 4.35298C34.4903 5.18428 34.6456 6.28467 34.7506 7.42005L34.7725 7.64756L34.8206 8.21635L34.8381 8.44386C34.9803 10.4434 34.9978 12.316 35 12.7251V12.8891C34.9978 13.3135 34.9781 15.313 34.8206 17.3957L34.8031 17.6254L34.7834 17.8529C34.674 19.1042 34.5122 20.3468 34.2693 21.2612C34.0709 22.0049 33.6805 22.6834 33.1372 23.2286C32.5939 23.7738 31.9168 24.1666 31.1738 24.3677C28.6362 25.0502 18.9909 25.0983 17.6542 25.1005H17.3436C16.6676 25.1005 13.8718 25.0874 10.9404 24.9868L10.5685 24.9736L10.3781 24.9649L10.0041 24.9496L9.62998 24.9343C7.2017 24.8271 4.88937 24.6543 3.82399 24.3655C3.08126 24.1646 2.40436 23.7722 1.86108 23.2273C1.3178 22.6825 0.927223 22.0045 0.728483 21.2612C0.485655 20.349 0.32377 19.1042 0.214388 17.8529L0.196887 17.6232L0.179386 17.3957C0.0714211 15.9133 0.0115942 14.4279 0 12.9416L0 12.6726C0.00437527 12.2022 0.0218764 10.5768 0.140009 8.78295L0.155322 8.55762L0.161885 8.44386L0.179386 8.21635L0.227514 7.64756L0.249391 7.42005C0.354397 6.28467 0.509719 5.1821 0.730671 4.35298C0.929075 3.60929 1.3195 2.93082 1.8628 2.3856C2.4061 1.84038 3.08319 1.44756 3.82618 1.24654C4.89156 0.962145 7.20389 0.787134 9.63216 0.677752L10.0041 0.662439L10.3803 0.649313L10.5685 0.64275L10.9426 0.627437C13.0246 0.56044 15.1074 0.523246 17.1905 0.515867H17.6127V0.51368ZM14.0009 7.53599V18.076L23.0949 12.8082L14.0009 7.53599Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="35"
                  height="29"
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9944 28.5395C24.2025 28.5395 31.4278 17.5955 31.4278 8.12142C31.4278 7.81517 31.4278 7.50454 31.4147 7.19829C32.8214 6.17998 34.0354 4.91925 35 3.47517C33.686 4.05453 32.2935 4.43637 30.8678 4.60829C32.3696 3.71062 33.4944 2.29822 34.0331 0.633604C32.6222 1.4695 31.0778 2.0563 29.4678 2.36829C28.3854 1.21553 26.9531 0.451861 25.3927 0.195573C23.8323 -0.0607148 22.231 0.204682 20.8367 0.950654C19.4424 1.69663 18.333 2.88154 17.6804 4.32186C17.0277 5.76218 16.8682 7.37752 17.2266 8.91767C14.3713 8.7745 11.578 8.03275 9.02791 6.74054C6.47778 5.44833 4.22775 3.63451 2.42375 1.41673C1.50793 2.99847 1.22844 4.86948 1.64204 6.64981C2.05563 8.43014 3.13131 9.98632 4.65062 11.0024C3.51212 10.9637 2.39864 10.658 1.4 10.1099V10.2083C1.40196 11.8653 1.97598 13.4708 3.02504 14.7534C4.07409 16.036 5.53382 16.9171 7.1575 17.2477C6.5412 17.4174 5.90456 17.5021 5.26531 17.4992C4.81465 17.5006 4.36489 17.4588 3.92219 17.3745C4.3811 18.8009 5.27466 20.048 6.47773 20.9412C7.68079 21.8344 9.13311 22.3289 10.6313 22.3555C8.08622 24.3544 4.94244 25.4386 1.70625 25.4333C1.13601 25.4357 0.566176 25.4028 0 25.3349C3.28456 27.4289 7.09909 28.5407 10.9944 28.5395Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="hi im a phantom"></div>
            </div>
          </div>
          <div className="cursor"></div>
        </>
      )}
    </>
  );
}
