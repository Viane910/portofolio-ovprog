import CertificateComp from '@/component/certificate-comp';
import HeaderComp from '@/ui/header-comp';
import FooterComp from '@/ui/footer-comp';
import ProfilePicture from '../../../assets/images/me.jpeg';

export default function AboutPage() {
  return (
    <>
      <HeaderComp />
      <section className="min-h-screen p-4">
        <h1 className="text-center text-5xl font-bold text-second p-8">
          Website and Game Developer
        </h1>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={ProfilePicture}
              alt="Dwi Oktaviane"
              className="object-cover w-full rounded sm:h-full lg:col-span-7 justify-center p-6"
            />
            <div className="p-4 space-y-2 lg:col-span-5">
              <h1 className="text-4xl font-semibold sm:text-4xl text-center text-second">
                Dwi Oktaviane
              </h1>
              <p className="text-base text-gray-800 font-medium p-2">
                Experienced and highly skilled Full Stack Developer with over 2 years of experience
                in web development. Holding a degree in Information Technology from Bina Sarana
                Informatika University with a GPA of 3.88 over 8 semesters. Proficient in developing
                and managing projects including Next.js, React.js, PHP Laravel, HTML, CSS,
                JavaScript, and other languages.
              </p>
              <p className="text-base text-gray-800 font-medium p-2">
                Also Including network infrastructure, including cables maintenance, topology
                design, and system optimization. Passionate about building scalable and efficient
                digital solutions while ensuring seamless network connectivity.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Certificates */}
      <CertificateComp />

      {/* Footer pindah ke sini */}
      <FooterComp />
    </>
  );
}
