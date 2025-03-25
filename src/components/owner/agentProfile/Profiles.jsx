'use client'
import { useState } from 'react';
import BasicDetails from './BasicDetails';
import LinkBuildings from './LinkBuildings';
import Transaction from './Transaction';
const Profile = () => {

  const [activeTab, setActiveTab] = useState('profile');

  const renderComponent = () => {
    switch (activeTab) {
      case 'profile':
        return <BasicDetails />;
      case 'subscription':
        return <LinkBuildings />;
      case 'plans':
        return <Transaction />;
      default:
        return null;
    }
  };

  const buttonStyle = (tab) =>
    ` rounded w-[131px] ${activeTab === tab ? 'bg-primary text-white' : 'bg-transparent text-gray-400'
    }`;



  return (
    <div className='py-4 '>
      <div className="bg-white p-1 flex justify-center flex-col lg:flex-row space-x-2 w-[140px] lg:w-[417px] item-center  lg:h-10 rounded-md">
        <section className='flex flex-col lg:flex-row'>

          <button className={buttonStyle('profile')} onClick={() => setActiveTab('profile')}>
            Profile
          </button>
          <button className={buttonStyle('subscription')} onClick={() => setActiveTab('subscription')}>
            Subscription
          </button>
          <button className={buttonStyle('plans')} onClick={() => setActiveTab('plans')}>
            Plans
          </button>
        </section>
      </div>

      <div className="mt-10 flex ">{renderComponent()}</div>
    </div>
  )
}

export default Profile
