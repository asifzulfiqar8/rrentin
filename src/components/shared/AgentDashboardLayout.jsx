import AgentAside from '../agent/AgentAside';
import AgentHeader from '../agent/AgentHeader';

function AgentDashboardLayout({ children }) {
  return (
    <section className="bg-[#3582e715] w-screen h-screen grid place-items-center overflow-hidden">
      <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-6">
        <AgentAside />
        <div className="flex-1 w-full">
          <AgentHeader />
          <main className="mt-[14px] h-[calc(100vh-180px)]  xl:h-[calc(100vh-104px)] overflow-y-scroll overflow-x-hidden scroll-0">
            {children}
          </main>
        </div>
      </section>
    </section>
  );
}

export default AgentDashboardLayout;
