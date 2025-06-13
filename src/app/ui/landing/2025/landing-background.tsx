import Image from 'next/image';
export default function LandingBackground() {
  return (
    <Image
      alt="Nyíregyházi ügyészség épülete"
      src={`https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hh0NgVxPGKw0IzMQu4B8dhsEZvRUi6nrjb3Dg7`}
      quality={100}
      fill
      sizes="100vw"
      className={`-z-10 object-cover`}
      priority={true}
    />
  );
}
