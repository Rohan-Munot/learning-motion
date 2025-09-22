import { ChartBar } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

const Hooks = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Changed to provide more scroll range
  });
  const translateContent = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const opacityContent = useTransform(
    scrollYProgress,
    [0.1, 0.5, 1],
    [0, 1, 0]
  );
  const blurContent = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     console.log(latest);
  //   });
  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center min-h-screen px-6 lg:px-0" // Changed layout and padding
    >
      <motion.div
        style={{ filter: useMotionTemplate`blur(${blurContent}px)` }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div style={{ opacity: opacityContent, y: translateContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

import { Rocket, Settings, Lightbulb, Shield, BarChart3 } from "lucide-react";

const features: Feature[] = [
  {
    icon: <Rocket size={40} className="text-amber-400" />,
    title: "Blazing Fast Performance",
    description:
      "Experience lightning-fast load times and seamless interactions.",
    content: (
      <div className="size-96 flex flex-col items-center justify-center bg-amber-300 rounded-xl shadow-lg p-8"></div>
    ),
  },
  {
    icon: <Settings size={40} className="text-violet-500" />,
    title: "Highly Customizable",
    description: "Tailor every aspect to fit your unique needs.",
    content: (
      <div className="size-96 flex flex-col items-center justify-center bg-violet-300 rounded-xl shadow-lg p-8"></div>
    ),
  },
  {
    icon: <Lightbulb size={40} className="text-green-500" />,
    title: "Innovative Solutions",
    description: "Stay ahead with cutting-edge features and technology.",
    content: (
      <div className="size-96 flex flex-col items-center justify-center bg-green-300 rounded-xl shadow-lg p-8"></div>
    ),
  },
  {
    icon: <Shield size={40} className="text-red-500" />,
    title: "Robust Security",
    description:
      "Your data is protected with industry-leading security measures.",
    content: (
      <div className="size-96 flex flex-col items-center justify-center bg-red-300 rounded-xl shadow-lg p-8"></div>
    ),
  },
  {
    icon: <BarChart3 size={40} className="text-blue-500" />,
    title: "Insightful Analytics",
    description: "Gain valuable insights with powerful analytics tools.",
    content: (
      <div className="size-96 flex flex-col items-center justify-center bg-blue-300 rounded-xl shadow-lg p-8"></div>
    ),
  },
];
export default Hooks;
