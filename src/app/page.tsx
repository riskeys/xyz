export default function Home() {
  return (
    // <div id="container" className="h-[100vh] m-0 p-10 bg-zinc-50 font-sans dark:bg-black">
    <div id="container" className="h-[100vh] m-0 p-10 bg-black font-sans dark:bg-black">
      <div id="mainframe" className="bg-gray-900/90 border-2 border-blue-900 pb-10 w-full h-full rounded-t-2xl">
        <div id="titlebar" className="flex flex-row justify-center items-start bg-blue-900 rounded-t-xl text-white py-1">
          <span>riskeys.xyz - home</span>
        </div>
        <div id="content" className="text-white w-1/2 mx-auto items-center justify-center flex flex-col my-32 font-mono gap-2">
          <div className="text-lg font-semibold pb-8">
            riskeys.xyz
          </div>
          <div className="text-base">
            version 3.07.94-dev
          </div>
          <div className="text-base">
            by Rizcky a.k.a riskeys, a software/web developer
          </div>
          <div className="text-base">
            mail: rizcky.rakhman@gmail.com
          </div>
          <div className="text-base">
            Design inspired by personal computer setup: i3-wm, Vim
          </div>
          <div className="hidden border-test text-base flex-row justify-between w-3/4">
            <div className="basis-1/8">type</div>
            <div className="basis-3/10">:q&lt;Enter&gt;</div>
            <div className="basis-1/5 "></div>
            <div className="basis-3/8">to exit</div>
          </div>
          <div className="text-base flex flex-row justify-between w-2/3 mt-10">
            <div className="basis-1/8">type</div>
            <div className="basis-3/10">:Blog&lt;Enter&gt;</div>
            <div className="basis-1/5 ">or press b</div>
            <div className="basis-3/8">to redirect to blog</div>
          </div>
          <div className="text-base flex flex-row justify-between w-2/3">
            <div className="basis-1/8">type</div>
            <div className="basis-3/10">:Profile&lt;Enter&gt;</div>
            <div className="basis-1/5 ">or press p</div>
            <div className="basis-3/8">to open profile page</div>
          </div>
          <div className="text-base flex flex-row justify-between w-2/3">
            <div className="basis-1/8">type</div>
            <div className="basis-3/10">:TechStack&lt;Enter&gt;</div>
            <div className="basis-1/5 ">or press t</div>
            <div className="basis-3/8">to open tech stack info</div>
          </div>
        </div>
      </div>
    </div>
  );
}
