import { motion } from "framer-motion";
import { Package, MapPin, Truck } from "lucide-react";

const services = [
  {
    icon: <Package className="w-10 h-10 text-blue-600" />,
    title: "Easy Parcel Booking",
    description:
      "Book your parcel within minutes using our intuitive dashboard. Choose pickup and delivery options with flexible scheduling.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-green-600" />,
    title: "Real-Time Tracking",
    description:
      "Track every step of your parcel’s journey with live status updates and instant delivery notifications.",
  },
  {
    icon: <Truck className="w-10 h-10 text-purple-600" />,
    title: "Reliable Delivery Network",
    description:
      "Enjoy fast, secure, and nationwide delivery powered by a tech-driven logistics system built for precision.",
  },
];

export default function OurServices() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-background text-foreground"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h2>

        <p className="max-w-2xl mx-auto mb-12">
          Explore our range of parcel solutions — from booking and tracking to
          reliable doorstep delivery.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-background border rounded-2xl shadow-md p-8 text-center transition duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
