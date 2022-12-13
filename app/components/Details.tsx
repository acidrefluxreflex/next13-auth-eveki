import Image from "next/image";
import cyber from "../../public/cyber.webp"

// Built with Vivid (https://vivid.lol) ⚡️

export const Details = ({ children }: { children: React.ReactNode }) => {
  return (

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <Image src={cyber} alt="Shoes" fill />
        </figure>
        <div className="card-body w-96">
          <h2 className="text-2xl font-bold text-white">Shoes!</h2>
          <div className="text-sm">
          <p>{children}</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>

  );
};
