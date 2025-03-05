import Link from "next/link";
export const SecondSection = () => {
  return (
    <div className=" md:pt-12 w-full pb-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between gap-24">
      <div className="md:block hidden w-full">
        <div className="flex flex-row gap-8 items-center justify-between">
          <h1 className="text-4xl  w-8/12">
            Un spațiu sigur pentru creștere și autocunoaștere{" "}
          </h1>
          <Link href="/activitatea-mea">
            <button className="px-16 hover:rounded-2xl transition-all py-4 self-baseline  bg-color-primary mt-8 rounded-md text-color-background">
              Despre acitivitatea mea{" "}
            </button>
          </Link>
        </div>
        <div className="flex flex-row items-center mt-12 justify-between">
          <p className="w-5/12 text-color-text">
            Fie că te confrunți cu stres, anxietate, dificultăți emoționale sau
            îți dorești o mai bună înțelegere a propriei persoane, sunt aici
            pentru a te ghida pe acest drum al autocunoașterii și dezvoltării
            personale.
          </p>
          <p className="w-5/12 text-color-text">
            Terapia este un proces de colaborare care te ajută să îți explorezi
            gândurile, sentimentele și comportamentele într-un mediu sigur și
            confidențial. Împreună putem lucra pentru a găsi soluții și a
            dezvolta strategii care să te ajute să îți atingi obiectivele
            personale și să îți îmbunătățești calitatea vieții.
          </p>
        </div>
        <div className="w-full border-color-primary border-2 rounded-md h-72 mt-12"></div>
      </div>
      <div className="md:hidden flex flex-col gap-8">
        <h1 className="text-2xl text-center">
          Tehnologia care antrenează mintea pentru performanță și echilibru
        </h1>

        <p className=" text-color-text">
          Neurofeedback-ul este o tehnică modernă și non-invazivă care ajută
          creierul să își regleze activitatea prin feedback în timp real.
          Aceasta contribuie la reducerea stresului, îmbunătățirea concentrării
          și optimizarea funcțiilor cognitive și emoționale.
        </p>
        <div className="w-full border-color-primary border-2 rounded-md aspect-video"></div>

        <p className=" text-color-text">
          Utilizat atât pentru tratarea tulburărilor precum anxietatea și ADHD,
          cât și pentru creșterea performanței, neurofeedback-ul oferă o soluție
          personalizată și bazată pe știință pentru o minte mai echilibrată și
          eficientă.
        </p>
        <Link href="/neurofeedback">
          <button className="px-16 py-4 hover:rounded-2xl transition-all w-full bg-color-primary mt-8 rounded-md text-color-background">
            Despre Neurofeedback{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
