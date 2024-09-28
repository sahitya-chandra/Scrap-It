import Landing from "@/components/ui/Landing";
import SearchPage from "./search/page";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Landing />
      <SearchPage />
    </div>
  );
}
