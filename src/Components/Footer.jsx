import React from 'react';
import { MapPin, Phone, Printer, User, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-[#4212de] text-xl font-semibold mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4212de] mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300">+91 755 4051000, 4052000</p>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300">+91-755 2670562</p>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-[#4212de] text-xl font-semibold mb-6">COORDINATORS</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300"></p>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300"></p>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-[#4212de] text-xl font-semibold mb-6">COLLABORATORS</h3>
            <div className="space-y-4">
              
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300"></p>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-[#4212de] flex-shrink-0" />
                <p className="text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            <span className="text-yellow-500">© 2025 Secret-Box . All Rights Reserved |</span>{' '}
            <a href="#" className="text-[#4212de] hover:text-blue-300 transition-colors">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#4212de] hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}