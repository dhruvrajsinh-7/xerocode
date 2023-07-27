interface FeatureItemProps {
  title: string;
  description: string[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="bg-[#181924] p-2 my-6 rounded-3xl">
      <div className="p-4">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl leading-7 md:leading-8 lg:leading-9 tracking-wide  bg-gradient-to-r from-blue-700 to-purple-700 via-pink-300 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="text-white text-sm font-normal mt-3 mb-16">
          {description.map((line, index) => (
            <h3 key={index} className="mb-1">
              {line}
            </h3>
          ))}
        </div>
        <button className="bg-[#4F4CE5] p-3 mb-4 text-white text-center text-sm rounded-full">
          COMING SOON
        </button>
      </div>
    </div>
  );
};

export default FeatureItem;
