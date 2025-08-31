import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../data/menu';

export default function MobileComp() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Tombol Hamburger */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-third focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Drawer Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-72 bg-third shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-14 flex flex-col space-y-6 h-full">
          {/* Tombol Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-first hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* List Menu */}
          {menus.map((item, index) =>
            item.items && item.items.length > 0 ? (
              <div key={item.name}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                  aria-expanded={openDropdown === index}
                  className="w-full text-left text-first text-lg font-semibold hover:text-berry-red flex justify-between items-center gap-10"
                >
                  {item.name}
                  <span>{openDropdown === index ? '▲' : '▼'}</span>
                </button>

                {openDropdown === index && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    {item.items.map((sub) => (
                      <Link
                        key={`${item.name}-${sub.name}`}
                        to={sub.url}
                        className="text-gray-700 hover:text-first text-sm"
                        onClick={() => setOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.url}
                className="text-first text-lg font-semibold hover:text-berry-red"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </>
  );
}
