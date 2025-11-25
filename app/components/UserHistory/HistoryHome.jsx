"use client";
import { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import Link from "next/link";
import HistoryCard from "./historyCard";
import Loading from "../../loading";

export function HistoryHome() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(
      localStorage.weatherHistory !== undefined
        ? JSON.parse(localStorage.getItem("weatherHistory"))
        : []
    );
  }, []);

  return (
    <section data-testid="historyHomeParent" className="flex justify-center">
      <Head>
        <title>History | Weather App</title>
      </Head>
      <main className="w-screen h-screen flex flex-row justify-center items-center p-4 ">
        <section className="w-[fit-content] h-1/2">
          <header className=" flex flex-row items-center">
            <h1 className="text-3xl lg:w-[500px] pb-10">My Weather History</h1>
            <Link href="/weapp">
              <button data-testid="homeBtn" className="bg-green-500 hover:bg-green-400 rounded-md  p-2 mb-10">
                Home
              </button>
            </Link>
          </header>

          <section className="lg:h-[360px] overflow-auto">
            <Suspense fallback={<Loading />}>
              {history.length > 0 ? (
                history.map((t) => {
                  return (
                    <HistoryCard data={t} key={Math.random() * Math.random()} />
                  );
                })
              ) : (
                <div>
                  <p className="text-[white]">Record events to see them here</p>
                </div>
              )}
            </Suspense>
          </section>
        </section>
      </main>
    </section>
  );
}
