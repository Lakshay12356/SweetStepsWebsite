import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            SweetSteps
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Preserving your most precious memories in beautiful 3D hand and foot impressions.
            Crafted with love and precision.
          </p>
          <div className="flex space-x-4 pt-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg tracking-tight">Explore</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Our Creations</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Newsletter / Contact (Simplified) */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg tracking-tight">Visit Us</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Creating timeless memories for families across the region.
            <br />
            <span className="block mt-4 font-medium text-foreground">contact@sweetsteps.com</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Sweet Steps. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
