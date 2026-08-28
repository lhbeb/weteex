"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useMemo } from 'react';
import { useLocale } from '@/context/LocaleContext';

const Hero = () => {
  const { t, locale } = useLocale();
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const placeholder = '\u00a0';

  const words = useMemo(() => {
    return t('hero.words') || ['Moderne Stühle & Möbel', 'Massivholz & Rattan', 'Elegante Esstische', 'Zeitlose Wohnkultur'];
  }, [t]);

  // TYPING ANIMATION
  useEffect(() => {
    const element = typingTextRef.current;
    if (!element) return;

    let isAnimating = true;
    let currentIndex = 0;

    const sleep = (duration: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, duration));

    const typeWord = async (word: string) => {
      element.textContent = '';
      const letters = word.split('');
      for (const letter of letters) {
        if (!isAnimating) return;
        element.textContent = `${element.textContent}${letter}`;
        await sleep(90);
      }
    };

    const deleteWord = async () => {
      while (isAnimating && (element.textContent?.length ?? 0) > 0) {
        element.textContent = element.textContent?.slice(0, -1) ?? '';
        await sleep(40);
      }
      element.textContent = placeholder;
    };

    const animateLoop = async () => {
      element.textContent = placeholder;

      while (isAnimating) {
        const word = words[currentIndex];

        await typeWord(word);
        if (!isAnimating) break;

        await sleep(2000);
        if (!isAnimating) break;

        await deleteWord();
        if (!isAnimating) break;

        await sleep(350);
        if (!isAnimating) break;

        currentIndex = (currentIndex + 1) % words.length;
      }
    };

    animateLoop();

    return () => {
      isAnimating = false;
    };
  }, [locale, words]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4 py-4 sm:py-6 md:py-7">
        <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-xl shadow-xl md:min-h-[350px] md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
          {/* Content panel */}
          <div className="order-2 flex w-full flex-col justify-center bg-[#1D2E24] p-5 sm:p-7 md:order-1 md:p-8 lg:p-9">
            {/* Heading with typing animation */}
            <h1 className="max-w-[620px] text-xl font-bold leading-tight text-[#F6F8F5] sm:text-2xl md:text-3xl lg:text-[32px]">
              <span
                ref={typingTextRef}
                className="mb-1.5 block min-h-[2.2em] sm:min-h-[1.2em] text-[#D1A966] transition-all"
              >
                {placeholder}
              </span>
              <span className="block leading-tight">
                {t('hero.subtitle')}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-[580px] text-xs leading-relaxed text-[#F6F8F5]/85 sm:text-sm md:text-base">
              {t('hero.description')}
            </p>

            {/* Shop Now Button */}
            <Link
              href="/#collection"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-lg bg-[#D1A966] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#142019] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DEBC80] hover:shadow-lg"
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Image panel */}
          <div className="relative order-1 min-h-[200px] overflow-hidden md:order-2 md:min-h-0 bg-stone-900">
            <Image
              src="/bg.png"
              alt="Authentic furniture and dining chairs collection"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2E24]/40 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
