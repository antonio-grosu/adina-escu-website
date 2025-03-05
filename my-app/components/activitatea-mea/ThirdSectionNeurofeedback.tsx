export const ThirdSectionNeurofeedback = () => {
  return (
    <div className="py-12  md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex flex-col  justify-between gap-12">
      <h1 className="text-color-primary text-left font text-2xl md:text-4xl ">
        Cum funcționează Neurofeedback-ul?{" "}
      </h1>
      <p className="mt-8 text-left text-color-text md:w-7/12 w-full">
        Neurofeedback-ul este o tehnică avansată și non-invazivă de antrenament
        cerebral, care ajută la reglarea și optimizarea activității creierului.
        Folosind senzori specializați, această metodă oferă feedback în timp
        real despre activitatea undelor cerebrale, permițând creierului să
        învețe să funcționeze într-un mod mai echilibrat și eficient.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between justify-start items-center  pl-0 md:pl-12 md:gap-12">
        <ul className="list-disc ">
          <li className="mt-8 text-center md:text-left text-color-text ">
            Persoane care se confruntă cu stres cronic și anxietate{" "}
          </li>
          <li className="mt-8 text-center md:text-left text-color-text ">
            Studenți și profesioniști care doresc să-și îmbunătățească
            performanțele cognitive{" "}
          </li>
        </ul>
        <ul className="list-disc ">
          <li className="mt-8 text-center md:text-left text-color-text ">
            Sportivi și artiști care caută să își optimizeze concentrarea și
            gestionarea emoțiilor
          </li>
          <li className="mt-8 text-center md:text-left text-color-text ">
            Persoane cu dificultăți de somn sau gestionare a emoțiilor
          </li>
        </ul>
      </div>
    </div>
  );
};
