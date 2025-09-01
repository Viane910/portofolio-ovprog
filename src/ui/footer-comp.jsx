import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo/logo.png';
import { columns, policies } from '@/data/data-footer';

export default function FooterComp() {
  return (
    <footer className="bg-first w-full px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & name */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <h3 className="text-xl font-bold text-third">Ovprog</h3>
            </div>
          </div>

          {/* Footer columns */}
          {columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-fourth text-md font-semibold mb-2">{column.title}</h3>
              <ul className="space-y-1">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {'to' in link ? (
                      <Link to={link.to} className="text-sm text-third hover:underline">
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-third hover:underline"
                      >
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-sm text-fourth">
          <div>© 2025 My Portfolio. All rights reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            {policies.map((policy, idx) =>
              'to' in policy ? (
                <Link key={idx} to={policy.to} className="hover:underline">
                  {policy.text}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={policy.href}
                  className="hover:underline"
                  target={policy.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {policy.text}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
