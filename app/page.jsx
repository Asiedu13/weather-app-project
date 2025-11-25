import Link from "next/link";
import { Prompter } from "./components/PushNotificationManager";
export default function Page () {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <header>
        <h2>Weather App v.0.1.0</h2>
      </header>

      <h2 className="text-3xl w-3/4 text-center lg:w-fit lg:text-left">Enable Location on your device</h2>
      <span className="iconify tabler--location text-[150px] opacity-40 absolute top-20 lg:top-20 .animate-spin animate-bounce "></span>
      <span className="iconify tabler--current-location text-[150px] opacity-20 absolute bottom-20 lg:bottom-10 left-10 animate-spin "></span>
      <span className="iconify fluent--weather-rain-snow-20-regular text-[250px] opacity-20 absolute bottom-60 -right-20 lg:right-20 lg:bottom-60 "></span>
      <Link href="/weapp">
        <span className="bg-white text-primary p-3 rounded-md w-2/6 text-center mt-2 flex gap-2 items-center lg:w-fit lg:px-10">Next <span className="iconify solar--arrow-right-line-duotone text-lg relative"></span> </span>
      </Link>

      {/* <Prompter /> */}
    </main>
  );
};

