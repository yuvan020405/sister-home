import sister from "./assets/sister.jpg";
import couple1 from "./assets/couple1.jpg";
import couple2 from "./assets/couple2.jpg";
import couple3 from "./assets/couple3.jpg";
import couple4 from "./assets/couple4.jpg";
import couple5 from "./assets/couple5.jpg";
import couple8 from "./assets/couple8.jpg";
import couple12 from "./assets/couple12.jpg";
import couple13 from "./assets/couple13.jpg";
import music from "./assets/music.mp3";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Confetti from "react-confetti";

export default function App() {

  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
const [scrollProgress, setScrollProgress] = useState(0);
const [currentSlide, setCurrentSlide] = useState(0);
const slides = [couple13, sister, couple5];
const toggleMusic = () => {

  if (isPlaying) {

    audioRef.current.pause();
    setIsPlaying(false);

  } else {

    audioRef.current.muted = false;
    audioRef.current.play();
    setIsPlaying(true);

  }

};

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  }, 3000);

  return () => clearInterval(interval);

}, []);

useEffect(() => {

  const handleScroll = () => {

    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scroll =
      (window.scrollY / totalHeight) * 100;

    setScrollProgress(scroll);

  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);

}, []);

useEffect(() => {

  const handleMouseMove = (e) => {

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };

}, []);
useEffect(() => {

  const playMusic = async () => {

    try {

      await audioRef.current.play();
      setIsPlaying(true);

    } catch (error) {

      console.log("Autoplay blocked");

    }

  };

  playMusic();

}, []);
const triggerConfetti = () => {

  setShowConfetti(true);

  setTimeout(() => {
    setShowConfetti(false);
  }, 3000);

};
  if (loading) {
  return (

  <div className="relative h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-white">

    {/* BACKGROUND GLOW */}
    <div className="absolute w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-3xl"></div>

    {/* FLOATING STARS */}
    <div className="absolute inset-0 overflow-hidden">

      {[...Array(50)].map((_, i) => (

        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />

      ))}

    </div>

    {/* MAIN CONTENT */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-10 text-center px-6"
    >

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent"
      >
        Swathi Akka ❤️ Siva Mams
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-lg md:text-2xl text-gray-300 tracking-wide"
      >
        Welcome To Your Dream Home ✨🏡
      </motion.p>

      {/* LOADING BAR */}
      <div className="mt-14 w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3 }}
          className="h-full bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500"
        />

      </div>

    </motion.div>

  </div>

);
}
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};
  return (

  <div
  className="relative bg-black text-white min-h-screen overflow-hidden selection:bg-rose-500 selection:text-white"
  onClick={triggerConfetti}
>
   <motion.div
    className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-orange-300 z-[9999]"
    style={{
      width: `${scrollProgress}%`,
    }}
  />
  {/* CUSTOM CURSOR */}
<motion.div
  className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-rose-400 pointer-events-none z-[9999]"
  animate={{
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
  }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 28,
  }}
/>
<motion.div
  className="fixed top-0 left-0 w-24 h-24 rounded-full bg-rose-400/20 blur-3xl pointer-events-none z-[9998]"
  animate={{
    x: mousePosition.x - 48,
    y: mousePosition.y - 48,
  }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
  }}
/>
{/* FLOATING HEARTS */}
{/* <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">

  {[...Array(20)].map((_, i) => (

    <motion.div
      key={i}
      initial={{
        y: "100vh",
        x: Math.random() * window.innerWidth,
        opacity: 0.2,
      }}
      animate={{
        y: "-10vh",
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 8 + Math.random() * 5,
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
      className="absolute text-rose-400"
      style={{
        left: `${Math.random() * 100}%`,
        fontSize: `${15 + Math.random() * 20}px`,
      }}
    >
      <FaHeart />
    </motion.div>

  ))}

</div> */}

{/* STARS BACKGROUND */}
<div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">

  {[...Array(80)].map((_, i) => (

    <div
      key={i}
      className="absolute bg-white rounded-full animate-pulse"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }}
    />

  ))}
