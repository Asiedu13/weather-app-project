"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, Suspense } from "react";
import LoaderComponent from "../components/Loaders/main";
import { saveWeather } from "../utils/functions";
import OneSignal from "react-onesignal";

export default function Page () {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            OneSignal.init({
                appId: process.env.NEXT_PUBLIC_ONESIGNAL_APPID,
                notificationButton: {
                    enable: true
                }
            })
        }
    }, []);
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("geo works")
    }
    async function getCoords() {
      navigator.geolocation.getCurrentPosition((position) => {
            let data = getWeatherInfo(position.coords.longitude,  position.coords.latitude);
            console.log(data)
          }, (positionError) => setError('Error'))
        }

    async function getWeatherInfo(lng, lat) {
      const URL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lng}`;
      const options = {
        method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_rapidAPIKey,
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(URL, options);
        const result = await response.json();
        setLocationData(result)

      } catch(error) {

      }
    }

    getCoords()
  }, []);

  if (!locationData) {
    return (
      <LoaderComponent />
    )
  }
  
  return (
    <>
      <main className="w-screen h-screen flex flex-row justify-center items-center p-4 ">
        {/* Location and Date */}
        {/* <Suspense>

        </Suspense> */}
        <section className="w-[fit-content] h-1/2">
          <section className="py-4">
            <h1 className="text-7xl font-bold pb-5 ">
              {/* {coords?.latitude} */}
              {locationData?.location?.name}, {locationData?.location?.country}
            </h1>
            <p>{locationData.location.localtime}</p>
          </section>

          {/* Temperature reading and cloud adjust */}
          <section className="flex flex-row justify-between items-center ">
            <div className="">
              <span className="text-3xl font-semibold">
                {locationData.current.feelslike_c}
              </span>{" "}
              <sup>&deg;C</sup>
              <p className="text-blue-400 uppercase">
                {locationData.current.condition.text}
              </p>
            </div>
            {/* Clouds */}
            <div>
              <Image
                src={`https:${locationData.current.condition.icon}`}
                alt="clouds"
                width={100}
                height={100}
              />
            </div>
          </section>
          {/* Buttons */}
          <section className="flex justify-between items-center pt-3">
            <button
              onClick={() =>
                saveWeather(
                  locationData.location.name,
                  locationData.location.country,
                  locationData.location.localtime,
                  locationData.current.feelslike_c,
                  locationData.current.condition.text
                )
              }
              className="w-[140px] h-[50px] rounded-lg bg-green-500 hover:bg-green-400"
            >
              Timestamp
            </button>
            <Link href="/history">
              <button className="w-[140px] h-[50px] rounded-lg bg-red-500 focus:bg-red-400 hover:bg-red-400">
                My History
              </button>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
};

