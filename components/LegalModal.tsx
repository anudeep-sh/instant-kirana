
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
      icon: <Shield className="text-green-600" size={24} />,
      sections: [
        {
          heading: '1. Introduction',
          text: 'At NEOFIN NEX India Private Limited (InstantKirana), we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.'
        },
        {
          heading: '2. Data Collection',
          text: 'We collect information such as your name, mobile number, delivery address, and email when you place an order. We also collect device information and location data to facilitate local deliveries in the Hyderabad region.'
        },
        {
          heading: '3. Data Usage',
          text: 'Your data is used solely for processing orders, communicating delivery updates, and improving our service. We do not sell your personal information to third parties.'
        },
        {
          heading: '4. Security Measures',
          text: 'We use industry-standard encryption (AES-256) and secure servers to protect your sensitive data during transactions.'
        }
      ]
    },
    safety: {
      title: 'Safety Policy',
      icon: <HeartPulse className="text-blue-500" size={24} />,
      sections: [
        {
          heading: '1. Product Quality & Hygiene',
          text: 'NEOFIN NEX India Private Limited adheres to strict FSSAI guidelines. All fresh produce and groceries are stored in temperature-controlled environments to maintain maximum hygiene and nutritional value.'
        },
        {
          heading: '2. Safe Handling',
          text: 'Our warehouse staff and delivery partners follow rigorous hand-sanitization and masking protocols. Every package is checked for integrity before dispatch from our Yousufguda hub.'
        },
        {
          heading: '3. No-Contact Delivery',
          text: 'We offer specialized no-contact delivery options. Our riders are trained to maintain physical distance and leave packages at designated spots to ensure customer safety.'
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      icon: <FileText className="text-orange-500" size={24} />,
      sections: [
        {
          heading: '1. General Terms',
          text: 'These terms govern your use of the InstantKirana platform provided by NEOFIN NEX India Private Limited. By accessing our platform, you agree to comply with all applicable local and national laws.'
        },
        {
          heading: '2. User Accounts',
          text: 'You are responsible for maintaining the confidentiality of your account details. Orders placed through your account are considered authorized by you.'
        },
        {
          heading: '3. Intellectual Property',
          text: 'All content, including logos, designs, and text, is the exclusive property of NEOFIN NEX India Private Limited. Unauthorized reproduction is strictly prohibited.'
        },
        {
          heading: '4. Limitation of Liability',
          text: 'While we strive for excellence, we are not liable for any indirect or consequential damages arising from the use of our services.'
        }
      ]
    },
    return: {
      title: 'Refund Policy',
      icon: <RefreshCw className="text-red-500" size={24} />,
      sections: [
        {
          heading: '1. Eligibility for Refund',
          text: 'NEOFIN NEX India Private Limited offers refunds for items that are damaged, expired, or significantly different from their description. For fresh items like milk and vegetables, refund requests must be initiated at the time of delivery.'
        },
        {
          heading: '2. Refund Process',
          text: 'Once a refund is approved, the amount will be credited back to your original payment method within 3 to 5 business days. For cash on delivery orders, refunds are issued via UPI or to your platform wallet.'
        },
        {
          heading: '3. Cancellation Policy',
          text: 'Orders can be canceled free of charge before they are dispatched. Once an order is out for delivery, a nominal cancellation fee may apply.'
        }
      ]
    },
    shipping: {
      title: 'Shipping Policy',
      icon: <Truck className="text-blue-600" size={24} />,
      sections: [
        {
          heading: '1. Delivery Area',
          text: 'Currently, InstantKirana operates exclusively in the Hyderabad region, serving Yousufguda, Venkatagiri, and surrounding neighborhoods.'
        },
        {
          heading: '2. Delivery Times',
          text: 'Our standard delivery time is between 15 to 30 minutes. We operate daily from 6:00 AM to 11:00 PM.'
        },
        {
          heading: '3. Shipping Charges',
          text: 'Delivery is FREE for all orders above ₹500. For orders below this amount, a flat delivery fee of ₹40 applies.'
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
              &copy; {new Date().getFullYear()} NEOFIN NEX India Private Limited. All rights reserved.
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