</div>
{/* SHOOTING STARS */}
<div className="fixed inset-0 overflow-hidden pointer-events-none z-10">

  {[...Array(6)].map((_, i) => (

    <motion.div
      key={i}
      initial={{
        x: -200,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      }}
      animate={{
        x: window.innerWidth + 300,
        y: Math.random() * window.innerHeight,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 3,
        repeatDelay: 5,
      }}
      className="absolute w-40 h-[2px]"
      style={{
        background:
          "linear-gradient(to right, white, rgba(255,255,255,0))",
        transform: "rotate(-25deg)",
      }}
    />

  ))}

</div>
{/* MOUSE GLOW EFFECT */}
<div
  className="fixed pointer-events-none z-10 w-72 h-72 rounded-full blur-3xl opacity-40"
  style={{
    background:
      "radial-gradient(circle, rgba(255,0,128,0.8) 0%, transparent 70%)",
    left: mousePosition.x - 150,
    top: mousePosition.y - 150,
  }}
/>
      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
       className="fixed top-5 right-6 md:right-10 z-50 bg-black/30 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full shadow-2xl text-white hover:scale-105 hover:bg-white/20 transition duration-300"
      >
        {isPlaying ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>

      {/* AUDIO */}
    <audio ref={audioRef} loop muted>
  <source src={music} type="audio/mp3" />
</audio>
      {/* MUSIC VISUALIZER */}
{isPlaying && (

  <div className="fixed top-20 right-8 z-50 flex items-end gap-1 h-16">

    {[...Array(6)].map((_, i) => (

      <motion.div
        key={i}
        animate={{
          height: [
            10,
            40 + Math.random() * 40,
            15,
          ],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.1,
        }}
        className="w-2 rounded-full bg-gradient-to-t from-rose-400 to-orange-300"
      />

    ))}

  </div>

)}

{/* NAVBAR */}
<nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black/30 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full shadow-2xl">

  <div className="flex gap-6 md:gap-10 text-sm md:text-base font-semibold text-white">

    <a
      href="#home"
     className="hover:text-rose-400 hover:drop-shadow-[0_0_10px_rgba(255,100,150,0.8)] transition duration-300"
    >
      🏠 Home
    </a>

    <a
      href="#memories"
      className="hover:text-rose-400 hover:drop-shadow-[0_0_10px_rgba(255,100,150,0.8)] transition duration-300"
    >
      📸 Memories
    </a>

    <a
      href="#wishes"
      className="hover:text-rose-400 hover:drop-shadow-[0_0_10px_rgba(255,100,150,0.8)] transition duration-300"
    >
      💌 Wishes
    </a>

  </div>

</nav>
      {/* HERO SECTION */}
      <motion.section id="home"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
       className="relative z-30 min-h-screen flex items-center justify-center text-center px-6 pt-44 pb-20" 
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
       <div className="relative z-10 max-w-4xl mt-24 md:mt-10">

          <img
            src={sister}
            alt="Couple"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto border-4 border-white shadow-2xl"
          />
 <h1 className="text-4xl md:text-6xl font-extrabold mt-8 leading-tight min-h-[140px] md:min-h-[180px] flex items-center justify-center bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent animate-gradient">  
   <Typewriter
    words={[
      "Welcome To Your Dream Home 🏡",
      "A New Beginning ❤️",
      "Filled With Love & Happiness ✨"
    ]}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={2000}
  />

</h1>

          <h2 className="text-2xl md:text-4xl mt-6 text-orange-300 font-semibold">
            Swathi Akka ❤️ Siva Mams
          </h2>

          <p className="mt-8 text-lg md:text-2xl leading-9 text-gray-200 max-w-3xl mx-auto">
            Wishing both of you a lifetime filled with love,
            peace, happiness, laughter, and beautiful memories
            in your new beginning ✨
          </p>

        </div>

      </motion.section>

      {/* GALLERY SECTION */}
<motion.section
  id="memories"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative z-10 py-24 px-6 bg-black"
>        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-400"
        >
          Beautiful Memories ✨
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl shadow-2xl relative transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"          >
            <img
              src={couple1}
           className="h-52 md:h-96 w-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700"            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
           className="group overflow-hidden rounded-3xl shadow-2xl relative transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"          >
            <img
              src={couple2}
           className="h-52 md:h-96 w-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700"            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl shadow-2xl relative transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"          >
            <img
              src={couple3}
              className="h-52 md:h-96 w-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700"            />
          </motion.div>

        </div>

      </motion.section>

      {/* QUOTE SECTION */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative z-10 py-24 px-6 bg-black"
>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto text-center"
  >

    <motion.h2
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="text-3xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent"
    >
      “A house is made of walls and beams...
      but a home is built with love and dreams ❤️”
    </motion.h2>

    <p className="mt-10 text-gray-400 text-lg md:text-2xl leading-10">
      Wishing your new home be filled with endless laughter,
      unforgettable memories, peace, success, and beautiful moments ✨
    </p>

  </motion.div>

</motion.section>

{/* CINEMATIC SLIDESHOW */}
<section className="relative z-10 h-screen overflow-hidden">

  {slides.map((slide, index) => (

    <motion.img
      key={index}
      src={slide}
      initial={{ opacity: 0 }}
      animate={{
        opacity: currentSlide === index ? 1 : 0,
        scale: currentSlide === index ? 1.05 : 1,
      }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 w-full h-full object-cover"
    />

  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* TEXT */}
  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

    <h2 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent">
      Beautiful Moments Together ✨
    </h2>

    <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl leading-10">
      Every picture tells a story filled with love,
      happiness, laughter, and unforgettable memories ❤️
    </p>

  </div>

</section>

{/* PARALLAX SECTION */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative z-10 py-24 px-6 bg-black"
>
  {/* BACKGROUND IMAGE */}
  <motion.div
    initial={{ scale: 1.2 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${sister})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent"
    >
      A Lifetime Of Happiness ❤️
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-10 text-lg md:text-2xl text-gray-200 max-w-4xl leading-10"
    >
      May every corner of your beautiful home
      be filled with warmth, peace, laughter,
      success, and unforgettable memories ✨
    </motion.p>

  </div>

</motion.section>

      {/* JOURNEY SECTION */}
<motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[40px] shadow-2xl"
          >

            <img
              src={couple4}
              className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
            />

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold text-rose-400 leading-tight">
              A Beautiful Journey Together ❤️
            </h2>

            <p className="mt-10 text-lg md:text-xl leading-10 text-gray-300">
              Every home becomes special when it is filled with love,
              laughter, care, and togetherness. Wishing both of you a
              wonderful new chapter filled with endless happiness,
              peace, success, and unforgettable memories ✨
            </p>

            <div className="mt-10 flex gap-6 flex-wrap">

              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-orange-300">∞</h3>
                <p className="mt-2 text-gray-300">Endless Love</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-rose-400">🏡</h3>
                <p className="mt-2 text-gray-300">New Beginning</p>
              </div>

            </div>

          </motion.div>

        </div>

     </motion.section>

      {/* WISHES SECTION */}
<motion.section
  id="wishes"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative z-10 py-24 px-6 bg-black"
>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-[40px] p-8 md:p-12 shadow-2xl text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-orange-300 mb-10">
            My Wishes For You Both 💌
          </h2>

          <p className="text-lg md:text-xl leading-10 text-gray-200">
            May this beautiful home always be filled with
            positivity, peace, endless laughter, and unforgettable moments.
            Wishing both of you success, happiness, and a wonderful journey ahead ❤️
          </p>

          <div className="mt-10 text-2xl md:text-3xl font-semibold text-rose-400">
            Congratulations On Your New Beginning ✨🏠
          </div>

        </motion.div>

      </motion.section>

      {/* FOOTER */}
    <footer className="relative z-10 py-24 px-6 bg-gradient-to-b from-black to-gray-950 overflow-hidden">

  {/* TOP BORDER GLOW */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

  <div className="max-w-5xl mx-auto text-center">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-300 to-pink-500 bg-clip-text text-transparent"
    >
      Swathi ❤️ Siva
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      viewport={{ once: true }}
      className="mt-10 text-lg md:text-2xl text-gray-300 leading-10 max-w-3xl mx-auto"
    >
      May your beautiful journey together be filled with
      endless love, laughter, peace, happiness,
      and unforgettable memories ✨🏡
    </motion.p>

    {/* GLOW LINE */}
    <div className="mt-16 flex justify-center">

      <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>

    </div>

    {/* SIGNATURE */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
      viewport={{ once: true }}
      className="mt-12 text-gray-500 text-sm md:text-base tracking-[4px]"
    >
      MADE WITH ❤️ SPECIALLY FOR SWATHI & SIVA
    </motion.p>

  </div>

</footer>

    </div>
  );
}