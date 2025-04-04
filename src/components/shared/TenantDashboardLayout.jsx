import React from 'react'
import TenantHeader from '../tenant/TenantHeader';
import TenantAside from '../tenant/TenantAside';

function TenantDashboardLayout({children}) {
    return (
        <section className="bg-[#3582e715] w-screen h-screen grid place-items-center overflow-hidden">
          <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-6">
            <TenantAside/>
            <div className="flex-1">
              <TenantHeader/>
              <main className="mt-[14px] h-[calc(100vh-104px)] overflow-y-scroll overflow-x-hidden scroll-0">
                {children}
              </main>
            </div>
          </section>
        </section>
      );
}

export default TenantDashboardLayout