import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  return (
    <div className="container-sacred py-12 sm:py-20 max-w-4xl mx-auto animate-fade-up">
      
      {/* ===== ACTION ROW ELEMENTS ===== */}
      <div className="mb-10 flex items-center justify-between gap-4 border-b pb-6" style={{ borderColor: 'hsl(43 65% 52% / 0.2)' }}>
        <button 
          onClick={onBack}
          className="text-accent/90 hover:text-accent border rounded-full font-sans text-xs uppercase tracking-wider cursor-pointer transition-all bg-transparent"
          style={{ padding: '10px 20px', borderColor: 'hsl(43 65% 52% / 0.4)' }}
        >
          ← Back to App Page
        </button>
      </div>

      {/* ===== IFRAME CONTAINER ===== */}
      <div className="card-sacred relative overflow-hidden" style={{ height: '80vh' }}>
        <iframe
          src="https://bhaktiwithekta.blogspot.com/p/jaap-karo-privacy-policy-bhaktiwithekta.html"
          title="Jaap Karo Privacy Policy"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent'
          }}
          allowTransparency={true}
        />
      </div>
    </div>
  );
}