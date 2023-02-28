import Personal from "./components/Personal";
import Stepper from "./components/stepper/Stepper";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex w-8/12 md:inline-flex h-3/5 bg-white rounded-xl p-4">
        <Stepper />
        <Personal />
      </div>
    </div>
  );
}
