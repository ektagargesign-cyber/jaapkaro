import React, { useEffect, useState } from 'react';
import appIcon from "@/assets/app-icon.png";

interface PrivacyPageProps {
  onBack: () => void;
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  const [htmlContent, setHtmlContent] = useState<string>('<p style="text-align:center; opacity:0.6; padding: 40px;">Loading Privacy Policy...</p>');

  useEffect(() => {
    // Uses an open CORS proxy to safely fetch the live content from your blog post without domain blocks
    fetch('https://corsproxy.io/?' + encodeURIComponent('https://bhaktiwithekta.blogspot.com/2026/02/privacy-policy.html'))
      .then((response) => response.text())
      .then((htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        // Targets the main Blogspot post container safely
        const postBody = doc.querySelector('.post-body') || doc.querySelector('.entry-content') || doc.body;
        
        if (postBody) {
          // Remove elements that shouldn't display in our Vercel container
          const logo = postBody.querySelector('.app-logo');
          const installBtn = postBody.querySelector('.install-btn-wrap');
          const copyright = postBody.querySelector('.copyright');
          const styleTags = postBody.querySelectorAll('style');
          
          if (logo) logo.remove();
          if (installBtn) installBtn.remove();
          if (copyright) copyright.remove();
          styleTags.forEach(tag => tag.remove());

          setHtmlContent(postBody.innerHTML);
        } else {
          setHtmlContent('<p>Privacy Policy content could not be parsed.</p>');
        }
      })
      .catch((err) => {
        console.error('Error loading content:', err);
        setHtmlContent('<p style="text-align:center; color:red;">Failed to connect to privacy server.</p>');
      });
  }, []);

  return (
    <div className="container-sacred py-12 sm:py-20 max-w-4xl mx-auto animate-fade-up">
      
      {/* ===== ACTION ROW ELEMENTS ===== */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b pb-6" style={{ borderColor: 'hsl(43 65% 52% / 0.2)' }}>
        
        {/* 1. Back to Vercel App Button */}
        <button 
          onClick={onBack}
          className="text-accent/90 hover:text-accent border rounded-full font-sans text-xs uppercase tracking-wider cursor-pointer transition-all bg-transparent"
          style={{ 
            padding: '10px 20px',
            borderColor: 'hsl(43 65% 52% / 0.4)',
            boxShadow: '0 0 15px -3px hsl(28 95% 49% / 0.2)'
          }}
        >
          ← Back to App Page
        </button>

        {/* 2. Secondary Custom Trailing Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://bhaktiwithekta.blogspot.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-accent/80 hover:underline"
          >
            Visit Our Blog
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.bhaktiwithekta.jaapkaro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-sacred text-sm"
            style={{ padding: '8px 16px' }}
          >
            Download App
          </a>
        </div>
      </div>

      {/* ===== NATIVE RENDER SECTION ===== */}
      {/* Uses your exact styling system definitions natively */}
      <div className="card-sacred p-6 sm:p-10 relative overflow-hidden">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={appIcon} alt="" width={44} height={44} className="rounded-xl" />
          <h1 className="font-serif text-2xl sm:text-3xl text-gold-gradient m-0">Privacy Policy</h1>
        </div>
        
        {/* The dynamic text content injected right into your theme wrapper */}
        <div 
          className="prose max-w-none text-foreground/80 leading-relaxed space-y-4 font-sans"
          style={{ 
            fontSize: '15px',
            wordBreak: 'break-word'
          }}
        >
          <style>{`
            .prose img { max-width: 100%; height: auto; border-radius: 0.5rem; }
            .prose table { width: 100%; overflow-x: auto; display: block; }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
}