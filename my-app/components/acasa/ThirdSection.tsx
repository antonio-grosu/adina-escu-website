export const ThirdSection = () => {
  return (
    <div className=" md:py-12  pt-12 pb-24   w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50  gap-24">
      <h1 className="text-color-primary text-center md:text-left font text-2xl md:text-4xl">
        Feedback primit{" "}
      </h1>
      <div className="w-full flex md:flex-row flex-col gap-12 mt-12 justify-between">
        <div className="md:w-5/12 border-2 rounded-md border-color-primary bg-color-primary/15 p-4 flex flex-col gap-4 items-start">
          <h3 className="font-medium text-color-text">Nume Client</h3>
          <p className="text-color-text">
            „Am avut o experiență foarte pozitivă, ședințele au fost relaxante
            și m-au ajutat să îmi îmbunătățesc concentrarea.”
          </p>
        </div>
        <div className="md:w-5/12 border-2 rounded-md border-color-primary bg-color-primary/15 p-4 flex flex-col gap-4 items-start">
          <h3 className="font-medium text-color-text">Nume Client</h3>
          <p className="text-color-text">
            „Am avut o experiență foarte pozitivă, ședințele au fost relaxante
            și m-au ajutat să îmi îmbunătățesc concentrarea.”
          </p>
        </div>
      </div>
      <p className="text-color-text mt-12">
        Te-ai întrebat vreodată cum îți poți antrena creierul pentru a funcționa
        la capacitate maximă? Neurofeedback-ul este o metodă revoluționară care
        îți oferă oportunitatea de a-ți îmbunătăți concentrarea, echilibrul
        emoțional și calitatea somnului, într-un mod natural și non-invaziv.
      </p>
      <button className="px-16 py-4 self-baseline w-full md:w-auto  bg-color-primary mt-8 rounded-md text-color-background">
        Vezi Serviciile{" "}
      </button>
    </div>
  );
};
