import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            {/* Made with <Heart size={16} className="text-red-500 fill-red-500" /> by John Doe */}
          </p>
          <p className="text-sm mt-2">
            {/* © 2024 All rights reserved. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;