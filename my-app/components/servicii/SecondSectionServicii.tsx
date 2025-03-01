type CardProps = {
  title: string;
  description: string[];
  duration: string;
  price: number;
};

const Card = ({ title, description, duration, price }: CardProps) => {
  return (
    <div className="w-full bg-color-primary/20 border-2 rounded-xl border-color-primary p-8">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="flex flex-col gap-4 mt-8">
        {description.map((item, index) => {
          return (
            <p key={index} className="text-color-text">
              {item}
            </p>
          );
        })}
      </div>
      <p className="text-color-text mt-8 font-semibold">Durata: {duration}</p>
      <p className="text-color-text mt-8 font-semibold">Tarif: {price}</p>
    </div>
  );
};

export const SecondSectionServicii = () => {
  return (
    <div className="md:py-12 pb-12  md:h-auto w-full px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 bg-gray-50 flex flex-col md:flex-row  justify-between gap-12">
      <Card
        title="Neurofeedback"
        description={["Sedinta de neurofeedback", "Sedinta de neurofeedback"]}
        duration="60 min"
        price={200}
      />
      <Card
        title="Neurofeedback"
        description={["Sedinta de neurofeedback", "Sedinta de neurofeedback"]}
        duration="60 min"
        price={200}
      />
    </div>
  );
};
