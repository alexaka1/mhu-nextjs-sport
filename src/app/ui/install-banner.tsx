'use client';

import { useEffect, useState } from 'react';
import { isIOS, isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';

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

// Compute device type once - this doesn't change during the component lifecycle
const getDeviceType = (): 'mobil' | 'asztali' | 'iOS kezdőképernyős' => {
  if (isMobile) {
    return 'mobil';
  } else if (isIOS) {
    return 'iOS kezdőképernyős';
  } else {
    return 'asztali';
  }
};

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const deviceType = getDeviceType();
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
      className={`bg-primary data-[show=true]:browser:inline-grid hidden grid-flow-col grid-cols-[2fr_auto] items-center gap-6 px-4 py-3 text-balance text-white print:hidden`}
      data-show={showInstall || isIOS || true}
    >
      <p className="text-center text-sm font-medium text-pretty">
        Már elérhető {deviceType} alkalmazásként is!&nbsp;
        <Button
          variant={'link'}
          size={'sm'}
          className={`inline-block text-white`}
          onClick={() => {
            void Install().then();
          }}
        >
          Telepítsd az alkalmazást az eszközödre!
        </Button>
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
      <Button
        variant={'ghost'}
        size={'icon'}
        onClick={() => {
          localStorage.setItem(bannerDismissedKey, 'true');
          setShowInstall(false);
        }}
        title="Bezárás"
      >
        <FontAwesomeIcon icon={faTimes} className="size-6" />
      </Button>
    </aside>
  );
}
