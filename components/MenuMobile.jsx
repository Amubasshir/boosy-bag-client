import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Category', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
];
const showMenuData = [
  { id: 1, name: 'Jordan', doc_count: 11 },
  { id: 2, name: 'Sneaker', doc_count: 8 },
  { id: 3, name: 'Running Shoes', doc_count: 64 },
  { id: 4, name: 'Football shoes', doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="absolute top-12 left-0 flex h-[calc(100vh-48px)] w-full flex-col border-t bg-white font-bold text-black md:hidden ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className=" relative flex cursor-pointer flex-col border-b py-4 px-5 "
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="-mx-5 mt-4 -mb-4 bg-black/20">
                    {showMenuData.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                          href="/"
                        >
                          <li className="justify-between border-t py-4 px-8 ">
                            {subMenu.name}
                            <span className="text-xs opacity-50">17</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="border-b py-4 px-5">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
