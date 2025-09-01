import Image from "next/image";

const features = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/stethoscope-line-primary-8.svg?",
    iconAlt: "Stethoscope icon",
    title: "Top licensed U.S. doctors",
    description: "Available in all 50 states"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/dossier-line-primary-15.svg?",
    iconAlt: "Dossier icon",
    title: "Full service care",
    description: "Prescriptions, referrals & treatment"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/check-line-primary-16.svg?",
    iconAlt: "Checkmark icon",
    title: "No insurance needed",
    description: "All notes available in Doctronic"
  }
];

const HumanDoctorConnection = () => {
    return (
        <section className="bg-secondary py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/doctors-5.png?"
                        alt="A row of five doctor profile pictures"
                        width={184}
                        height={48}
                        className="mb-8"
                    />

                    <h2 className="font-display text-4xl font-bold text-text-primary mb-6 max-w-lg">
                        When we're done chatting, I can connect you to a human doctor for just $39
                    </h2>

                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 py-1.5 px-4">
                        <span className="h-2 w-2 rounded-full bg-[#10B981]"></span>
                        <p className="text-sm font-medium text-green-700">Appointments available instantly, 24/7</p>
                    </div>

                    <p className="max-w-xl text-text-secondary mb-12">
                        If you want, you can book a follow up with one of our doctors to get your
                        prescriptions, talk about our AI findings, confirm a diagnosis, or get specialist
                        help, all from the comfort of your phone.
                    </p>

                    <div className="w-full max-w-xl rounded-xl border border-border bg-card shadow-sm">
                        <ul className="divide-y divide-border">
                            {features.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-4 p-6">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                                        <Image src={feature.iconSrc} alt={feature.iconAlt} width={24} height={24} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-medium text-text-primary">{feature.title}</h3>
                                        <p className="text-sm text-text-secondary">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HumanDoctorConnection;