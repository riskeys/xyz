"use client"

import { useTitle } from "@/context/title.provide";
import { use, useEffect } from "react";

export default function FlailBlogPost({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(`riskeys.xyz - blog - ${slug}`);
  }, [setTitle])

  return (
    <div id="content" className=" transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col my-4 font-mono gap-2 w-full md:w-3/4 lg:w-4/5">
      <div className=" text-lg font-semibold">
        nav here nav here maybe
      </div>
      <div className=" text-lg font-semibold">
        {slug}
      </div>
      <div className=" text-sm font-semibold">
        by: riskeyszzz
      </div>
      <div className=" text-sm font-semibold">
        first written on 1 April 2026
      </div>
      <div className="text-sm md:text-lg/relaxed text-justify mx-auto py-4">
        <p className="my-8">
          Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="my-8">
          Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="my-8">
          Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="my-8">
          Content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}


