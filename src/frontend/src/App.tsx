import { Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section with Profile Photo */}
      <header className="relative pt-16 pb-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Profile Photo Container with Blur Effect */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-110" />
              <div className="relative">
                <img
                  src="/assets/IMG_20251225_164253.jpg"
                  alt="Profile photo of Harsh Bulchandani"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl ring-4 ring-background/50 brightness-105"
                />
              </div>
            </div>

            {/* Name and Tagline */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
              Harsh Bulchandani
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Creative Editing • Content Writing • Graphic Design
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 pb-16 space-y-16">
        {/* About Me Section */}
        <section className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I am a dedicated freelancer offering professional editing, content writing, and graphic
            design services. I focus on clear communication, clean visuals, and high-quality results
            to help clients present their work confidently.
          </p>
        </section>

        {/* Services Section */}
        <section className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Services I Offer</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-base md:text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Editing & Proofreading</span>{' '}
                (documents, resumes, assignments)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-base md:text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Content Writing</span> (captions,
                bios, posts)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-base md:text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Graphic Design</span> (Canva
                designs, Instagram posts, thumbnails, reel covers)
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why Choose Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-base md:text-lg text-foreground font-medium">
                Professional & clean work
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-base md:text-lg text-foreground font-medium">Fast delivery</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-base md:text-lg text-foreground font-medium">Affordable pricing</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-base md:text-lg text-foreground font-medium">
                Client-focused approach
              </p>
            </div>
          </div>
        </section>

        {/* Tools Used Section */}
        <section className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm md:text-base">
              Canva
            </span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm md:text-base">
              MS Word
            </span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm md:text-base">
              Google Docs
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 flex-wrap">
            © 2026. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
