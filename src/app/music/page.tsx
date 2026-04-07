export default function Music() {
  return (
    <div id="content" className="transition-opacity duration-500 ease-in-out text-white mx-auto items-center justify-center flex flex-col my-4 font-mono gap-2">
      <div className="text-lg font-semibold pb-4">
        my web of sound
      </div>

      <div className="text-sm w-full text-justify md:w-1/2 mx-auto">
        <p className="my-2">ok so this page is not working quite the desired way for now</p>
        <p className="my-2">i actually want to share some doodle music in here (i play some ez accoustic guitar thing). anyway, i haven't made any tunes recently so why bother building the player when i don't even have that much time lol...</p>
        <p className="my-2">so for now, i'll just put my band's music from spotify (yea i used to be in a band, now it sort of hibernates indefinitely). check it out! hope you'll like it :)</p>
        <p className="vim-only mt-12 italic">press o to see the playlist</p>
      </div>
      <hr className="w-full md:w-1/2 mx-auto my-6 border-gray-400" />
      <iframe id="iframe-touch" className="touch-only rounded-4xl" src="https://open.spotify.com/embed/artist/7Fc3ZYvTKES9TZlWvktNqI?utm_source=generator&theme=0"
        width="50%" height="680"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe id="iframe-vim" className="opacity-0 hidden rounded-4xl transition-opacity duration-1000" src="https://open.spotify.com/embed/artist/7Fc3ZYvTKES9TZlWvktNqI?utm_source=generator&theme=0"
        width="50%" height="680"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}
