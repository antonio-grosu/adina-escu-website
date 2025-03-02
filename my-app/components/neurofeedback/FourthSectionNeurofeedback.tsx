import Link from "next/link";
export const FourthSectionNeurofeedback = () => {
  return (
    <div className="py-12  md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex flex-col  justify-between gap-12">
      <h1 className="text-color-primary text-left font text-2xl md:text-4xl ">
        Ce se întâmplă în timpul unei ședințe de Neurofeedback?{" "}
      </h1>
      <p className="mt-8 text-left text-color-text md:w-7/12 w-full">
        O sesiune tipică de Neurofeedback durează între 30-60 de minute și
        presupune plasarea unor senzori pe scalp pentru a monitoriza activitatea
        creierului. În funcție de datele înregistrate, pacientului i se oferă
        feedback în timp real sub formă de imagini, sunete sau animații pe
        ecran, ajutând creierul să învețe să mențină un model optim de
        funcționare.
      </p>
      <div className="flex flex-col md:flex-row  justify-start items-center   md:gap-12">
        <Link
          href="/contact"
          className="px-16 hover:rounded-2xl transition-all py-4 self-baseline w-full md:w-auto  bg-color-primary mt-8 rounded-md text-color-background"
        >
          Programează o ședință{" "}
        </Link>

        <Link
          href="/servicii"
          className="px-16 hover:rounded-2xl transition-all py-4 self-baseline w-full md:w-auto  bg-color-primary/20 border-2 border-color-primary text-color-text mt-8 rounded-md "
        >
          Vezi Serviciile{" "}
        </Link>
      </div>
    </div>
  );
};
