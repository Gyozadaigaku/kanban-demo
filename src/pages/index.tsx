import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Layout from "../components/Layout";
import Image from "next/image";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <div className="flex h-screen flex-col p-10">
        <div className="flex flex-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
            <ChevronDownIcon
              className="ml-5 h-9 w-9 rounded-full
            bg-white p-1 text-gray-500 shadow-xl"
            />
          </div>

          <ul className="flex space-x-3">
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                width="36"
                height="36"
                style={{ objectFit: "cover" }}
                className=" rounded-full "
                alt={"men 75"}
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/76.jpg"
                width="36"
                height="36"
                style={{ objectFit: "cover" }}
                className=" rounded-full "
                alt={"men 76"}
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/78.jpg"
                width="36"
                height="36"
                style={{ objectFit: "cover" }}
                className=" rounded-full "
                alt={"men 78"}
              />
            </li>
            <li>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed
                border-gray-500"
              >
                <PlusIcon className="h-5 w-5 text-gray-500" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
