export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-12 md:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-[#2e7d32] md:text-4xl">
              About BUTSACCO
            </h2>
            <p className="mb-3 md:mb-4 text-gray-600 text-sm sm:text-base">
              Bukonzo United Teachers' Savings and Credit Cooperative Society
              Limited (BUTSACCO) is a financial institution established to serve
              teachers and the wider community in Kasese, Uganda.
            </p>
            <p className="mb-3 md:mb-4 text-gray-600 text-sm sm:text-base">
              Founded with the mission to promote financial inclusion and
              economic empowerment, BUTSACCO has grown to become a trusted
              financial partner for thousands of members.
            </p>
            <p className="mb-4 md:mb-6 text-gray-600 text-sm sm:text-base">
              Our vision is to be the leading SACCO in Uganda, providing
              innovative financial solutions that transform lives and
              communities.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg bg-white p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e7d32]">
                  2,500+
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Active Members
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e7d32]">
                  UGX 1.5B+
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Loan Portfolio
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e7d32]">
                  15+
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Years of Service
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e7d32]">
                  98%
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Member Satisfaction
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-12 md:mt-0">
            <div className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1000&auto=format&fit=crop"
                alt="BUTSACCO team members"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-3/4 sm:w-2/3 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-lg">
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-[#2e7d32]">
                Our Mission
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                To provide accessible and affordable financial services that
                empower our members to achieve financial independence and
                improve their livelihoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
