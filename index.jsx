
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-pink-600 to-purple-800 text-white min-h-screen p-4">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src="/hero-video-placeholder.jpg"
          alt="Antonio dancing"
          className="object-cover w-full h-full absolute top-0 left-0 opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
            Antonio Sardella
          </h1>
          <p className="text-xl md:text-2xl italic mb-6">
            The Movement. The Moment. The Magic.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="text-lg">Book Me</Button>
            <Button className="text-lg" variant="secondary">
              Watch My Reel
            </Button>
            <Button className="text-lg" variant="outline">
              Instagram
            </Button>
          </div>
        </div>
      </div>

      {/* What I Do */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-8 text-yellow-300">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-4xl">💃</div>
            <p className="mt-2 font-semibold">Performer</p>
          </div>
          <div>
            <div className="text-4xl">🎬</div>
            <p className="mt-2 font-semibold">Choreographer</p>
          </div>
          <div>
            <div className="text-4xl">🌐</div>
            <p className="mt-2 font-semibold">Ballroom Specialist</p>
          </div>
          <div>
            <div className="text-4xl">🎤</div>
            <p className="mt-2 font-semibold">Creative Director</p>
          </div>
        </div>
      </section>

      {/* Reel & Testimonials */}
      <section className="bg-blue-900 py-12 px-4 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-pink-400">What People Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-1 flex flex-col items-center">
            <img
              src="/reel-preview.jpg"
              alt="Video preview"
              className="rounded-xl w-full max-w-sm mb-4"
            />
            <Button className="text-lg flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Watch Reel
            </Button>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-yellow-400 text-black">
              <CardContent className="p-4 font-medium">
                Antonio doesn’t just perform — he transforms the space.
              </CardContent>
            </Card>
            <Card className="bg-pink-400 text-black">
              <CardContent className="p-4 font-medium">
                Working with Antonio was electric from start to finish.
              </CardContent>
            </Card>
            <Card className="bg-orange-400 text-black">
              <CardContent className="p-4 font-medium">
                His choreography brings soul, story, and style — every single time.
              </CardContent>
            </Card>
            <Card className="bg-green-400 text-black">
              <CardContent className="p-4 font-medium">
                A visionary. A powerhouse. An absolute joy to work with.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
