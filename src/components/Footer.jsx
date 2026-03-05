import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 grid grid-cols-1 sm:grid-cols-5 gap-4">
      {/* About Section */}
      <div>
        <h4 className="font-semibold mb-2">CS – Ticket System</h4>
        <p>
          CS – Ticket System helps companies manage customer support efficiently. 
          Track, resolve, and organize tickets in one place for better productivity.
        </p>
      </div>

      {/* Company Section */}
      <div>
        <h4 className="font-semibold mb-2">Company</h4>
        <ul className="space-y-1">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/mission" className="hover:underline">Our Mission</a></li>
          <li><a href="/contact" className="hover:underline">Contact Sales</a></li>
        </ul>
      </div>

      {/* Services & Products Section */}
      <div>
        <h4 className="font-semibold mb-2">Services & Products</h4>
        <ul className="space-y-1">
          <li><a href="/customer-stories" className="hover:underline">Customer Stories</a></li>
          <li><a href="/download" className="hover:underline">Download Apps</a></li>
        </ul>
      </div>

      {/* Information Section */}
      <div>
        <h4 className="font-semibold mb-2">Information</h4>
        <ul className="space-y-1">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="/careers" className="hover:underline">Join Us</a></li>
        </ul>
      </div>

      {/* Social & Contact Section */}
      <div>
        <h4 className="font-semibold mb-2">Social & Contact</h4>
        <ul className="space-y-1">
          <li>🐦 Twitter: <a href="https://twitter.com/CSTicketSys" className="hover:underline">@CSTicketSys</a></li>
          <li>📘 Facebook: <a href="https://facebook.com/CSTicketSys" className="hover:underline">CS Ticket System</a></li>
          <li>💼 LinkedIn: <a href="https://linkedin.com/company/csticketsys" className="hover:underline">CS Ticket System</a></li>
          <li>✉️ Email: <a href="mailto:support@cs.com" className="hover:underline">support@cs.com</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="col-span-1 sm:col-span-5 text-center mt-4 text-sm">
        © 2026 CS – Ticket System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;