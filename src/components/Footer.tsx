import Logo from '../assets/Icons/Logo.png';
const Footer = () => (
  <footer className="text-md text-gray-500 px-8 pb-10 border-t pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto font-[Inter]">
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Sweet Steps Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-semibold text-gray-800">Sweet Steps</span>
      </div>
      <ul className="mt-2 space-y-1 text-sm">
        <li>Email: sweetsteps05@gmail.com</li>
        <li>Phone: +91 9413867088</li>
        <li>Visit Us</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Connect</h4>
      <ul className="space-y-1">
        <li><a href="https://www.instagram.com/sweet_.steps__/">Instagram</a></li>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://wa.me/9413867088">WhatsApp</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-2">About</h4>
      <ul className="space-y-1">
        <li>Our Story</li>
        <li>FAQ</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="col-span-full text-center text-sm text-gray-400 mt-8">
      © 2025 Sweet Steps — Crafted with love in every step.
    </div>
  </footer>
);

export default Footer;
