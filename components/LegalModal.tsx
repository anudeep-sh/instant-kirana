
import React from 'react';
import { X, Shield, FileText, Truck, RefreshCw, HeartPulse } from 'lucide-react';
import { LegalType } from '../App';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: LegalType;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. Introduction',
          text: 'At MTST SEVA Technologies Pvt. Ltd. (ecart), we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.'
        },
        {
          heading: '2. Data Collection',
          text: 'We collect information such as your name, mobile number, delivery address, and email when you place an order. We also collect device information and location data to facilitate local deliveries in the Warangal region.'
        }
      ]
    },
    safety: {
      title: 'Safety Policy',
      icon: <HeartPulse className="text-red-500" size={24} />,
      sections: [
        {
          heading: '1. Product Quality & Hygiene',
          text: 'MTST SEVA Technologies Pvt. Ltd. adheres to strict FSSAI guidelines. All fresh produce and groceries are stored in temperature-controlled environments.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <FileText className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. General Terms',
          text: 'These terms govern your use of the ecart platform provided by MTST SEVA Technologies Pvt. Ltd.'
        }
      ]
    },
    return: {
      title: 'Refund Policy',
      icon: <RefreshCw className="text-red-500" size={24} />,
      sections: [
        {
          heading: '1. Eligibility for Refund',
          text: 'MTST SEVA Technologies Pvt. Ltd. offers refunds for items that are damaged, expired, or significantly different from their description.'
        }
      ]
    },
    shipping: {
      title: 'Shipping Policy',
      icon: <Truck className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. Delivery Area',
          text: 'Currently, ecart operates exclusively in the Warangal region, serving Shivnagar and surrounding neighborhoods.'
        }
      ]
    }
  };

  const activeContent = content[type] || content.privacy;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-blue-900/60 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-[3rem] shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-500 flex flex-col border-4 border-white/50">
        <div className="p-10 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-white rounded-3xl shadow-xl rotate-3">
              {activeContent.icon}
            </div>
            <div>
                <h2 className="text-3xl font-black text-gray-900 italic tracking-tight">{activeContent.title}</h2>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-60">ecart Compliance</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-red-50 hover:text-red-500 rounded-full transition-all text-gray-400 border border-transparent hover:border-red-100"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 no-scrollbar">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-black text-gray-900 italic underline decoration-blue-500/30 decoration-8 underline-offset-[-2px]">{section.heading}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{section.text}</p>
            </div>
          ))}
          <div className="pt-10 border-t border-dashed border-gray-100 text-center">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} MTST SEVA Technologies Pvt. Ltd.
            </p>
          </div>
        </div>

        <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black px-12 py-4 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-blue-100 uppercase tracking-widest text-xs"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
