import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  return (
    <div className="my-8 text-center sm:my-10">
      <h1 className=" mb-4 text-base font-semibold text-stone-900 sm:mb-8 sm:text-xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
