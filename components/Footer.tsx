import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-color-text px-8 py-24 flex md:flex-row flex-col items-top justify-between">
      <div className="flex flex-col md:w-3/12">
        <h3 className="font-semibold text-color-background">Adina Escu</h3>
        <p className="text-sm mt-4 text-color-background">Slogan Adina Escu</p>
      </div>

      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold text-color-background">Navigatie</h3>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Acasa
        </Link>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Despre Mine
        </Link>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Servicii
        </Link>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Neurofeedback
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold text-color-background">Social Media</h3>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Instagram
        </Link>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          Facebook
        </Link>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          TikTok
        </Link>
      </div>
      <div className="flex flex-col md:mt-0 mt-8 md:items-center gap-2">
        <h3 className="font-semibold text-color-background">Contacteaza-ma</h3>
        <Link
          href={"/"}
          className="text-sm hover:text-color-primary text-color-background transition-all "
        >
          contact@adina-escu.ro
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
