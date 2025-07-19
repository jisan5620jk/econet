import CircleProgressBar from "./CircleProgress";


const ProgressSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center">
        <CircleProgressBar percentage={85} label="Education Goal" color="text-blue-500" />
        <CircleProgressBar percentage={70} label="Medical Fund" color="text-red-500" />
        <CircleProgressBar percentage={95} label="Food Supplies" color="text-emerald-500" />
      </div>
    </section>
  );
};

export default ProgressSection;
