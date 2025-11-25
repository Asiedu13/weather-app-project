import { HistoryHome } from "../components/UserHistory/HistoryHome";

export const metadata = {
  title: "Weather App | History",
  description:
    "History of user's various location weather events and happenings",
};

export default function Page() {
  return (
    <main className="w-screen ">
      <HistoryHome />
    </main>
  );
}
