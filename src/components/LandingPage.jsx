import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Compass, Bell, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const exploreRef = useRef(null);
  const aboutRef = useRef(null);
  const bookingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const allDestinations = {
    Beach: [
      { id: 101, name: "Maldives", country: "South Asia", price: "$900", rating: 4.9, img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
      { id: 102, name: "Bora Bora", country: "Polynesia", price: "$1,100", rating: 4.8, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
      { id: 103, name: "Maya Bay", country: "Thailand", price: "$400", rating: 4.7, img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
      { id: 104, name: "Maui", country: "Hawaii", price: "$950", rating: 4.9, img: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
      { id: 105, name: "Zanzibar", country: "Tanzania", price: "$550", rating: 4.6, img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
      { id: 106, name: "Palawan", country: "Philippines", price: "$300", rating: 4.8, img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80", tag: "Beach" },
    ],
    Mountain: [
      { id: 201, name: "Zermatt", country: "Switzerland", price: "$1,400", rating: 5.0, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", tag: "Mountain" },
      { id: 202, name: "Banff", country: "Canada", price: "$800", rating: 4.8, img: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80", tag: "Mountain" },
      { id: 203, name: "Aspen", country: "USA", price: "$1,200", rating: 4.7, img: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80", tag: "Mountain" },
      { id: 204, name: "Mount Fuji", country: "Japan", price: "$700", rating: 4.9, img: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", tag: "Mountain" },
      { id: 205, name: "Patagonia", country: "Chile", price: "$1,100", rating: 4.8, img: "https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=800&q=80", tag: "Mountain" },
      { id: 206, name: "Dolomites", country: "Italy", price: "$950", rating: 4.9, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", tag: "Mountain" },
    ],
  };
  const getDisplayData = () => {
    if (activeCategory === 'All') {
      return [...allDestinations.Beach.slice(0, 3), ...allDestinations.Mountain.slice(0, 3)];
    }
    return allDestinations[activeCategory] || [];
  };

  const displayData = getDisplayData();

  // Animation Variants for the "Coffee Shop" glide effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 90 // Start lower for a more pronounced glide
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth landing
      }
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 scroll-smooth">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 shadow-lg shadow-teal-200">
            <Compass className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Nomadix</span>
        </motion.div>

        <div className=" hidden gap-8 font-medium text-slate-500 md:flex">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer hover:text-teal-600 transition-colors">Home</button>
          <button onClick={() => scrollToSection(exploreRef)} className="cursor-pointer hover:text-teal-600 transition-colors">Explore</button>
          <button onClick={() => scrollToSection(bookingRef)} className="cursor-pointer hover:text-teal-600 transition-colors">Bookings</button>
          <button onClick={() => scrollToSection(aboutRef)} className="cursor-pointer hover:text-teal-600 transition-colors">About</button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-all">
            <Bell size={20} />
          </button>
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200">
            <img src="https://ui-avatars.com/api/?name=Traveler&background=0D9488&color=fff" alt="Profile" />
          </div>
        </motion.div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 pt-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 text-white md:px-16 md:py-24 shadow-2xl"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl font-extrabold leading-tight md:text-6xl"
            >
              Find your next <span className="text-teal-400">Epic</span> Journey.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg text-slate-300 md:text-xl"
            >
              Discover hidden gems and popular landmarks worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              id="search-bar"
              ref={bookingRef}
              className="mt-10 flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-2xl md:flex-row md:items-center"
            >
              <div className="flex flex-1 items-center gap-3 px-4 py-2 text-slate-800">
                <Search className="text-slate-400" size={20} />
                <input type="text" placeholder="Search destination" className="w-full outline-none" />
              </div>
              <button className="rounded-xl bg-teal-600 px-8 py-4 font-bold text-white transition-all hover:bg-teal-700 active:scale-95">Book Now</button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* EXPLORE / CATEGORIES SECTION */}
      <section ref={exploreRef} className="mt-20 px-6 md:px-12 lg:px-24">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Explore Destinations</h2>
            <p className="text-slate-500 mt-1">Filtered by your favorite landscape</p>
          </motion.div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {['All', 'Beach', 'Mountain'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-2xl px-10 py-4 text-sm font-bold transition-all
                ${activeCategory === cat ? 'bg-teal-600 text-white shadow-lg shadow-teal-200' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DESTINATION GRID WITH STAGGERED GLIDE ANIMATION */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayData.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group cursor-pointer overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-[2rem]">
                <img src={dest.img} alt={dest.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-5 left-5 rounded-xl bg-white/80 px-4 py-2 text-xs font-bold text-slate-900 backdrop-blur-sm">
                  {dest.tag}
                </div>
              </div>
              <div className="mt-6 px-4 pb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{dest.name}</h3>
                  <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin size={16} className="text-teal-500" /> {dest.country}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-teal-600 font-extrabold text-xl tracking-tight">{dest.price}</span>
                  <div className="flex items-center justify-end gap-1 text-xs font-bold text-slate-500 mt-1">
                    <Star className="fill-yellow-400 text-yellow-400" size={14} /> {dest.rating}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section ref={aboutRef} className="mt-32 px-6 py-24 bg-slate-100 md:px-12 lg:px-24 rounded-t-[4rem]">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" className="rounded-[3rem] shadow-2xl" alt="About" />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl hidden lg:block">
              <p className="text-teal-600 font-black text-4xl">10/10</p>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">User Satisfaction</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">We help you find the <br /> most beautiful places.</h2>
            <p className="mt-8 text-slate-600 text-lg leading-relaxed">Nomadix is your premier travel partner, specializing in curated experiences that blend luxury with local authenticity. Our mission is to make every journey effortless.</p>
            <ul className="mt-10 space-y-5">
              {['Expert Local Guides', '24/7 Premium Support', 'Exclusive Price Deals'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <ArrowRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white px-6 py-16 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-16">
          <div className="flex items-center gap-3">
            <Compass className="text-teal-400" size={40} />
            <span className="text-3xl font-bold tracking-tighter uppercase">Nomadix</span>
          </div>
          <p className="text-slate-400 font-medium text-center md:text-left">© 2026 Nomadix Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;