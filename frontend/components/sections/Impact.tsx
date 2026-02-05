export function Impact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-blue py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-light/20 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
            Making Real Impact
          </h2>
          <p className="text-lg text-white/90 md:text-xl">
            Organizations using Shamba are transforming how they support smallholder farmers across the globe
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="group text-center">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-white mb-2">500K+</div>
            <div className="text-white/80">Farmers Reached</div>
          </div>

          <div className="group text-center">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Countries</div>
          </div>

          <div className="group text-center">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80">Data Accuracy</div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="flex gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/15">
            <div className="shrink-0">
              <div className="h-12 w-12 rounded-lg bg-blue/20 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast Deployment</h3>
              <p className="text-white/80 text-sm">Get up and running in days, not months. Our platform is designed for rapid implementation.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/15">
            <div className="shrink-0">
              <div className="h-12 w-12 rounded-lg bg-blue/20 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Fully Customizable</h3>
              <p className="text-white/80 text-sm">Adapt the platform to your specific workflows and data requirements with ease.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/15">
            <div className="shrink-0">
              <div className="h-12 w-12 rounded-lg bg-blue/20 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">Our dedicated support team is always here to help you succeed.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/15">
            <div className="shrink-0">
              <div className="h-12 w-12 rounded-lg bg-blue/20 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/80 text-sm">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
