const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          Copyright &copy; 2024{" "}
          <span className="font-bold">Mochan Endeavour</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-1">
          <a href="https://www.facebook.com/profile.php?id=61558329437743">
            <i className="ri-facebook-circle-fill text-2xl"></i>
          </a>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <a href="https://www.instagram.com/ekrafmjlka.official/">
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
