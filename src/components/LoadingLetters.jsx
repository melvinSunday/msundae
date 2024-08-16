import "./Loading.css";
import { Helmet } from "react-helmet";

const LoadingOverlay = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
        <div className="absolute inset-0 bg-[#111010]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1E201E,transparent)]"></div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mb-[50px] relative z-10">
          {["M", "E", "L", "V", "I", "N"].map((letter, index) => (
            <div
              key={index}
              className="relative w-[35px] h-[35px] flex items-center justify-center"
            >
              <div
                className="absolute text-[35px] font-['inter'] font-extralight text-white tracking-[0.1em] animate-jumping-dots"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadingOverlay;
