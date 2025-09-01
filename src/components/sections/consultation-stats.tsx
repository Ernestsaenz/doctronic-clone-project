import Image from 'next/image';

const ConsultationStats = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-6 py-20 sm:py-24">
        <div className="flex flex-col items-center">
          
          <div className="bg-card rounded-full shadow-lg flex items-center p-2 gap-3 transition-transform duration-200 hover:scale-105">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/0-1.png?"
              alt="Doctor avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
            <p className="text-sm font-medium text-text-primary pr-2">
              Over 14.2M+ consultations
            </p>
          </div>

          <div
            className="w-px h-24 my-8"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, var(--color-border), var(--color-border) 4px, transparent 4px, transparent 8px)',
            }}
          />

          <div className="bg-card rounded-full shadow-lg p-3 transition-transform duration-200 hover:scale-105">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/doctronic-icon-new-4.svg?"
              alt="Doctronic Icon"
              width={32}
              height={32}
            />
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-bold text-center text-text-primary max-w-2xl mt-12 leading-tight">
            As an AI doctor, I provide fast and<br />free service
          </h2>

          <p className="text-lg text-text-secondary text-center max-w-xl mt-6 leading-relaxed">
            I prioritize your privacy and our conversation is totally anonymous by default. With over 14.2 million consultations completed, I can help you get up to date information, answer questions, or get treatment.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ConsultationStats;