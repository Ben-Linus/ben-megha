import Head from "next/head";
import dynamic from "next/dynamic";

// Import Countdown only on client to avoid hydration errors
const CountdownDisplay = dynamic(() => import("../components/CountdownDisplay"), {
  ssr: false,
});

export default function LavenderWedding() {
  const MARRIAGE_DATE = new Date("2026-05-25T10:00:00+05:30");

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Head>
        <title>Ben 💜 Megha — Wedding Invitation</title>
        <meta
          name="description"
          content="Join us in celebrating the wedding of Ben & Megha on May 25, 2026."
        />
      </Head>

      {/* Hero Section */}
      <header className="relative h-[70vh] flex flex-col items-center justify-center text-white bg-gradient-to-br from-purple-600 to-pink-500">
        <h1 className="text-4xl md:text-6xl font-bold">Ben & Megha</h1>
        <p className="mt-3 text-lg md:text-2xl">Are getting married!</p>

        <div className="mt-10">
          <CountdownDisplay targetDate={MARRIAGE_DATE} />
          <p className="mt-2 text-sm text-white/85">
            Countdown to: 25 May 2026 — Marriage
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-purple-700">Our Story</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          From the first moment we met, we knew our story was special. We’ve
          laughed, dreamed, and grown together — and now, we’re ready to take
          the next step on this journey. We can’t wait to celebrate this day
          with you!
        </p>
      </section>

      {/* Bride & Groom Section */}
      <section className="py-12 px-6 bg-purple-50">
        <h2 className="text-3xl font-semibold text-center text-purple-700">
          Meet the Couple
        </h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-center">
          <ProfileCard
            name="Ben"
            img="/groom.jpg"
            desc="A dreamer, a believer, and now a groom-to-be. Excited to start this new chapter with Megha."
          />
          <ProfileCard
            name="Megha"
            img="/bride.jpg"
            desc="Full of love, grace, and laughter. Looking forward to this beautiful journey with Ben."
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-purple-700">
          Wedding Events
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <EventCard
            title="Wedding Ceremony"
            date="25 May 2026, 10:00 AM"
            location="Sacred Heart Church, Coimbatore"
          />
          <EventCard
            title="Reception"
            date="25 May 2026, 6:00 PM"
            location="Grand Lotus Banquet Hall, Coimbatore"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6 bg-purple-50">
        <h2 className="text-3xl font-semibold text-center text-purple-700">
          Memories Together
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/photo1.jpg" className="rounded-lg shadow" alt="memory1" />
          <img src="/photo2.jpg" className="rounded-lg shadow" alt="memory2" />
          <img src="/photo3.jpg" className="rounded-lg shadow" alt="memory3" />
          <img src="/photo4.jpg" className="rounded-lg shadow" alt="memory4" />
          <img src="/photo5.jpg" className="rounded-lg shadow" alt="memory5" />
          <img src="/photo6.jpg" className="rounded-lg shadow" alt="memory6" />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-purple-700">Join Us</h2>
        <p className="mt-4 text-gray-600">
          We would be honored with your presence on our special day. Please find
          the venue details below.
        </p>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <p>Made with 💜 by Ben & Megha</p>
      </footer>
    </div>
  );
}

function ProfileCard({ name, img, desc }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-72">
      <img
        src={img}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-purple-700">{name}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function EventCard({ title, date, location }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
      <p className="mt-2 text-gray-600">{date}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
}