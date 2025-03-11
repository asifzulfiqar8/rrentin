import Image from "next/image";

const Layout = () => {
  return (
    <section className="w-full bg-[url('/images/default/auth-bg.png')] bg-cover bg-bottom bg-no-repeat h-full lg:h-screen">
      <section className="container mx-auto px-5 py-10 lg:py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[60px] relative h-full">
        {/* logo */}
        <Image
          src="/images/default/white-logo.png"
          width={219}
          height={60}
          alt="logo"
          className="absolute top-[80px] left-5"
        />
        <div className="flex justify-center"></div>
        <div className="flex justify-center"></div>
      </section>
    </section>
  );
};

export default Layout;

const Title = ({ title }) => <h1 className="text-white">Welcome to RRentin</h1>;
