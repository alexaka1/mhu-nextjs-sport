import Image from 'next/image';
export default function LandingBackground() {
  return (
    <Image
      alt="Nyíregyházi ügyészség épülete"
      src={`https://utfs.io/f/dc22aeff-6c14-4963-b82e-afe5f800596a-pphhpa.JPG`}
      quality={100}
      fill
      sizes="100vw"
      className={`-z-10 object-cover`}
      priority={true}
    />
  );
}
