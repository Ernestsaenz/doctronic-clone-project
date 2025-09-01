import Image from "next/image";

const ConversationDemo = () => {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary">
            You can talk to me just like you
            <br />
            would your regular doctor
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I can help you understand health issues, refill medications, answer health and lifestyle questions, and much more. I give you expert medical insights at your fingertips, whenever you need them.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto bg-secondary rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col space-y-5">
            {/* AI Doctor's Message */}
            <div className="flex items-start justify-start gap-3">
              <div className="bg-white p-4 rounded-xl shadow-sm max-w-[80%]">
                <p className="text-sm text-text-primary">
                  Hey there Adam, what issue or question can I help you with today?
                </p>
              </div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/icons/1-4.jpg?"
                alt="Doctor avatar"
                width={32}
                height={32}
                className="rounded-full flex-shrink-0 mt-1"
              />
            </div>

            {/* Patient's Message */}
            <div className="flex justify-end">
              <div className="bg-accent p-4 rounded-xl shadow-sm max-w-[80%]">
                <p className="text-sm text-primary">
                  I've got a rash on my arm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;