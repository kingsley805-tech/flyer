import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from './assets/Logo.svg';

function Footer() {
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setIsSubscribed(true); // Mark as subscribed
    setMessage('Subscription successful!');
  };

  return (
    <footer className="w-full bg-white shadow-2xl text-gray-900 py-10 px-4 md:px-8 back">
      {/* Footer Top: Logo and Contact Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
        <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/4">
          <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />
          <p className="text-gray-900 mt-2 max-w-xs mx-auto md:mx-0">
            Your trusted tech partner. Empowering modern solutions with a passion for innovation.
          </p>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Get in Touch</h3>
          <p className="text-gray-900">For more enquiries:</p>
          <a 
            href="mailto:info@6lacktech.com" 
            className="text-gray-600 hover:text-gray-800 font-medium hover:underline block"
          >
            info@6lacktech.com
          </a>
          <p className="mt-2">Location: Modern City (Modec)</p>
          <p className="mt-2">
            Phone: <a href="tel:+233245182867" className="text-gray-600 hover:text-gray-800 hover:underline">+233 24 518 2867</a>
          </p>
          <p className="mt-2">
            Phone: <a href="tel:+233245182867" className="text-gray-600 hover:text-gray-800 hover:underline">+233 50 073 3307</a>
          </p>
        </div>

        {/* Social Media */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-blue-500"><FaFacebookF size={20} /></a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Newsletter</h3>
          <p className="text-gray-900 mb-4">Stay updated with our latest news</p>
          {!isSubscribed ? (
            <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 ring-4 ring-gray-900 text-black rounded-md"
                required
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white font-bold px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-500 mt-2">{message}</p>
          )}
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="text-gray-900 text-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 6lackTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
