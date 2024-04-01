'use client';

import { useState } from 'react';
import { captureMessage } from '@sentry/nextjs';
import { deviceDetect, isIOS, isMobile } from 'react-device-detect';

type UserChoice = {
  outcome: 'accepted' | 'dismissed';
  platform: string;
};
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<UserChoice>;
  platforms: string[];
  userChoice: Promise<UserChoice>;
};

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  if (typeof window != 'undefined' && window != null) {
    // @ts-expect-error - Before BeforeInstallPromptEvent type error
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      console.log(deviceDetect(navigator.userAgent));
      // Prevents the default mini-infobar or install dialog from appearing on mobile
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    });
  }
  async function Install() {
    setShowInstall(false);
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      captureMessage(`User response to the install prompt: ${outcome}`, 'info');
    }
  }
  return (
    <div
      className={`text-balance px-4 py-3 bg-primary text-bg-contrast ${showInstall || isIOS ? '[@media(display-mode: browser)]:block' : 'hidden'}`}
    >
      <p className="text-center text-sm font-medium">
        Már elérhető {isMobile ? 'mobil' : 'asztali'} alkalmazásként is!&nbsp;
        <button
          onClick={() => {
            void Install().then();
          }}
          className="inline-block underline"
        >
          Telepítsd az alkalmazást az eszközödre!
        </button>
      </p>
      {/*<button*/}
      {/*  className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors*/}
      {/*      duration-200*/}
      {/*      ease-in-out bg-primary text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2*/}
      {/*      focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:bg-primary-800`}*/}
      {/*  onClick={Install}*/}
      {/*>*/}
      {/*  Telepites*/}
      {/*</button>*/}
    </div>
  );
}
