import Image from "next/image";

const DoctorNetwork = () => {
  return (
    <section className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="flex justify-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/doctors-5.png?"
            alt="A central photograph of a woman with her eyes closed, surrounded by a ring of seven circular portraits of diverse doctors, showcasing the Doctronic.ai professional network."
            width={730}
            height={439}
            className="h-auto w-full max-w-[730px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorNetwork;