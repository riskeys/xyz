"use client"
import { useTitle } from "@/context/title.provide";
import Link from "next/link";
import { useEffect } from "react";

export default function Profile() {

  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("riskeys.xyz - about");
  }, [setTitle])
  return (
    <>
      <div className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col py-12 font-mono gap-2">

        <div id="content-nav" className="w-8/10 mx-auto text-right ">
          <div className="touch-only mb-4">
            <div className="text-xs md:text-sm top-10 left-10 absolute">
              <Link href="/">&lt;- home</Link>
            </div>
          </div >
          <div className="vim-only">
            <div className="text-right">
              press `g` to open navigation menu
            </div>
          </div>
        </div>

        <div className="text-xl font-semibold pb-4">
          some bits about me...
        </div>
        <div className="text-sm leading-6 md:text-md/loose w-full text-justify md:w-4/5 mx-auto pt-2 md:pt-8 lowercase">
          <p className="my-6 md:my-2 lg:my-8">
            My name is Rizcky. On the internet, I mainly use `riskeys` as my username. I am from Indonesia.
          </p>
          <p className="my-4 md:my-2 lg:my-8">
            I work as a software/web developer, currenly at an IT company called Xtremax. I start out by working in .NET environment, you know, the likes of .NET Framework/Core, SQL Server, Azure DevOps, and other Microsoft things. However, I have been working with JavaScript/TypeScript for a while now. I have been using Deno as my main JS runtime, actually it's very friendly for someone like who's transitioning from OOP language such as .NET or Java, but I am also familiar with the more common Node.js runtime. I have worked with Python and Go as well, but nowadays I prefer JavaScript/TypeScript for backend development.
          </p>
          <p className="my-4 md:my-2 lg:my-8">
            Back then I was kind of a math person (got a math degree myself). Nowadays, I am kind of a nothing person. I work as a programmer, but actually I'm not really into computer as much as geeks and nerds out there, nor I'm just doing it for the money only. I suppose I am sort of a niche person, liking bits of things here and there. Like, I do with music and gaming and books and movies and sports (basketball and table tennis FTW). I don't like cars and automobile things. Not into traveling that much. Definitely not into big parties. Sometimes into people, sometimes not. At this point, I'm just flailing my way through life...
          </p>
          <p className="my-4 md:my-2 lg:my-8">
            you can reach me out at <a className="text-blue-500 hover:underline" href="mailto:rizcky.rakhman@gmail.com">rizcky.rakhman@gmail.com</a>, or through some popular social media, my tag/username is usually `riskeys`. <span className="italic">not sure why you would want to, though...</span>
          </p>
          <p className="my-4 md:my-2 lg:my-8">
            anyway, thanks for visiting :)
          </p>
        </div>
      </div>


    </>
  );
}
