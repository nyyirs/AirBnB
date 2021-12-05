import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      {/* Image */}

      <div className="relative min-w-[300px] h-96">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Text */}

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5 cursor-pointer hover:scale-105 transition transform duration-150 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
