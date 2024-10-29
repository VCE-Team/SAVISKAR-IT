import ShimmerButton from "./ShimmerButton";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm hover:text-opacity-80 font-medium leading-none tracking-tight  text-white dark:from-white dark:to-slate-900/10 py-1">
          Join Now
        </span>
      </ShimmerButton>
    </div>
  );
}