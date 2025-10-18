import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Lottie from "lottie-react";
import deliveryAnimation from "@/assets/Delivery car logistic.json";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["fast", "reliable", "quicker", "safer", "better"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-6 py-20 lg:py-40 items-center justify-start flex-col w-full md:w-1/2">
          <div className="flex justify-center md:justify-start w-full">
            <Button variant="secondary" size="sm" className="gap-4">
              A smart Parcel Delivery System
            </Button>
          </div>
          <div className="flex gap-4 flex-col justify-start items-center md:items-start w-full">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-left font-regular">
              <span className="text-spektr-cyan-50">This is something</span>
              <span className="relative flex w-full justify-center md:justify-start overflow-hidden  md:pb-4 md:pt-1 text-left ">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-center  md:text-left  leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
              Simplify your logistics with our intelligent delivery system that
              ensures faster dispatch and on-time arrivals—every time. Whether
              you’re a small business or a growing enterprise, we make parcel
              delivery smooth, transparent and efficient.
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-center md:justify-start w-full">
            <Button size="lg" className="gap-2" variant="outline">
              Book Your Delivery <PhoneCall className="w-4 h-4" />
            </Button>
            <Link to="/register">
              <Button size="lg" className="gap-2 text-white">
                Sign up now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">

        <Lottie animationData={deliveryAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
}

export { Hero };
