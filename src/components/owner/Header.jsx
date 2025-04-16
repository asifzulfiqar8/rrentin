'use client';
import { NotificationBoxIcon, ReloadIcon } from '@/assets/icon';
import { getDate } from '@/utils/getDate';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import GoogleTranslate from '../googleTranslate';
import NotificationMenu from '../shared/NotificationMenu';
import Aside from './Aside';

const Header = () => {
  const [date, setDate] = useState('');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    setDate(getDate());

    const handleClickOutside = (e) => {
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [mobileNav, setMobileNav] = useState(false);

  const mobileNavHandler = () => {
    setMobileNav(!mobileNav); // Toggle the mobileNav state
  };

  return (
    <div>
      <div className="flex items-center p-4 justify-between xl:hidden py-4">
        <div className="bg-primary p-2 rounded-md cursor-pointer" onClick={mobileNavHandler}>
          <RxHamburgerMenu color="#fff" fontSize={20} />
        </div>
        <div>
          <Link href="/owner">
            <Image
              src="/images/default/home.png"
              width={35}
              height={35}
              alt="logo"
              className="mx-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`block xl:hidden fixed w-full h-full inset-0 bg-[#00000071] z-50 transition-all duration-500 ${
          mobileNav ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileNav(false)} // Close when clicking outside
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 h-full  w-[246px] transition-transform duration-500 ${
            mobileNav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Aside mobileNav={mobileNav} setMobileNav={setMobileNav} /> {/* Your Sidebar component */}
        </div>
      </div>
      <header className="bg-white rounded-lg h-[74px] p-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl lg:text-[22px] font-semibold text-text-textColor capitalize">
            Owner
          </h2>
          <p className="text-xs text-[#969696]">{date}</p>
        </div>
        <div className="flex items-center gap-[14px]">
          <SwitchButton />
          <div className="relative" ref={notificationRef}>
            <button
              className="p-2 rounded-[5px] cursor-pointer"
              style={{ boxShadow: '0px 1px 6px 0px #00000014' }}
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <NotificationBoxIcon />
            </button>
            <NotificationMenu isNotificationOpen={isNotificationOpen} />
          </div>
          {/* <LanguageSwitch /> */}
          <GoogleTranslate />
        </div>
      </header>
    </div>
  );
};

export default Header;

const SwitchButton = () => (
  <button
    className="hidden md:flex items-center gap-3 py-2 px-5 rounded-[5px] text-sm md:text-base font-medium text-text-textColor cursor-pointer"
    style={{ boxShadow: '0px 1px 6px 0px #00000014' }}
  >
    <ReloadIcon />
    Switch to Tenant
  </button>
);

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState('th');
  const router = useRouter();

  const changeLanguage = (lang) => {
    if (lang === locale) return;
    localStorage.setItem('lang', lang);
    setLocale(lang);
    router.refresh();
  };
  return (
    <div className="relative">
      <button
        className="py-2 px-5 rounded-[5px] hidden md:flex items-center gap-1 text-xs text-[#969696] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{ boxShadow: '0px 1px 6px 0px #00000014' }}
      >
        <Image
          src={`/images/default/${locale === 'en' ? 'english' : 'thai'}-flag.png`}
          width={20}
          height={13}
          alt="flag"
          className="rounded-[] object-cover w-[20px]"
        />
        {locale === 'en' ? 'English' : 'ไทย'}
        <IoIosArrowDown className="text-base text-[#969696]" />
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 w-[120px] bg-white rounded-md shadow-lg">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              changeLanguage('en');
              setIsOpen(false);
            }}
          >
            🇬🇧 English
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              changeLanguage('th');
              setIsOpen(false);
            }}
          >
            🇹🇭 ไทย
          </button>
        </div>
      )}
    </div>
  );
};
