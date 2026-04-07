"use client"

import { useTitle } from "@/context/title.provide";
import { use, useEffect } from "react";

export default function BlogPost({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(`riskeys.xyz - blog - ${slug}`);
  }, [setTitle])

  return (
    // <div id="container" className="h-[100vh] m-0 p-10 bg-zinc-50 font-sans dark:bg-black">
    <div id="content" className=" transition-opacity duration-500 ease-in-out text-white mx-auto flex flex-col my-4 font-mono gap-2">
      <div id="content-nav" className="w-9/10">
        <div className="touch-only">
          <div className="text-xs md:text-sm top-10 left-10 absolute">
            back to blog
          </div>
        </div >
        <div className="vim-only">
          <div className="text-right">
            press `gb` to go back to blog
          </div>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col mt-10">
        <div className=" text-lg font-semibold">
          {slug}
        </div>
        <div className=" text-sm font-semibold">
          by: riskeys
        </div>
        <div className=" text-sm font-semibold">
          first written on 1 April 2026
        </div>
        <div className="text-sm w-full text-justify md:w-3/4 lg:w-4/5 mx-auto py-4">
          <p className="my-8 leading-6">
            Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="my-8 leading-6">
            Content here. Lo leading-6rem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="my-8 leading-6">
            Content here. Lo leading-6rem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="my-8 leading-6">
            Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>
    </div>
  );
}


