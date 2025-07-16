import { Button } from "../../components/ui/button";

const FancyButton = () => {
  return (
    <div className="relative group w-[200px] h-[50px]">
      <Button
        variant="outline"
        className="relative z-10 w-full h-full rounded-full font-extrabold tracking-wider overflow-hidden border-2 border-zinc-800 text-zinc-800 bg-transparent transition-all duration-300 group-hover:text-white group-hover:border-transparent"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore
          <span className="text-xl opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[2px]">
            ↗
          </span>
        </span>
      </Button>

      <span className="absolute inset-0 z-0 rounded-full bg-zinc-800 scale-0 group-hover:scale-[3] transition-transform duration-500 ease-in-out origin-center" />
    </div>
  );
};

export default FancyButton;
