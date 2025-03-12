import Aside from "../owner/Aside";
import Header from "../owner/Header";

const DashboardLayout = ({ children }) => {
  return (
    <section className="bg-[#3582e715] w-screen h-screen grid place-items-center overflow-hidden">
      <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-6">
        <Aside />
        <div className="flex-1">
          <Header />
          <main className="mt-[14px] h-[calc(100vh-104px)] overflow-y-scroll custom-scroll">
            {children}
          </main>
        </div>
      </section>
    </section>
  );
};

export default DashboardLayout;
