import { CustomSection } from '@/components/CustomSection';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const faqs = [
    {
      question:
        "Quels types de services proposez-vous en développement d'applications ?",
      answer:
        "Nous offrons une gamme complète de services de développement, incluant la création d'applications web responsives, le développement d'applications mobiles natives (iOS et Android), la conception d'applications hybrides, et le développement de solutions sur mesure. Notre expertise couvre également les technologies émergentes comme la réalité augmentée (AR) et l'Internet des objets (IoT).",
    },
    {
      question:
        'Combien de temps faut-il pour développer une application mobile ?',
      answer:
        "La durée de développement d'une application mobile varie selon sa complexité et ses fonctionnalités. En général, une application simple peut prendre 2 à 3 mois, tandis qu'une application plus complexe peut nécessiter 4 à 6 mois ou plus. Nous travaillons de manière agile, ce qui nous permet de livrer des versions fonctionnelles rapidement et d'itérer en fonction de vos retours.",
    },
    {
      question:
        'Quelles technologies utilisez-vous pour le développement web ?',
      answer:
        'Nous utilisons une variété de technologies modernes pour le développement web, adaptées aux besoins spécifiques de chaque projet. Cela inclut des frameworks comme React, Angular ou Vue.js pour le frontend, Node.js ou Django pour le backend, et des CMS comme WordPress ou Drupal. Nous privilégions également les approches JAMstack pour des sites web performants et sécurisés.',
    },
  ];
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <CustomSection>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center`}
      >
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="mb-5 p-[2px] rounded-2xl bg-gradient-to-r from-accent-500 to-primary-400 cursor-pointer"
          initial={false}
          animate={{
            backgroundColor:
              expandedIndex === index
                ? 'rgba(40, 200, 211, 0.1)'
                : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`w-full transition-all duration-75 ${theme === 'dark' ? 'bg-[#1A1C30] ' : 'bg-white '} ${expandedIndex === index && 'bg-opacity-85'}   rounded-[16px] py-3 px-10 hover:bg-opacity-85 transition-all duration-75`}
            onClick={() => toggleExpand(index)}
          >
            <div className={'flex gap-6 justify-between items-center'}>
              <h3
                className={`text-lg font-semibold ${expandedIndex === index ? '' : 'line-clamp-1'}`}
              >
                {faq.question}
              </h3>
              <motion.button
                animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="15"
                  height="24"
                  viewBox="0 0 15 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 22L12 12L2 2"
                    stroke="url(#paint0_linear_1458_544)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1458_544"
                      x1="7"
                      y1="2"
                      x2="7"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#28C8D3" />
                      <stop offset="0.5" stopColor="#9747FF" />
                      <stop offset="1" stopColor="#7662F9" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.button>
            </div>
            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={{
                    expanded: { opacity: 1, height: 'auto', marginTop: 20 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.04, 0.62, 0.23, 0.98],
                    opacity: { duration: 0.2 },
                  }}
                >
                  <div className="h-[2px] bg-gradient-to-r from-accent-500 to-primary-400 mb-4" />
                  <p
                    className={`${'dark' === theme ? 'text-white' : 'text-primary-950'}`}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </CustomSection>
  );
};
