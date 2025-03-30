import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t bg-background py-4 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center font-bold text-xl">
              <a href='/'>
              <span className="text-black">Learn</span>
              <span className="text-[#008CFF]">Sync</span>
              </a>
            </div>
            <p className="text-md text-left text-gray-600">
              Transforming education with AI-powered learning tools and interactive features.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Platform</h3>
            <ul className="space-y-2 text-md">
              <li><Link to="#" className="text-gray-600 hover:text-black">Features</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">For Students</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">For Teachers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Resources</h3>
            <ul className="space-y-2 text-md">
              <li><Link to="#" className="text-gray-600 hover:text-black">Documentation</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Tutorials</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Support</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-black">Company</h3>
            <ul className="space-y-2 text-md">
              <li><Link to="#" className="text-gray-600 hover:text-black">About</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Contact</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
