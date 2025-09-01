import Image from 'next/image';

const PrivacySecuritySection = () => {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.2] text-text-primary sm:text-4xl">
            Don't worry, everything is private, <br />
            HIPAA secure, and your data is
            <br />
            yours
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
            Every conversation, diagnosis, and health detail is encrypted and stored
            securely. I never use your chat data for AI training and only share data with your
            doctor if you want me to.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md">
            
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/1-4.jpg?"
              alt="A person's side profile, symbolizing patient data privacy"
              width={1024}
              height={576}
              className="h-auto w-full object-cover"
            />
            
            <div className="absolute left-0 top-0 h-1/2 w-full bg-white/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)]"></div>
            </div>

            <div className="absolute left-0 top-1/2 h-px w-full bg-gray-200/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center rounded-full bg-white p-3 shadow-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/lock-2-line-6.svg?"
                  alt="Lock icon"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecuritySection;