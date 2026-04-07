"use client"
import { useTitle } from "@/context/title.provide";
import { useEffect } from "react";

export default function Home() {

  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("riskeys.xyz - about");
  }, [setTitle])
  return (
    <>
      <div className="vim-only">
        <div className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col py-12 font-mono gap-2">
          <div className="text-xl font-semibold pb-4">
            about this website...
          </div>
          <div className="text-sm leading-6 md:text-md/loose w-full text-justify md:w-4/5 mx-auto pt-2 md:pt-8">
            <p className="my-4 md:my-2">
              this website is built with Next.js and TailwindCSS.</p>
            <p className="my-4 md:my-2">
              I was thinking of building it with htmx (still with js backend LOL) (deno btw). However, I want to build something with Next.js just because I have never built anything with it (backend dev, doh) (that's also why this looks so lame...).</p>
            <p className="my-4 md:my-2">
              If you happen to open this site in mobile/tablet, I'd suggest you try to open the site using your laptop or pc as well, because I am building this site with the intention for people to feel the vim-like experience.
            </p>
            <p className="my-4 md:my-2">
              I don't know why I am building it that way. I suppose I am sort of a obsessed with vim, and want people to try to feel it too lol. I mean, I have been using the Vimium extension on Chrome/Edge (and Surfingkeys on Firefox, it's actually better) and it is actually handy that you can navigate in browser with your keyboard. I think you should try it as well, but for this website you might have to disable it because the keybindings will be overlapping lol.
            </p>
            <p className="my-4 md:my-2">
              anyway, thanks for visiting :)
            </p>
          </div>
        </div>

      </div>
      <div className="touch-only">
        <div className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col py-12 font-mono gap-2">
          <div className="text-xl font-semibold pb-4">
            about this website...
          </div>
          <div className="text-sm leading-6 md:text-lg/loose w-full text-justify md:w-4/5 mx-auto pt-2 md:pt-8">
            <p className="my-4 md:my-2">
              this website is built with Next.js and TailwindCSS.</p>
            <p className="my-4 md:my-2">
              I was thinking of building it with htmx (still with js backend LOL) (deno btw). However, I want to build something with Next.js just because I have never built anything with it (backend dev, doh) (that's also why this looks so lame...).</p>
            <p className="my-4 md:my-2">
              If you happen to open this site in mobile/tablet, I'd suggest you try to open the site using your laptop or pc as well, because I am building this site with the intention for people to feel the vim-like experience.
            </p>
            <p className="my-4 md:my-2">
              I don't know why I am building it that way. I suppose I am sort of a obsessed with vim, and want people to try to feel it too lol. I mean, I have been using the Vimium extension on Chrome/Edge (and Surfingkeys on Firefox, it's actually better) and it is actually handy that you can navigate in browser with your keyboard. I think you should try it as well, but for this website you might have to disable it because the keybindings will be overlapping lol.
            </p>
            <p className="my-4 md:my-2">
              anyway, thanks for visiting :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
