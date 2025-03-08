import Link from "next/link";
export const FourthSectionDespre = () => {
  return (
    <div className="md:pt-12 w-full pb-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex md:flex-row flex-col items-center justify-between gap-8 md:gap-24">
      <div className="md:w-5/12 w-full ">
        <h1 className="text-color-primary text-center md:text-left font text-2xl md:text-4xl">
          Filozofia mea de lucru{" "}
        </h1>

        <p className="mt-8 text-center md:text-left text-color-text">
          Fiecare persoană este unică, iar abordarea mea este personalizată,
          bazată pe empatie, știință și respect față de nevoile fiecărui
          individ. Scopul meu este să creez un mediu sigur, în care să te simți
          ascultat și înțeles, pentru a putea lucra împreună spre echilibru și
          claritate emoțională.
        </p>
      </div>
      <div className="md:w-5/12 w-full flex flex-col gap-8">
        <p className="text-center md:text-left text-color-text">
          Îți mulțumesc că ai ales să faci acest pas spre o viață mai
          echilibrată! Te invit să descoperi cum putem lucra împreună pentru
          a-ți atinge obiectivele personale și emoționale.
        </p>
        <Link
          href="/contact"
          className="px-16 hover:rounded-2xl text-center transition-all py-4 self-baseline w-full md:w-auto  bg-color-primary mt-8 rounded-md text-color-background"
        >
          Programează o ședință{" "}
        </Link>
      </div>
    </div>
  );
};
