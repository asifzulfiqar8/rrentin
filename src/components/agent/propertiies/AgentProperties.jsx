'use client';
import { myPropertiesData } from '@/data/data';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import AgentPropertiesHeader from './AgentPropertiesHeader';
import AgentPropertyCard from './AgentPropertyCard';
const ShowMap = dynamic(() => import('@/components/shared/ShowMap'), {
  ssr: false,
});

const AgentProperties = () => {
  const [tabView, setTabView] = useState('Grid View');
  return (
    <section
      className="bg-white rounded-lg p-4 mt-4"
      style={{ boxShadow: '0px 2px 12px 0px #3582E71A' }}
    >
      <AgentPropertiesHeader tabView={tabView} setTabView={setTabView} />
      <div className="mt-5">
        {tabView === 'Grid View' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
            {myPropertiesData.map((card, i) => (
              <AgentPropertyCard data={card} key={i} />
            ))}
          </div>
        ) : (
          <ShowMap />
        )}
      </div>
    </section>
  );
};

export default AgentProperties;
