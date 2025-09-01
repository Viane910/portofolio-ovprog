import HeaderComp from '@/ui/header-comp';
import QuoteComp from '@/component/quote-comp';
import FooterComp from '@/ui/footer-comp';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <HeaderComp />
      <section className="pt-2 sm:pt-8 mb-10">
        <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-second sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Enjoy Exploring The Works of My Creativity
            </p>
            <QuoteComp />
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                to="/about"
                className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-first border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Get to know me
              </Link>
              <Link
                to="/portofolio"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-second hover:text-white transition-all duration-200 bg-gray-100 border-2 border-second sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                All my works
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </>
  );
}
