"use client";

import Link from "next/link";
import { useState } from "react";
export const SecondSectionContact = () => {
  const tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);
  const tommorowString = tommorow.toISOString().split("T")[0];

  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  console.log(name, date, email, service, phone, message);
  return (
    <form className="grid md:grid-cols-2 md:gap-20 grid-cols-1 w-full md:py-24 pb-24 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50">
      <div className="w-full">
        <label className="block mb-4">Numele</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex. Ion Popescu"
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <label className="block mb-4">Data Programarii</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          min={tommorowString}
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <label className="block mb-4">Emailul</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ion.popescu@email.com"
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <label className="block mb-4">Serviciul Dorit</label>
        <select
          onChange={(e) => setService(e.target.value)}
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        >
          <option>Terapie</option>
          <option>Neurofeedback</option>
        </select>
      </div>
      <div className="w-full">
        <label className="block mb-4">Telefonul</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="ex. 0789 012 345"
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <label className="block mb-4">Un mesaj</label>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Orice altceva doresti să adaugi"
          className="p-4 md:w-7/12 w-full mb-12 md:mb-0 bg-transparent border-b-2 border-color-text focus:border-color-primary placeholder:text-color-text/20 focus:outline-none"
        ></input>{" "}
      </div>
      <Link
        href={`mailto:contact@example.com?subject=Programare%20Ședință&body=Bună%20ziua,%0A%0ADoresc%20să%20programez%20o%20ședință%20pentru%20data%20de:%20${date}%0A%0ANume: ${name}%0AEmail: ${email}%0ATelefon: ${phone}%0AServiciu: ${service}%0AMesaj: ${message}%0A%0AMulțumesc!`}
        className="px-16 py-4 self-baseline w-full md:w-auto text-center bg-color-primary mt-8 rounded-md text-color-background"
      >
        Programează o ședință{" "}
      </Link>{" "}
    </form>
  );
};
