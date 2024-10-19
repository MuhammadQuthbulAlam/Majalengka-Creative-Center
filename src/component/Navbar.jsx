import NavImg from "../assets/images/LOGO MCC_120822.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrool, setScrool] = useState(false);

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("Testing");
        setScrool(true);
        setShow(false);
      } else setScrool(false);
    });
  });

  let scroolActive = scrool ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scroolActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1>
              <img src={NavImg} alt="Navbar Img" className="w-24" />
            </h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full 
            md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded 
          shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="#home" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-bar-chart-box-line text-3xl md:hidden block"></i>
              <a href="#visimisi" className="font-medium opacity-75">
                Visi & Misi
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-organization-chart text-3xl md:hidden block"></i>
              <a href="#organisasi" className="font-medium opacity-75">
                Struktur Organisasi
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-gallery-view-2 text-3xl md:hidden block"></i>
              <a href="#galeri" className="font-medium opacity-75">
                Galeri
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-profile-line text-3xl md:hidden block"></i>
              <a href="#profile" className="font-medium opacity-75">
                Profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-contacts-book-3-fill text-3xl md:hidden block"></i>
              <a href="#kontak" className="font-medium opacity-75">
                Kontak
              </a>
            </li>
          </ul>
          <div className="Social flex items-center gap-2">
            <a
              href="#social"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Sosial Media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
