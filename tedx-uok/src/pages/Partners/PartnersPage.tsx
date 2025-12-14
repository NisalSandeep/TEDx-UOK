import React from 'react';

interface Partner {
  id: string;
  name: string;
  tier: 'Title' | 'Gold' | 'Silver' | 'Bronze' | 'In-kind'; 
  logo_url: string;
  isActive?: boolean;
}

interface PartnersPageProps {
  partners: Partner[];
}

const PartnersPage: React.FC<PartnersPageProps> = ({ partners }) => {
  const partnersByTier = {
    Title: partners.filter((p) => p.tier === 'Title'),
    Gold: partners.filter((p) => p.tier === 'Gold'),
    Silver: partners.filter((p) => p.tier === 'Silver'),
    Bronze: partners.filter((p) => p.tier === 'Bronze'),
    'In-kind': partners.filter((p) => p.tier === 'In-kind'),
  };

  const renderPartnerTier = (
    tier: string,
    tierPartners: Partner[],
    gridCols: string,
    maxHeight: string
  ) => {
    if (!tierPartners.length) return null;

    return (
      <section className="mb-20" aria-labelledby={`${tier.toLowerCase()}-partners`}>
        <h2
          id={`${tier.toLowerCase()}-partners`}
          className="text-3xl font-bold mb-10 text-white text-center"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
        >
          {tier} Partners
        </h2>
        <div className={`grid ${gridCols} gap-8 justify-items-center`}>
          {tierPartners.map((partner) => (
            <div
              key={partner.id}
              className="group cursor-pointer flex items-center justify-center p-8 transition-all duration-300 w-full"
              style={{
                backgroundColor: '#0E0E0E',
                border: '1px solid #1F1F1F',
                borderRadius: '12px',
                minHeight: '180px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={partner.logo_url}
                alt={partner.name}
                className={`${maxHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-110`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main
      style={{ backgroundColor: '#000000', minHeight: '100vh', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
      className="flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-24">
          <p
            className="text-5xl uppercase tracking-normal mb-4 font-medium"
            style={{ color: '#EB0028' }}
          >
            PARTNERS
          </p>
          <h1 className="text-7xl font-bold mb-6 text-white">Partners &amp; Sponsors</h1>
          <p className="text-lg max-w-3xl mx-auto mb-10" style={{ color: '#A0A0A0' }}>
            Tiered showcases. Equal spotlight. Simple ways to partner.
          </p>
          <button
            type="button"
            className="px-8 py-4 font-bold text-white transition-colors duration-200"
            style={{
              backgroundColor: '#EB0028',
              borderRadius: '9999px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D00024';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EB0028';
            }}
            aria-label="Become a Partner"
          >
            Become a Partner
          </button>
        </header>

        {renderPartnerTier('Title', partnersByTier.Title, 'grid-cols-1 md:grid-cols-2', 'max-h-24')}
        {renderPartnerTier('Gold', partnersByTier.Gold, 'grid-cols-2 md:grid-cols-3', 'max-h-20')}
        {renderPartnerTier('Silver', partnersByTier.Silver, 'grid-cols-2 md:grid-cols-4', 'max-h-16')}
        {renderPartnerTier('Bronze', partnersByTier.Bronze, 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5', 'max-h-14')}
        {renderPartnerTier('In-kind', partnersByTier['In-kind'], 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6', 'max-h-12')}
      </div>
    </main>
  );
};

export default PartnersPage;