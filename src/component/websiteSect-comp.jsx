'use client';
import React from 'react';
import { DataWebsiteProject } from '@/data/data-project';

export default function WebSectComp() {
  return (
    <>
      <section className="text-second py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Website Project</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Here are some of the website projects I've worked on. Feel free to explore and check
              them out!
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DataWebsiteProject.map((item, index) => (
              <div
                key={index}
                className="bg-third rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2 mb-4">{item.desc}</p>
                  <a href={item.link} className="text-second text-sm font-medium hover:underline">
                    View Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
