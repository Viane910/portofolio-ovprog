import React from 'react';
import HeaderComp from '@/ui/header-comp';
import FooterComp from '@/ui/footer-comp';
import Logo from '@/assets/logo/logo.png';

export default function ContactPage() {
  return (
    <>
      <HeaderComp />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-second">Contact Me</h2>
            <p className="mt-2 text-gray-600">
              If you want to connect with me, feel free to reach out through any of the channels
              below.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h4 className="font-semibold text-second">Email</h4>
                  <p className="text-sm text-gray-600">Let's chat via email</p>
                  <p>
                    <a href="mailto:doktaviane910@gmail.com" className="text-blue-600">
                      Chat Me
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-second">LinkedIn</h4>
                  <p className="text-sm text-gray-600">Let's connect on LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/dwioktaviane/"
                    className="text-blue-600 cursor-pointer"
                  >
                    Start Connect
                  </a>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4">
                <span className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-second">Instagram</h4>
                  <p className="text-sm text-gray-600">See my Collection, Work, or Art</p>
                  <a
                    href="https://www.instagram.com/ovprog/"
                    className="text-blue-600 cursor-pointer"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h3 className="text-lg font-semibold text-second mb-4">Send us a message</h3>
              <p className="text-sm text-gray-600 mb-6">
                Fill out the form below and we’ll get back to you within 24 hours.
              </p>
              <div className="mb-6">
                <img src={Logo} alt="Logo" className="h-52 mx-auto" />
              </div>
              {/* <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="border rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="border rounded-md p-2 w-full"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border rounded-md p-2 w-full"
                />
                <input type="text" placeholder="Company" className="border rounded-md p-2 w-full" />
                <textarea
                  placeholder="Message *"
                  rows="4"
                  className="border rounded-md p-2 w-full"
                ></textarea>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 underline">
                      Privacy Policy
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
                >
                  Submit
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}
