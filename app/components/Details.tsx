import Image from "next/image";
import cyber from "../../public/cyber.webp";

// Built with Vivid (https://vivid.lol) ⚡️

export const Details = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card w-96 h-auto bg-base-100 shadow-xl image-full ">
      <figure>
        <Image src={cyber} alt="Shoes" style={{
          borderRadius: "1rem",

        }} fill />
      </figure>
      <div className="card-body w-96">
        <h2 className="text-2xl font-bold text-white">Shoes!</h2>
        <div className="text-sm">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
