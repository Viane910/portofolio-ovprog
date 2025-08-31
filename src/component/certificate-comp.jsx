import React, { useState } from 'react';
import { DataSertifikat } from '@/data/data-sertifikat';
import { IconSquareX } from '@tabler/icons-react';

export default function CertificateComp() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section>
      <div className="p-8">
        <h1 className="text-4xl text-second text-center font-semibold pb-8">Certificates</h1>

        {/* Grid Certificates */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DataSertifikat.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-lg shadow-md overflow-hidden flex flex-col h-full bg-white"
            >
              <img
                alt={item.Judul}
                src={item.Gambar}
                className="object-cover w-full h-48 sm:h-64 md:h-80 cursor-pointer"
                onClick={() => setSelectedImg(item.Gambar)}
              />
              <div className="p-6 space-y-2 flex flex-col flex-grow justify-between">
                <h3 className="text-2xl font-semibold text-center group-hover:underline group-focus:underline">
                  {item.Judul}
                </h3>
                <span className="text-xs text-gray-700 block text-center">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImg}
                alt="Preview"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <button onClick={() => setSelectedImg(null)} className="absolute top-4 right-2 ">
                <IconSquareX stroke={1.5} className="text-second w-10 h-10" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
