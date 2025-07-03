export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2e7d32] md:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
            Don't just take our word for it. Here's what our members have to say
            about their experience with BUTSACCO.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              role: "Teacher, Kasese Primary School",
              testimonial:
                "BUTSACCO has been a lifesaver for me and my family. The education loan I received helped me pay for my children's school fees, and the repayment terms are very manageable.",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            },
            {
              name: "Jane Smith",
              role: "Business Owner",
              testimonial:
                "I started my small business with a loan from BUTSACCO. The process was smooth, and the staff were very helpful. My business has grown, and I've been able to repay the loan without any issues.",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
            },
            {
              name: "Robert Johnson",
              role: "Farmer",
              testimonial:
                "The agricultural loan I received from BUTSACCO helped me expand my farm and increase my yield. The mobile money repayment option makes it easy for me to pay my installments without having to travel to town.",
              image:
                "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl border bg-white p-4 sm:p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3 sm:mb-4 flex items-center">
                <div className="mr-3 sm:mr-4 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
