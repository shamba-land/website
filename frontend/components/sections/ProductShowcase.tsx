import { GeoDecorations } from "@/components/ui/GeoDecorations";

export function ProductShowcase() {
  return (
    <section id="platform" className="relative overflow-hidden py-24 md:py-32 geo-grid-bg">
      {/* Warm earth-toned background with smooth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/8 to-background" />

      {/* Smooth gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Smooth gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

      {/* Geospatial decorations */}
      <GeoDecorations />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-4 py-1.5">
            <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Platform Overview</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Desktop Power,{" "}
            <span className="text-primary">Mobile Flexibility</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Access your farmer data anywhere with our comprehensive web platform and offline-capable mobile app
          </p>
        </div>

        {/* Web Portal Showcase */}
        <div className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-3 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Web Platform</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Powerful Command Center
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Manage your entire farmer network from our intuitive web dashboard. Visualize data on interactive maps, generate insights, and coordinate field operations.
              </p>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interactive Geospatial Maps</h4>
                    <p className="text-sm text-muted-foreground">View farmer locations, field boundaries, and regional analytics on detailed maps</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">Real-time insights, custom reports, and trend analysis across your programs</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Collaboration Tools</h4>
                    <p className="text-sm text-muted-foreground">Role-based access, task assignment, and communication features for field teams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative bg-card border-2 border-border rounded-xl overflow-hidden shadow-hard-lg hover:shadow-hard hover:translate-x-1 hover:translate-y-1 transition-all">
                  {/* Browser chrome */}
                  <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 mx-4 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground">
                      app.shamba.land/dashboard
                    </div>
                  </div>
                  {/* Screenshot placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-sm text-muted-foreground font-medium">Web Dashboard Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Showcase */}
        <div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Screenshot Placeholder */}
            <div className="relative">
              <div className="max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="relative bg-card border-4 border-foreground/10 rounded-[2.5rem] overflow-hidden shadow-hard-lg hover:shadow-hard hover:translate-x-1 hover:translate-y-1 transition-all p-2">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-10" />

                      {/* Screen */}
                      <div className="relative bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 rounded-[1.75rem] overflow-hidden">
                        <div className="aspect-[9/19.5] flex items-center justify-center">
                          <div className="text-center px-6">
                            <svg className="w-12 h-12 mx-auto mb-3 text-secondary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs text-muted-foreground font-medium">Mobile App Screenshot</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-light/40 px-3 py-1.5">
                <span className="text-xs font-semibold text-blue-light uppercase tracking-wider">Mobile App</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Field-Ready Data Collection
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Work offline in remote areas with our mobile app. Capture data, photos, and GPS coordinates, then sync when you're back online.
              </p>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Offline-First Architecture</h4>
                    <p className="text-sm text-muted-foreground">Collect data without internet, automatically sync when connected</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Forms & Surveys</h4>
                    <p className="text-sm text-muted-foreground">Custom forms with skip logic, validation, and multi-language support</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Photo & GPS Capture</h4>
                    <p className="text-sm text-muted-foreground">Document field visits with geotagged photos and location tracking</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-secondary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Works on Any Device</h4>
                    <p className="text-sm text-muted-foreground">Available for Android and iOS smartphones and tablets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
