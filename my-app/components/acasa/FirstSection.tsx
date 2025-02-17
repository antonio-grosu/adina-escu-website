export const FirstSection = () => {
  return (
    <div className="pt-36 pb-24  md:pb-24 md:pt-64 md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex items-center justify-between gap-24">
      <div className="md:w-5/12 w-full ">
        <h1 className="text-color-primary text-center md:text-left font text-2xl md:text-4xl">
          Descoperă puterea minții tale prin Neurofeedback{" "}
        </h1>
        <div className=" p-4 bg-gray-500 mt-8 aspect-square rounded-md block md:hidden"></div>

        <p className="mt-8 text-center md:text-left text-color-text">
          Bine ai venit! Sunt Adina Escu, psiholog specializat în Neuro
          Feedback, și te pot ajuta să-ți optimizezi funcțiile cognitive și
          să-ți îmbunătățești starea de bine.{" "}
        </p>
        <button className="px-16 py-4 self-baseline w-full md:w-auto  bg-color-primary mt-8 rounded-md text-color-background">
          Programează o ședință{" "}
        </button>
      </div>

      <div className="w-5/12 p-4 bg-gray-500 aspect-square rounded-md md:block hidden"></div>
    </div>
  );
};
