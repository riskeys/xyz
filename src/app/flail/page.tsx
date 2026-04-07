"use client"

import PostItem from "@/components/blog/post.item"
import { useTitle } from "@/context/title.provide";
import { useEffect } from "react";

export default function Flail() {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("mind-flail...");
  }, [setTitle])

  return (
    <div id="content" className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col my-4 font-mono gap-2 w-full md:w-3/4 lg:w-1/2">
      <div className="text-lg font-semibold pb-4">
        mind-flailing
      </div>
      <div className="text-sm text-justify mx-auto">
        <p className="my-2">you found this page</p>
        <p className="my-2 touch-only">means you might be someone who knows me from the past...</p>
        <p className="my-2 touch-only">means you know there's nothing worth reading here...</p>
        <p className="my-2 touch-only">anyway, here is where you can see my mind flailing :)</p>
        <p className="my-2 vim-only">means you might be someone who knows me from the past...</p>
        <p className="my-2 vim-only">means you know there's nothing worth reading here...</p>
        <p className="my-2 vim-only">anyway, here is where you might see my mind flailing :)</p>

      </div>
      <hr className="w-full md:w-3/4 lg:w-1/2 mx-auto my-6 border-gray-400" />
      <div className="mx-auto md:mt-20">
        <h2 className="text-xl mb-6">posts</h2>
      </div>
    </div>
  );
}
