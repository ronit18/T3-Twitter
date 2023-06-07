import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Button gray className="flex items-center gap-3">
            <AiFillHome size={18} />
            <Link href="/">Home</Link>
          </Button>
        </li>
        {user != null && (
          <li>
            <Button gray className="flex items-center gap-3">
              <CgProfile size={18} />
              <Link href={`/profiles/${user.id}`}>Profile</Link>
            </Button>
          </li>
        )}
        {user == null ? (
          <li>
            <button
              className="flex items-center gap-3"
              onClick={() => void signIn()}
            >
              <BiLogInCircle size={18} />
              Log In
            </button>
          </li>
        ) : (
          <li>
            <button
              className="flex items-center gap-3"
              onClick={() => void signOut()}
            >
              <BiLogOutCircle size={18} />
              Log Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
