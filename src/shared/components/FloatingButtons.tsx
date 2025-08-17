import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Phone, MessageSquare, X, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+393208581998';
  const whatsappNumber = '393208581998';

  const toggleMenu = () => setIsOpen(!isOpen);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
    exit: { opacity: 0, y: 20, scale: 0.8 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center gap-3 mb-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              variants={buttonVariants}
              aria-label="Chat on WhatsApp"
            >
              <Button size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg">
                <MessageSquare className="h-7 w-7" />
              </Button>
            </motion.a>
            <motion.a
              href={`tel:${phoneNumber}`}
              custom={1}
              variants={buttonVariants}
              aria-label="Call us"
            >
              <Button size="icon" className="rounded-full w-14 h-14 bg-ocean-blue hover:bg-ocean-blue/90 text-white shadow-lg">
                <Phone className="h-7 w-7" />
              </Button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button
        size="icon"
        className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
        onClick={toggleMenu}
        aria-label="Toggle contact buttons"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'plus'}
            initial={{ rotate: -45, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Plus className="h-8 w-8" />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default FloatingButtons;
