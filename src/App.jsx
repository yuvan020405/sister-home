import sister from "./assets/sister.jpg";
import couple1 from "./assets/couple1.jpg";
import couple2 from "./assets/couple2.jpg";
import couple3 from "./assets/couple3.jpg";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl">

          <img
            src={sister}
            alt="Couple"
            className="w-52 h-52 rounded-full object-cover mx-auto border-4 border-white shadow-2xl"
          />

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Welcome To Your
            <span className="text-rose-400"> Dream Home 🏡</span>
          </h1>

          <h2 className="text-3xl md:text-4xl mt-6 text-orange-300 font-semibold">
            Swathi ❤️ Siva
          </h2>

          <p className="mt-8 text-lg md:text-2xl leading-9 text-gray-200">
            Wishing both of you a lifetime filled with love,
            peace, happiness, laughter, and beautiful memories
            in your new beginning ✨
          </p>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-5xl font-bold text-center mb-16 text-rose-400">
          Beautiful Memories ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={couple1}
              className="h-96 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={couple2}
              className="h-96 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={couple3}
              className="h-96 w-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

        </div>
      </section>

      {/* WISHES SECTION */}
      <section className="py-24 px-6 bg-black">

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-12 shadow-2xl text-center">

          <h2 className="text-5xl font-bold text-orange-300 mb-10">
            My Wishes For You Both 💌
          </h2>

          <p className="text-xl leading-10 text-gray-200">
            May this beautiful home always be filled with
            positivity, peace, endless laughter, and unforgettable moments.
            Wishing both of you success, happiness, and a wonderful journey ahead ❤️
          </p>

          <div className="mt-10 text-3xl font-semibold text-rose-400">
            Congratulations On Your New Beginning ✨🏠
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 bg-black">
        Made with ❤️ specially for Swathi & Siva
      </footer>

    </div>
  );
}