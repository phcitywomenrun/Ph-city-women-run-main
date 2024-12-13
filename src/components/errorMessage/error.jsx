import icon from "../contents/image/images.png";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full min-h-[20px] py-10 px-5 bg-white text-center">
      <img src={icon} className="h-auto w-[80px]" alt="" />
      <p className="text-[25px] text-gray-700">Let's get you back online</p>
    </div>
  );
};

export default Error;
