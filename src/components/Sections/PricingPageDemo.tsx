import { motion } from "framer-motion";
import { PricingCard } from "../price";

// --- ICONS for the demo ---
const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56v4.82a6 6 0 01-1.83-1.01l-4.01-4.01a6 6 0 01-1.01-1.83H7.5a6 6 0 017.38-5.84zM10.5 14.5L14 11m-3.5 3.5v-4.5h4.5"
    />
  </svg>
);
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);
const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6.75h.008v.008H5.25V6.75zm.008 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008zM12 21V3"
    />
  </svg>
);

// --- FADE-IN ANIMATION VARIANTS ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PricingPageDemo() {
  return (
    <div className="w-full container mx-auto py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-20"
      >
        Flexible Pricing Plans
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Business Plan --- */}
        <motion.div variants={itemVariants}>
          <PricingCard
            planName="Basic Plan"
            description="Pay per Parcel"
            price={19}
            billingCycle="/month"
            features={[
              "Ideal for individuals or small businesses",
              "Standard delivery tracking included",
              "Real-time status updates",
              "24/7 customer support",
            ]}
            buttonText="Get Business"
            icon={<UserIcon />}
            isCurrentPlan={true}
          />
        </motion.div>

        {/* --- Advanced Plan (Popular) --- */}
        <motion.div variants={itemVariants}>
          <PricingCard
            variant="popular"
            planName="Business Plan"
            description="Monthly Subscription"
            price={299}
            billingCycle="/month"
            features={[
              "Unlimited local deliveries",
              "Priority support & faster processing",
              "Advanced parcel insights dashboard",
              "API access for automation",
              "10x checkout capacity",
            ]}
            buttonText="Get Advanced"
            icon={<RocketIcon />}
          />
        </motion.div>

        {/* --- Plus Plan --- */}
        <motion.div variants={itemVariants}>
          <PricingCard
            planName="Enterprise Plan"
            description="Custom Solutions"
            price={2300}
            billingCycle="/month"
            features={[
              "Tailored delivery network management",
              "Integration with ERP / logistics systems",
              "Bulk shipment analytics",
              "Dedicated account manager",
              "Custom pricing based on scale",
            ]}
            buttonText="Get Plus"
            icon={<BuildingIcon />}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
