'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border shadow-sm"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full px-5 py-3 font-semibold text-gray-900 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            {faq.q}
            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-90' : ''}`} />
          </button>
          {openFaq === i && (
            <div className="px-5 pb-3 text-gray-600 text-sm animate-in slide-in-from-top-1">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
