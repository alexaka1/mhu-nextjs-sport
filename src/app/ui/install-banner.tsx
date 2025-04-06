'use client';

import { useEffect, useState } from 'react';
import { isIOS, isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type UserChoice = {
  outcome: 'accepted' | 'dismissed';
  platform: string;
};
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<UserChoice>;
  platforms: string[];
  userChoice: Promise<UserChoice>;
};

const bannerDismissedKey = 'pwa-banner-dismissed';

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobil' | 'asztali' | 'iOS kezdőképernyős'>('mobil');
  const installPrompt = (e: BeforeInstallPromptEvent) => {
    // Prevents the default mini-infobar or install dialog from appearing on mobile
    e.preventDefault();
    setDeferredPrompt(e);
    setShowInstall(true);
  };
  useEffect(() => {
    const bannerDismissed = localStorage.getItem(bannerDismissedKey);
    if (bannerDismissed === 'true') {
      // User has dismissed the banner before, let the browser handle the prompt
      return;
    }
    // @ts-expect-error - Before BeforeInstallPromptEvent type error
    window.addEventListener('beforeinstallprompt', installPrompt);
    if (isMobile) {
      setDeviceType('mobil');
    } else if (isIOS) {
      setDeviceType('iOS kezdőképernyős');
    } else {
      setDeviceType('asztali');
    }
    return () => {
      // cleanup
      // @ts-expect-error - Before BeforeInstallPromptEvent type error
      window.removeEventListener('beforeinstallprompt', installPrompt);
    };
  }, []);

  async function Install() {
    setShowInstall(false);
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
    }
  }

  return (
    <aside
      className={`hidden grid-flow-col grid-cols-[2fr_auto] items-center gap-6 text-balance px-4 py-3 bg-primary text-bg-contrast print:hidden ${showInstall || isIOS ? 'browser:inline-grid' : ''}`}
    >
      <p className="text-pretty text-center text-sm font-medium">
        Már elérhető {deviceType} alkalmazásként is!&nbsp;
        <button
          onClick={() => {
            void Install().then();
          }}
          className="inline-block text-pretty underline"
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
      <button
        onClick={() => {
          localStorage.setItem(bannerDismissedKey, 'true');
          setShowInstall(false);
        }}
        title="Bezárás"
      >
        <FontAwesomeIcon icon={faTimes} className="size-6" />
      </button>
    </aside>
  );
}
