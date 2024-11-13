'use client';
import React, { useState, FC } from 'react';
import { CustomSection } from '@/components/CustomSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import HighlightedText from '@/common/HighlightedText';

type FAQData = {
  data: {
    title: string;
    description: string;
    faqs: {
      id: number;
      answer: string;
      question: string;
    }[];
  };
};

const FAQSection: FC<FAQData> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  if (!data) return null;
  const { title, faqs } = data;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <CustomSection>
      <HighlightedText
        text={title}
        className="text-3xl md:text-4xl font-bold mb-14 leading-tight uppercase text-center"
      />
      <div className="space-y-6"> {/* Augmentation de l'espacement vertical entre les éléments */}
        {faqs &&
          faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-accent-500 to-primary-400"
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
                role="button"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
                tabIndex={0}
                className={`
                  w-full
                  min-h-[64px] /* Hauteur minimale pour une meilleure zone tactile */
                  transition-all
                  duration-75
                  ${theme === 'dark' ? 'bg-[#1A1C30]' : 'bg-white'}
                  ${expandedIndex === index && 'bg-opacity-85'}
                  rounded-[16px]
                  py-4
                  px-6
                  md:px-10
                  hover:bg-opacity-85
                  focus:outline-none
                  focus:ring-2
                  focus:ring-accent-500
                  focus:ring-offset-2
                  focus:ring-offset-transparent
                `}
                onClick={() => toggleExpand(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
              >
                <div className="flex gap-6 justify-between items-center min-h-[48px]">
                  <h3
                    id={`faq-question-${index}`}
                    className={`text-lg font-semibold flex-1 ${
                      expandedIndex === index ? '' : 'line-clamp-1'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.button
                    className="p-3 rounded-full hover:bg-opacity-10 hover:bg-accent-500 
                             focus:outline-none focus:ring-2 focus:ring-accent-500
                             touch-action-manipulation min-w-[48px] min-h-[48px]
                             flex items-center justify-center"
                    aria-label={`${
                      expandedIndex === index ? 'Réduire' : 'Développer'
                    } la réponse à la question : ${faq.question}`}
                    animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      width="15"
                      height="24"
                      viewBox="0 0 15 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-6 h-6"
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
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
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
                        className={`${
                          theme === 'dark' ? 'text-white' : 'text-primary-950'
                        } text-base leading-relaxed px-2`}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
      </div>
    </CustomSection>
  );
};

export default FAQSection;