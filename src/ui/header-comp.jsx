import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../data/menu';
import MobileComp from './mobile-comp';
import logoOv from '../assets/logo/logo.png';

export default function HeaderComp() {
  return (
    <>
      <nav className="bg-first">
        {/* Logo + Judul */}
        <div className="flex items-center justify-between px-4 py-2 md:justify-center">
          <div className="flex items-center gap-3">
            <img src={logoOv} alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl text-third font-semibold">Ovprog</h1>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <MobileComp />
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center justify-center p-4 mx-auto">
          {menus.map((menu) => (
            <div key={menu.name} className="relative group mx-2 lg:mx-6">
              {menu.url ? (
                <Link
                  to={menu.url}
                  className="text-third border-b-2 font-semibold text-lg border-transparent hover:border-third transition-colors"
                >
                  {menu.name}
                </Link>
              ) : (
                <span className="cursor-default select-none text-third font-semibold text-lg">
                  {menu.name}
                </span>
              )}

              {menu.items.length > 0 && (
                <ul className="absolute left-0 top-full mt-2 bg-third shadow-lg rounded-md py-2 px-4 min-w-[200px] hidden group-hover:block z-50">
                  {menu.items.map((sub) => (
                    <li key={sub.name} className="py-1">
                      <Link
                        to={sub.url}
                        className="block text-gray-700 hover:text-first transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
