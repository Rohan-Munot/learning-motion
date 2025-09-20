import Image from "next/image";
import { MessageCircleIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-72 min-h-[28rem] rounded-xl h-[26rem] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] p-4 flex flex-col bg-white"
          >
            <h2>This is hover and exitanimations</h2>
            <p>This is p tag </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 mt-10 text-[12px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] rounded-lg px-2 py-1"
              >
                <Image
                  src="/favicon.ico"
                  alt="button"
                  className="w-5 h-5"
                  width={50}
                  height={50}
                />
                Button text
                <XIcon className="w-5 h-5" width={50} height={50} />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              {/* Motion div start here */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  // mass: 1,
                }}
                className="absolute inset-0 h-full w-full border border-neutral-200  bg-white rounded-lg divide-y divide-neutral-200"
              >
                <div className="p-4 text-xs flex gap-2 items-center">
                  <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircleIcon className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col text-[8px]">
                    <p className="text-xs text-neutral-600">
                      This is a message
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      This is a message
                    </p>
                  </div>
                </div>
                <div className="p-4 text-xs flex gap-2 items-center">
                  <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircleIcon className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col text-[8px]">
                    <p className="text-xs text-neutral-600">
                      This is a message
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      This is a message
                    </p>
                  </div>
                </div>
                <div className="p-4 text-xs flex gap-2 items-center">
                  <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircleIcon className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col text-[8px]">
                    <p className="text-xs text-neutral-600">
                      This is a message
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      This is a message
                    </p>
                  </div>
                </div>
                <div className="p-4 text-xs flex gap-2 items-center">
                  <div className="h-7 w-7 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(48,48,55,0.05),0_2px_3px_rgba(0,0,0,0.05)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircleIcon className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col text-[8px]">
                    <p className="text-xs text-neutral-600">
                      This is a message
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      This is a message
                    </p>
                  </div>
                </div>
              </motion.div>
              {/* Motion div end here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
