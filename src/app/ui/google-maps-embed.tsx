import { env } from '@/app/lib/env';

export default function GoogleMapsEmbedded({ placeId, title }: Readonly<{ placeId: string; title?: string }>) {
  const mapsApiKey = env.NEXT_PUBLIC_MAPS_API_KEY ?? 'null';

  return (
    <iframe
      title={title}
      className={`min-h-96 w-full border-0`}
      loading="lazy"
      allow={`fullscreen`}
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${mapsApiKey}`}
    ></iframe>
  );
}
