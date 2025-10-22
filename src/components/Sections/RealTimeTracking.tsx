"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const RealTimeTracking = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId.trim()) return alert("Please enter a Tracking ID");
    // TODO: Integrate your tracking API or route navigation
    alert(`Searching for parcel: ${trackingId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          Real-Time Parcel Tracking
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Track your shipment anytime, anywhere. Enter your tracking ID below to get the latest status and location of your parcel in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleTrack}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition font-medium"
          >
            <Search className="w-5 h-5" />
            Track
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          src="https://i.postimg.cc/wMqP7P4R/tracking-illustration.png"
          alt="Parcel Tracking Illustration"
          className="mt-12 mx-auto max-w-md"
        />
      </div>
    </section>
  );
};

export default RealTimeTracking;
