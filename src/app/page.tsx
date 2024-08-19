import Link from "next/link";

const mockUrls: string[] = [
  "https://imgs.xkcd.com/comics/nerd_sniping.png",
  "https://imgs.xkcd.com/comics/map_age_guide.png",
  "https://imgs.xkcd.com/comics/xkcde.png",
  "https://imgs.xkcd.com/comics/brain_worms.png",
  "https://imgs.xkcd.com/comics/mispronouncing.png",
];
const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      In case this deploys on Vercel with a bunch of black and white comics that
      totally rock, and you see this. All credit goes to XKCD.
      <Link href="https://c.xkcd.com/random/comic/" target="_blank">
        Visit XKCD for a random kickass comic
      </Link>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
