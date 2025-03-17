import Image from "next/image";
import "react-phone-input-2/lib/style.css";

const Layout = ({ title, secondTitle, thirdTitle, children }) => {
  return (
    <section className="w-full bg-[url('/images/default/auth-bg.png')] bg-cover bg-bottom bg-no-repeat h-full lg:h-screen">
      <section className="container mx-auto px-5 py-10 lg:py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] relative h-full overflow-auto scroll-0">
        {/* logo */}
        <Image
          src="/images/default/white-logo.png"
          width={219}
          height={60}
          alt="logo"
          className="lg:absolute lg:top-[80px] lg:left-5 mx-auto w-[150px] lg:w-[219px] h-auto"
        />
        <div className="flex flex-col justify-center">
          <Title title={title} />
          <SecondTitle title={secondTitle} />
          <ThirdTitle title={thirdTitle} />
        </div>
        <div className="flex items-center">{children}</div>
      </section>
    </section>
  );
};

export default Layout;

const Title = ({ title }) => (
  <h1 className="text-white text-3xl lg:text-4xl font-bold text-center lg:text-left">
    {title}
  </h1>
);

const SecondTitle = ({ title }) => (
  <h6 className="text-white text-lg lg:text-xl font-semibold mt-3 hidden lg:block">
    {title}
  </h6>
);

const ThirdTitle = ({ title }) => (
  <h6 className="text-white text-sm lg:text-lg font-medium mt-3 text-center lg:text-left">
    {title}
  </h6>
);
