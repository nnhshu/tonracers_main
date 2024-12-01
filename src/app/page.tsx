"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import React from "react";
import CarItem from "./car";

export default function Home() {

  return (
    <>
      <div className="line_vertical fixed left-5 top-0 bottom-0 z-50"></div>
      <div className="line_vertical fixed right-5 top-0 bottom-0 z-50"></div>
      <header className="fixed w-full left-0 top-0 right-0 pt-6 z-50">
        <div className="line"></div>
        <div className="flex justify-between items-center py-2">
          <div className="container mx-auto px-4 md:px-0">
            <div className="flex justify-between items-center">
              <div className="logo">
                <Image
                  className="md:w-48 w-24"
                  src="/images/logo.png"
                  width={1507}
                  height={369}
                  alt=""
                />
              </div>
              <ul className="hidden md:flex md:flex-row flex-col md:items-center md:gap-10 gap-2">
                <li className="text-sm 1366:text-xs font-semibold text-black relative max-w-fit pr-3 md:pr-0">
                  <a
                    className="text-[--primary-color] flex items-center justify-between gap-1"
                    href={"#"}
                  >
                    Home
                  </a>
                </li>
                <li className="text-sm 1366:text-xs font-semibold text-black relative max-w-fit pr-3 md:pr-0">
                  <a
                    className="text-[--primary-color] flex items-center justify-between gap-1"
                    href={"#"}
                  >
                    About us
                  </a>
                </li>
                <li className="text-sm 1366:text-xs font-semibold text-black relative max-w-fit pr-3 md:pr-0">
                  <a
                    className="text-[--primary-color] flex items-center justify-between gap-1"
                    href={"#"}
                  >
                    Our collection
                    <Image
                      className="w-6 h-6 object-contain"
                      src="/images/icon_menu.png"
                      width={512}
                      height={512}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="px-2 md:px-6 py-2 text-xs uppercase border border-white text-white rounded-full transition-all hover:scale-110">
                  LOGIN
                </button>
                <button className="text-xs px-2 md:px-6 py-3 uppercase bg-[--primary-color] text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all hover:scale-110">
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </header>

      <section className="banner pt-44 pb-24 relative">
        <div className="banner-top p-9">
          <div className="flex gap-2 items-center justify-center mb-10">
            <div className="h-1 w-32 bg-white"></div>
            <span className="text-white">GAMEWORLD DISTRIBUTORS</span>
            <div className="h-1 w-32 bg-white"></div>
          </div>
          <h2 className="text-lg md:text-4xl text-center w-full md:w-3/4 mx-auto text-[--text-color] leading-normal">
            Connecting Players & Games in an Immersive environment in the Ton
            Blockchain.
          </h2>
        </div>
        <div className="banner-center md:translate-y-48 ">
          <Image
            className="mx-auto w-1/2 block md:hidden"
            src="/images/car_2.png"
            width={2048}
            height={1024}
            alt=""
          />
          <CarItem />
        </div>
        
        <div className="banner-bottom flex items-center justify-center my-10 md:my-0 md:justify-end md:absolute md:bottom-24 md:right-12">
          <button className="text-sm px-10 py-6 uppercase btn-gradient text-white rounded-full transition-all hover:scale-110">
            START NOW
          </button>
        </div>
      </section>

      <div className="line"></div>

      <section className="customers_logo md:py-14">
        <div className="customers_logo-content flex items-center">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              641: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_1.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_2.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_3.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_4.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_1.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-52 h-24 mx-auto"
                src="/images/logo/Polygon_2.svg"
                width={512}
                height={512}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <div className="line"></div>

      <section className="about-us pt-32 pb-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-5 md:mb-20">
            <Image
              className=""
              src="/images/about_us.svg"
              width={1024}
              height={400}
              alt=""
            />
          </div>
          <p className="text-[--text-color] block mx-auto md:w-1/2 px-4 md:px-0 text-sm md:text-base">
            Players use Tonracer as an in-game token, which has the value to
            purchase in-game items, specifically different types of car.
            Tonracer can be used as an in-game token, can also be used to
            purchase new cars. Depending on each cars type,it will yield a
            certain amount of Tonracer, this token is used for harvesting. It is
            a token guaranteed by the project to convert back to TON coin.
          </p>
          <div className='animationContainer md:w-1/2 mx-auto translate-y-32'>
            <div className="car car_1">
              <Image
                src="/images/car_tim.png"
                alt="Car 1"
                width={1348}
                height={307}
                className='carImage'
              />
            </div>
            <div className='car car_2'>
              <Image
                src="/images/car_do.png"
                alt="Car 2"
                width={1348}
                height={307}
                className='carImage'
              />
            </div>
          </div>
        </div>
      </section>
      <section className="gameplay-wrap py-20">
        <div className="mx-auto text-center">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-20">
              <Image
                className="w-full"
                src="/images/gameplay_1.svg"
                width={1460}
                height={400}
                alt=""
              />
            </div>
          </div>
          <div className="about-slide relative">
            <div className="about-navigation absolute left-0 right-0 top-1/2 z-50 -translate-y-1/2 w-full flex justify-between items-center px-4">
              <button className="prev">
                <Image
                  className="w-4 md:w-10"
                  src="/images/icon/icon_prev.png"
                  width={1460}
                  height={400}
                  alt=""
                />
              </button>
              <button className="next">
                <Image
                  className="w-4 md:w-10"
                  src="/images/icon/icon_next.png"
                  width={1460}
                  height={400}
                  alt=""
                />
              </button>
            </div>
            <div className="container mx-auto">
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  nextEl: ".about-navigation .next",
                  prevEl: ".about-navigation .prev",
                }}
                modules={[Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  641: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    className="w-full h-full"
                    src="/images/car/car1.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-full h-full"
                    src="/images/car/car2.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-full h-full"
                    src="/images/car/car3.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-full h-full"
                    src="/images/car/car4.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-full h-full"
                    src="/images/car/car5.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-52 h-24 mx-auto"
                    src="/images/car/car6.png"
                    width={512}
                    height={512}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="container mx-auto">
          <div className="px-4">
            <div className="flex gap-3 px-4 md:px-0">
              <div className="w-6 h-6 bg-[--text-color]"></div>
              <p className="text-[--text-color] text-left text-xs md:text-xl">
                {" "}
                Play With PVE: Players use Tonracer as an in-game token, which
                has the value to purchase in-game items, specifically
                different types of car. Tonracer
              </p>
            </div>
            <div className="flex gap-3 px-4 md:px-0 mt-6">
              <div className="w-6 h-6 bg-[--text-color]"></div>
              <p className="text-[--text-color] text-left text-xs md:text-xl">
                {" "}
                Play With PVP: Players use Tonracer as an in-game token, which
                has the value to purchase in-game items, specifically
                different types of car. Tonracer{" "}
              </p>
            </div>
            <div className="flex mt-10">
              <Link href={"#"}>
                <Image
                  className="w-52 transition-all hover:scale-110"
                  src="/images/icon/btn-learnmore.png"
                  width={512}
                  height={512}
                  alt=""
                />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="roadmap-wrap py-20 bg-black">
        <Image
          className="w-full mb-20"
          src="/images/roadmap_head.png"
          width={1920}
          height={200}
          alt=""
        />
        <div className="mx-auto text-center">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-20">
              <Image
                className="w-full"
                src="/images/roadmap_1.svg"
                width={1460}
                height={400}
                alt=""
              />
            </div>
          </div>
          <Image
            className="w-full"
            src="/images/roadmap_main.png"
            width={1920}
            height={5400}
            alt=""
          />
        </div>
      </section>
      <section className="token-wrap py-20 pb-52 bg-black">
        <div className="mx-auto text-center">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center mb-20">
              <Image
                className="w-full"
                src="/images/tokenomics.svg"
                width={1460}
                height={400}
                alt=""
              />
              <p className="text-[--subtitle-color] block mx-auto w-full text-sm md:text-base md:w-1/2 mt-6">
                1 Billion HRC tokens to be issued. Distribution will be in the
                following manner:
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col items-center gap-5 mt-10 md:mt-0">
            <Image
              className="w-1/2 md:w-full"
              src="/images/TRACER_TOKEN_2.svg"
              width={512}
              height={512}
              alt=""
            />
            <div className="line-token">
              <Image
                className="w-full"
                src="/images/line_1.svg"
                width={1024}
                height={90}
                alt=""
              />
              <p className="text-white block pl-4 md:pl-14 md:-translate-y-12">
                Players use Tonracer as an in-game token, which has the value to
                purchase in-game items, specifically different types of
                tokenomics Tonracer.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse items-center gap-5 mt-10 md:mt-0">
            <div className="line-token">
              <Image
                className="w-full"
                src="/images/line_2.svg"
                width={1024}
                height={90}
                alt=""
              />
              <p className="text-white block pr-4 md:pr-14 md:-translate-y-12 text-right">
                Players use Tonracer as an in-game token, which has the value to
                purchase in-game items, specifically different types of
                tokenomics Tonracer.
              </p>
            </div>
            <Image
              className="w-1/2 md:w-full"
              src="/images/TRACER_TOKEN 1.svg"
              width={512}
              height={512}
              alt=""
            />
          </div>
        </div>
      </section>
      <footer className="bg-black">
        <Image
          className="w-full"
          src="/images/bg_footer_1.svg"
          width={1920}
          height={200}
          alt=""
        />
        <div className="footer-main bg-[--bg-footer] pt-28 overflow-hidden">
          <div className="container mx-auto min-h-72 px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-11">
              <div className="col-span-4">
                <Image
                  className="w-full"
                  src="/images/logo.png"
                  width={1507}
                  height={369}
                  alt=""
                />
              </div>
              <div className="col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
                  <div className="col-span-1">
                    <ul>
                      <li className="mb-4 text-[--link-color]">About us</li>
                      <li className="mb-4 text-[--link-color]">
                        What is Ton Racer?{" "}
                      </li>
                      <li className="mb-4 text-[--link-color]">Game Play</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul>
                      <li className="mb-4 text-[--link-color]">About us</li>
                      <li className="mb-4 text-[--link-color]">
                        What is Ton Racer?{" "}
                      </li>
                      <li className="mb-4 text-[--link-color]">Game Play</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul>
                      <li className="mb-4 text-[--link-color]">About us</li>
                      <li className="mb-4 text-[--link-color]">
                        What is Ton Racer?{" "}
                      </li>
                      <li className="mb-4 text-[--link-color]">Game Play</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="w-full translate-y-24"
            src="/images/roadmap_head.png"
            width={1920}
            height={100}
            alt=""
          />
        </div>
      </footer>
    </>
  );
}
