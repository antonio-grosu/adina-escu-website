export const FirstSectionContact = () => {
  return (
    <div className="md:py-12 pb-12  md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50">
      <h1 className="text-color-primary text-left font text-2xl md:text-4xl ">
        Programare Cabinet{" "}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <p className="mt-8 text-left text-color-text">Adresa</p>
          <p className="mt-8 text-left text-color-text">Telefon</p>
        </div>
        <div className="w-full">
          <p className="mt-8 text-left text-color-text">L-V : Program</p>
          <p className="mt-8 text-left text-color-text">S-D : Program</p>
        </div>
      </div>
      <p className="mt-8 text-left text-color-text font-semibold">
        Programarile online vor fi confirmate de un reprezentant Psihologescu
      </p>
    </div>
  );
};
