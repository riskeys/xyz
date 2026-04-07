"use client"

import LandingCommand from "@/components/landing/command";
import { useTitle } from "@/context/title.provide";
import { PowerGlitch } from "powerglitch";
import { useEffect } from "react";

export default function Home() {
  const { setTitle } = useTitle();


  useEffect(() => {
    setTitle("riskeys.xyz - home");
  }, [setTitle])

  useEffect(() => {
    const element = document.getElementsByClassName("glitch");
    if (element) PowerGlitch.glitch(".glitch", {
      timing: {
        duration: 1200,
        // iterations: 50,
      }
    });
  }, [])

  return (
    <div id="content" className="transition-opacity duration-500 ease-in-out text-white w-full md:w-3/4 mx-auto items-center justify-center flex flex-col my-48 md:my-32 font-mono gap-2">
      <div className="glitch text-lg font-semibold pb-8">
        riskeys.xyz
      </div>
      <div className="text-sm">
        version 3.14.26-dev
      </div>
      <div className="text-sm md:text-base text-center">
        <div className="hidden md:flex md:flex-row">
          by Rizcky a.k.a riskeys, a software/web developer
        </div>
        <div className="md:hidden flex flex-col">
          <div>
            by Rizcky a.k.a riskeys
          </div>
          <div>
            a software/web developer
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base">
        mail: rizcky.rakhman@gmail.com
      </div>
      <div className="hidden text-base flex-row justify-between w-3/4">
        <div className="basis-1/8">type</div>
        <div className="basis-3/10">:q&lt;Enter&gt;</div>
        <div className="basis-1/5 "></div>
        <div className="basis-3/8">to exit</div>
      </div>
      <div className="vim-only text-sm md:text-base my-5">
        press g to open navigation menu
      </div>
      <LandingCommand />
      <div className="vim-only text-sm my-5">
        * if you use Vimium/Surfingkey or similar extension, please disable it first :)
      </div>
      <div className="touch-only text-[0.65rem] md:text-[0.8rem] font-semibold md:font-normal italic text-white dark:text-white pt-10 md:pt-24">
        * if you happen to open this site in mobile/tablet, you might want to try to open the site in desktop mode for more vim-like experience :)
      </div>
    </div>
  );
}
