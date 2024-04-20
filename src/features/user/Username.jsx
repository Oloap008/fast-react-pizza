import { useSelector } from "react-redux";
import { selectUsername } from "./userSlice";

function Username() {
  const username = useSelector(selectUsername);

  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
}

export default Username;
