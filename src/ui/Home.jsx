import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";

import Button from "./Button";
import { selectUsername } from "../features/user/userSlice";

function Home() {
  const username = useSelector(selectUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="md:text  3xl mb-8 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
