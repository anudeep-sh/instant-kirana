
import React from 'react';
import { X, Shield, FileText, Truck, Building2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'shipping' | 'corporate';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'We collect information you provide directly during the guest checkout process. This includes your name, email, phone number, and delivery address in the Hyderabad region.'
        },
        {
          heading: '2. How We Use Your Information',
          text: 'Your data helps us process transactions, ensure lightning-fast delivery from our KPHB Colony hub, and improve our services. We operate under AAryan Maruti Communications Private Limited.'
        },
        {
          heading: '3. Data Security',
          text: 'We implement industry-standard 256-bit SSL encryption to protect your personal information and payment details during transit.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <FileText className="text-blue-400" size={24} />,
      sections: [
        {
          heading: '1. Acceptance of Terms',
          text: 'By using Marutifresh, you agree to be bound by these terms. Our services are provided by AAryan Maruti Communications Private Limited, headquartered at D No 15-29-934/RNR Road No 3 KPHB Colony, Hyderabad, Medchal, Malkajgiri, 500072, Telangana, India.'
        },
        {
          heading: '2. Delivery Policy',
          text: 'We aim for delivery within 15-30 minutes. However, delivery times may vary based on local conditions in KPHB Colony and surroundings.'
        },
        {
          heading: '3. Pricing and Availability',
          text: 'While we strive for accuracy, prices and stock levels for fresh produce and staples are subject to change without notice.'
        }
      ]
    },
    shipping: {
      title: 'Shipping Policy',
      icon: <Truck className="text-emerald-600" size={24} />,
      sections: [
        {
          heading: '1. Delivery Zone',
          text: 'Marutifresh currently offers hyper-local delivery in KPHB Colony, Kukatpally, and surrounding neighborhoods in Hyderabad. Our specialized logistics team ensures peak freshness by operating within a 5km radius of our central hub.'
        },
        {
          heading: '2. Shipping Fees',
          text: 'We offer free delivery on all orders above ₹500. For orders below this threshold, a flat nominal delivery fee of ₹40 applies to help maintain our rapid courier network.'
        },
        {
          heading: '3. Real-Time Tracking',
          text: 'Every order is tracked in real-time. Once your artisan goods leave our hub, you will receive notifications until the moment they arrive at your doorstep. We target a 20-minute delivery window for all essentials.'
        }
      ]
    },
    corporate: {
      title: 'Corporate Information',
      icon: <Building2 className="text-indigo-600" size={24} />,
      sections: [
        {
          heading: '1. Legal Entity',
          text: 'Marutifresh is a premium retail vertical owned and operated by AAryan Maruti Communications Private Limited, a company registered in India with a focus on revolutionizing the artisan supply chain.'
        },
        {
          heading: '2. Vision & Mission',
          text: 'Our mission is to bridge the gap between world-class artisan producers and discerning households through technology-driven logistics and uncompromising quality control.'
        },
        {
          heading: '3. Registered Office',
          text: 'D No 15-29-934/RNR Road No 3 KPHB Colony, Hyderabad, Medchal, Malkajgiri, 500072, Telangana, India. For partnership inquiries or support, please contact us at support@amcashpay.com.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[3rem] shadow-2xl animate-in zoom-in duration-300 flex flex-col border border-slate-100">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white rounded-2xl shadow-sm">
              {activeContent.icon}
            </div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">{activeContent.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full block"></span>
                {section.heading}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{section.text}</p>
            </div>
          ))}
          <div className="pt-10 border-t border-slate-100 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
              Latest Revision: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="p-8 border-t border-slate-50 bg-slate-50/50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white font-black px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100/50"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
