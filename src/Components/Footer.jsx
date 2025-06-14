import React from 'react';
import { MapPin, Phone, Printer, User, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4212de] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-200 mt-1 flex-shrink-0" />
                <p className="text-purple-100 leading-relaxed">
                  Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100">+91 755 4051000, 4052000</p>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100">+91-755 2670562</p>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">COORDINATORS</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100"></p>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100"></p>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">COLLABORATORS</h3>
            <div className="space-y-4">
              
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100"></p>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-purple-100"></p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-purple-400 pt-6">
          <p className="text-center text-purple-200">
            <span className="text-white">© 2025 Secret-Box . All Rights Reserved |</span>{' '}
            <a href="#" className="text-purple-100 hover:text-white transition-colors">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}