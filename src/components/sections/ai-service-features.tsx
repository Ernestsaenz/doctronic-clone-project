import Image from 'next/image';

const AiServiceFeatures = () => {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          <div className="flex flex-col items-center">
            {/* Badge */}
            <div className="bg-white rounded-full shadow-lg py-2 px-4 inline-flex items-center z-10">
              <span className="text-sm font-medium text-text-secondary">Over 14.2M+ consultations</span>
            </div>
            
            {/* Line connecting badge and icon */}
            <div className="w-px h-16 bg-border"></div>
            
            {/* Logo icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent border-[6px] border-secondary shadow-md">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/doctronic-icon-new-4.svg?"
                alt="Doctronic Logo Icon"
                width={32}
                height={32}
              />
            </div>
          </div>
          
          <h2 className="mt-8 font-display text-4xl font-bold text-text-primary leading-tight md:text-5xl max-w-xl mx-auto">
            As an AI doctor, I provide fast and free service
          </h2>
          
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
            I prioritize your privacy and our conversation is totally anonymous by default. With over 14.2 million consultations completed, I can help you get up to date information, answer questions, or get treatment.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AiServiceFeatures;