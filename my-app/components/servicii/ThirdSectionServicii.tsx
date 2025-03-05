import Link from "next/link";
export const ThirdSectionServicii = () => {
  return (
    <div className="md:py-12 pb-12  md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex flex-col   justify-between gap-12">
      <p className="mt-8 text-left text-color-text md:w-5/12 w-full">
        Ești pregătit să faci primul pas spre o minte mai echilibrată și
        sănătoasă? Programează acum o consultație și începe călătoria către o
        versiune mai bună a ta!
      </p>
      <Link
        href="/contact"
        className="px-16 hover:rounded-2xl transition-all text-center py-4 self-baseline w-full md:w-auto  bg-color-primary text-color-background rounded-md "
      >
        Programează o ședință{" "}
      </Link>
    </div>
  );
};
