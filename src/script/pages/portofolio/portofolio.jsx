import GameSectComp from '@/component/gameSect-comp';
import HeaderComp from '@/ui/header-comp';
import OtherSectComp from '@/component/otherSect-comp';
import WebSectComp from '@/component/websiteSect-comp';
import FooterComp from '@/ui/footer-comp';

export const metadata = {
  title: 'Portofolio',
};

export default function PortofolioPage() {
  return (
    <>
      <HeaderComp />
      {/* <section>
        <div>
          <h1 className="text-4xl text-second font-bold justify-center text-center p-4">
            All Experience
          </h1>
        </div>
      </section> */}
      {/* Web Section */}
      <WebSectComp />
      {/* Game Section */}
      <GameSectComp />
      {/* Other Section */}
      <OtherSectComp />
      {/* Footer Section */}
      <FooterComp />
    </>
  );
}
