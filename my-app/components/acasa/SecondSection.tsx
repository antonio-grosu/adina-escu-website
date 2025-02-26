export const SecondSection = () => {
  return (
    <div className=" md:pt-12 min-h-screen w-full pb-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between gap-24">
      <div className="md:block hidden w-full">
        <div className="flex flex-row gap-8 items-center justify-between">
          <h1 className="text-4xl  w-8/12">
            Tehnologia care antrenează mintea pentru performanță și echilibru
          </h1>
          <button className="px-16 py-4 self-baseline  bg-color-primary mt-8 rounded-md text-color-background">
            Despre Neurofeedback{" "}
          </button>
        </div>
        <div className="flex flex-row items-center mt-12 justify-between">
          <p className="w-5/12 text-color-text">
            Neurofeedback-ul este o tehnică modernă și non-invazivă care ajută
            creierul să își regleze activitatea prin feedback în timp real.
            Aceasta contribuie la reducerea stresului, îmbunătățirea
            concentrării și optimizarea funcțiilor cognitive și emoționale.
          </p>
          <p className="w-5/12 text-color-text">
            Utilizat atât pentru tratarea tulburărilor precum anxietatea și
            ADHD, cât și pentru creșterea performanței, neurofeedback-ul oferă o
            soluție personalizată și bazată pe știință pentru o minte mai
            echilibrată și eficientă.
          </p>
        </div>
        <div className="w-full border-color-primary border-2 rounded-md aspect-video mt-12"></div>
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
        <button className="px-16 py-4  w-full bg-color-primary mt-8 rounded-md text-color-background">
          Despre Neurofeedback{" "}
        </button>
      </div>
    </div>
  );
};
