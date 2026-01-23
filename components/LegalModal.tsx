
import React from 'react';
import { X, Shield, FileText, Truck, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'shipping' | 'return';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <Shield className="text-green-600" size={24} />,
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'We collect information you provide directly during the checkout process. This includes your name, email, phone number, and delivery address in the Hyderabad region.'
        },
        {
          heading: '2. How We Use Your Information',
          text: 'Your data helps us process transactions and ensure lightning-fast delivery from our Venkatagiri hub. We operate under NEOFIN NEX India Private Limited.'
        },
        {
          heading: '3. Data Security',
          text: 'We implement industry-standard 256-bit SSL encryption to protect your personal information and payment details during transit.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <FileText className="text-orange-500" size={24} />,
      sections: [
        {
          heading: '1. Acceptance of Terms',
          text: 'By using InstantKirana, you agree to be bound by these terms. Our services are provided by NEOFIN NEX India Private Limited, headquartered at Plot no 102, First floor, Sukiran Apartments, Venkatagiri, Yousufguda, Hyderabad, Telangana 500045.'
        },
        {
          heading: '2. Delivery Policy',
          text: 'We aim for delivery within 15-30 minutes. However, delivery times may vary based on local conditions in Venkatagiri and Yousufguda.'
        },
        {
          heading: '3. Pricing and Availability',
          text: 'While we strive for accuracy, prices and stock levels for fresh produce and staples are subject to change without notice.'
        }
      ]
    },
    shipping: {
      title: 'Shipping Policy',
      icon: <Truck className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. Delivery Area',
          text: 'Currently, InstantKirana operates exclusively in the Hyderabad region, serving Yousufguda, Venkatagiri, and surrounding neighborhoods within a 5km radius of our hub.'
        },
        {
          heading: '2. Delivery Times',
          text: 'Our standard delivery time is between 15 to 30 minutes from the time of order confirmation. We operate daily from 6:00 AM to 11:00 PM.'
        },
        {
          heading: '3. Shipping Charges',
          text: 'Delivery is FREE for all orders above ₹500. For orders below this amount, a flat delivery fee of ₹40 applies.'
        }
      ]
    },
    return: {
      title: 'Return & Refund Policy',
      icon: <RefreshCw className="text-red-500" size={24} />,
      sections: [
        {
          heading: '1. Freshness Guarantee',
          text: 'For fresh produce (fruits, vegetables, dairy), we offer a no-questions-asked return at the doorstep if you are not satisfied with the quality at the time of delivery.'
        },
        {
          heading: '2. Return Period',
          text: 'Packaged goods can be returned within 24 hours of delivery, provided the seal is intact and the product is unused. Please retain the original invoice.'
        },
        {
          heading: '3. Refunds',
          text: 'Refunds for canceled or returned orders are processed within 2-3 business days to your original payment method. In the case of cash on delivery, the amount will be credited to your InstantKirana wallet or bank account via UPI.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300 flex flex-col">
        <div className="p-8 border-b flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              {activeContent.icon}
            </div>
            <h2 className="text-2xl font-black text-gray-800">{activeContent.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {activeContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg font-bold text-gray-800">{section.heading}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{section.text}</p>
            </div>
          ))}
          <div className="pt-8 border-t text-center">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Last Updated: March 2024
            </p>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
