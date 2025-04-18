'use client';
import {
  ArrowIcon,
  DashboardIcon,
  InsightsIcon,
  MembershipIcon,
  MessagesIcon,
  NotificationIcon,
  OnDemandIcon,
  PaymentsIcon,
  PropertiesIcon,
  ProposalsIcon,
  TenantIcon,
} from '@/assets/icon';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

const Aside = ({ mobileNav, setMobileNav }) => {
  const { id } = useParams();
  const params = useParams();
  const tenantId = params.tenantId;
  const agentid = params.agentid;
  const pages = [
    {
      id: 1,
      title: 'Dashboard',
      link: ['/owner', '/owner/add-property'],
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      title: 'Properties',
      link: ['/owner/properties', `/owner/properties/details/${id}`],
      icon: <PropertiesIcon />,
    },
    {
      id: 3,
      title: 'Tenants',
      link: ['/owner/tenants', `/owner/tenants/tenants-profile/${tenantId}`],
      icon: <TenantIcon />,
    },
    {
      id: 4,
      title: 'My Agent',
      link: ['/owner/agent', `/owner/agent/agent-profile/${agentid}`],
      icon: <OnDemandIcon />,
    },
    {
      id: 4,
      title: 'On Demand Service',
      link: ['/owner/on-demand-service', '/owner/inspection', '/owner/agent/hiring-new-agent'],
      icon: <OnDemandIcon />,
    },
    {
      id: 5,
      title: 'Payments',
      link: ['/owner/payments'],
      icon: <PaymentsIcon />,
    },
    {
      id: 6,
      title: 'Insights',
      link: ['/owner/insights'],
      icon: <InsightsIcon />,
    },
    {
      id: 7,
      title: 'Membership',
      link: ['/owner/membership'],
      icon: <MembershipIcon />,
    },
    {
      id: 8,
      title: 'Proposals',
      link: ['/owner/proposals'],
      icon: <ProposalsIcon />,
    },
    {
      id: 9,
      title: 'Notification',
      link: ['/owner/notification'],
      icon: <NotificationIcon />,
    },
    {
      id: 10,
      title: 'Messages',
      link: ['/owner/messages'],
      icon: <MessagesIcon />,
    },
  ];

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside
      className={`relative transition-all duration-300 ${
        mobileNav ? 'block xl:hidden h-full ' : 'hidden xl:block'
      } ${isMenuOpen ? 'w-[84px]' : 'w-[246px]'}`}
    >
      {/* Arrow icon */}
      <div
        className={`absolute top-[37px] -right-[10px] cursor-pointer z-50 transition-all duration-300 hidden xl:block ${
          isMenuOpen ? 'rotate-180' : 'rotate-0'
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ArrowIcon />
      </div>
      <div
        className="w-full h-full bg-white rounded-lg px-[11px] py-5 overflow-y-auto overflow-x-hidden scroll-0 flex flex-col relative"
        style={{ boxShadow: '0px 4px 14px 0px #3582E729' }}
      >
        <Image
          src={isMenuOpen ? '/images/default/home.png' : '/images/default/logo.png'}
          width={isMenuOpen ? 35 : 129}
          height={isMenuOpen ? 35 : 38}
          alt="logo"
          className="mx-auto"
        />
        <div className="mt-5">
          <h4 className={`text-xs text-[#545454] font-bold ${isMenuOpen ? 'text-center' : 'pl-2'}`}>
            MENU
          </h4>
          <div className="mt-3 flex flex-col gap-2">
            {pages.map((page, i) => (
              <LinkItem
                key={i}
                page={page}
                pathname={pathname}
                isMenuOpen={isMenuOpen}
                setMobileNav={setMobileNav}
              />
            ))}
          </div>
          <div className="mt-5 lg:mt-[50px] w-full h-[1px] bg-[#EBEBEB]"></div>
        </div>
        <div className="flex-1 flex items-end mt-5">
          <ProfileSec isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </aside>
  );
};

export default Aside;

const LinkItem = ({ page, pathname, isMenuOpen, setMobileNav }) => {
  const isLinkActive = page?.link.some((item) => item === pathname);
  return (
    <Link
      onClick={() => setMobileNav(false)} // Close when clicking outside
      href={page?.link[0]}
      className={`flex items-center py-[10px] px-[13px] rounded-lg text-sm font-medium transition-all duration-300 ${
        isMenuOpen ? 'gap-0 justify-center' : 'gap-3'
      } ${isLinkActive ? 'bg-[#E8F2FF] text-primary' : 'text-[#1F1F1F]'}`}
    >
      {React.cloneElement(page?.icon, { isLinkActive })}
      <span
        className={`transition-all duration-300 text-nowrap ${
          isMenuOpen ? 'opacity-0 scale-x-0 w-0 h-0' : 'opacity-100 scale-x-100 h-auto w-auto'
        }`}
      >
        {page?.title}
      </span>
      {!isMenuOpen && (page?.title === 'Notification' || page?.title === 'Messages') && (
        <span className="flex-1 flex justify-end">
          <div className="bg-[#FF2F00] w-[27px] h-[18px] rounded-[31px] grid place-items-center text-[10px] font-semibold text-white">
            {page?.title === 'Notification' && '21'}
            {page?.title === 'Messages' && '3'}
          </div>
        </span>
      )}
    </Link>
  );
};

const ProfileSec = ({ isMenuOpen }) => {
  // Local state for the dropdown menu in the profile section.
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="border-t border-[#EBEBEB] flex items-center justify-between gap-4 w-full pt-4 px-3">
      <div className="flex items-center gap-2">
        <Image
          src="/images/default/profile.png"
          width={32}
          height={32}
          alt="profile"
          className="rounded-full size-[32px] object-cover"
        />
        <div
          className={`transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0 scale-x-0 w-0' : 'opacity-100 scale-x-100 w-auto'
          }`}
        >
          <h6 className="text-xs md:text-sm text-[#1F1F1F] leading-none">Alexander</h6>
          <p className="text-[10px] text-[#545454] leading-none mt-1">alex@zemlya.com</p>
        </div>
      </div>
      {!isMenuOpen && (
        <div className="relative inline-block">
          {/* Three dots icon - click to toggle the menu */}
          <BsThreeDots
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#141B34] text-base cursor-pointer "
          />

          {/* Dropdown Menu positioned above the icon */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute w-32 bottom-full mb-2 right-0 bg-white border border-gray-200 rounded shadow-md"
            >
              <button
                onClick={() => console.log('Settings clicked')}
                className=" flex items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <p>Settings</p>
                <IoSettingsOutline />
              </button>
              <button
                onClick={() => console.log('Logout clicked')}
                className=" flex items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <p>Logout</p>
                <MdLogout />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
