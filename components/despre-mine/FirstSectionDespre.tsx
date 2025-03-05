export const FirstSectionDespre = () => {
  return (
    <div className=" pb-12 pt-32 w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex flex-col items-center justify-between gap-12">
      <h1 className="text-color-primary text-center md:text-left font text-2xl md:text-4xl">
        Eu sunt Adina Escu{" "}
      </h1>
      <div className="w-full flex flex-col md:flex-row items-center justify-around gap-8">
        <p className="border-2 border-color-primary bg-color-primary/15 p-4 rounded-lg">
          Am ajutat numerosi pacieni sa-si regaseasca linistea inteeioara si
          sa-si imbunatateasca performantele cognitive.{" "}
        </p>
        <div className="bg-gray-500 h-56 aspect-square rounded-full border-4 border-color-primary"></div>
        <p className="border-2 border-color-primary bg-color-primary/15 p-4 rounded-lg">
          Cred in puterea mintii de a se ecalibra si in abordarilebazate pe date
          stiintifice pentru a aduce schimbari pozitive.{" "}
        </p>
      </div>
    </div>
  );
};
