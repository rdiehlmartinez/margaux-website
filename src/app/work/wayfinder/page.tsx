"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";

const PASSWORD = "mgx";

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem("wayfinder-auth", "true");
      onSuccess();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xs">
        <Link 
          href="/" 
          className="text-sm text-muted hover:text-foreground transition-colors block mb-12"
        >
          ← Back
        </Link>
        
        <h1 className="text-xl font-semibold mb-2">This project is protected</h1>
        <p className="text-sm text-muted mb-8">Enter password to view case study</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className={`w-full px-4 py-3 rounded-lg border bg-transparent outline-none transition-colors ${
              error 
                ? "border-red-400 focus:border-red-400" 
                : "border-border focus:border-foreground"
            }`}
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-500 mt-2">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full mt-4 px-4 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            View Project
          </button>
        </form>
      </div>
    </main>
  );
}

function CaseStudyContent() {
  return (
    <main className="pb-24">
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          href="/" 
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back
        </Link>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Wayfinder: Redesigning the Home Experience
        </h1>
        
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted mb-12">
          <span>Lead Product Designer</span>
          <span>2024</span>
          <span>Pelago Health</span>
        </div>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
          <Image
            src="/images/wayfinder/hero.png"
            alt="Wayfinder final design"
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Content */}
      <article className="max-w-2xl mx-auto px-6">
        
        {/* Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">Role</p>
              <p className="font-medium">Lead Product Designer</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">Timeline</p>
              <p className="font-medium">2024</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">Team</p>
              <p className="font-medium">PM, Engineering, Clinical</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">Focus</p>
              <p className="font-medium">AUD, OUD, Tobacco</p>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-6">
            Pelago's home page was trying to do everything and succeeding at nothing. Members were 
            engaging with check-ins but largely ignoring other valuable features in the app. If 
            content wasn't on the home page, members wouldn't find it—and even when it was there, 
            unclear hierarchy and navigation meant critical tools weren't being used.
          </p>
          <p className="text-lg font-medium">
            The core problem: Members didn't feel guided. They weren't sure what to do, when to 
            do it, or why it mattered for their goals.
          </p>
        </section>

        {/* Before Metrics */}
        <section className="mb-16">
          <h3 className="text-xs text-muted uppercase tracking-widest mb-6">Key Metrics Before Redesign</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="py-4 border-t border-border">
              <p className="text-3xl font-semibold mb-1">~60%</p>
              <p className="text-sm text-muted">Check-in completion</p>
            </div>
            <div className="py-4 border-t border-border">
              <p className="text-3xl font-semibold mb-1">~35%</p>
              <p className="text-sm text-muted">Task 1 completion rate</p>
            </div>
            <div className="py-4 border-t border-border">
              <p className="text-3xl font-semibold mb-1">39%</p>
              <p className="text-sm text-muted">Week 5 retention</p>
            </div>
            <div className="py-4 border-t border-border">
              <p className="text-3xl font-semibold mb-1">Low</p>
              <p className="text-sm text-muted">Content engagement</p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Research & Discovery</h2>
          <p className="text-muted leading-relaxed mb-8">
            I led extensive qualitative research with 8 members across tobacco and alcohol programs 
            to understand their jobs to be done and what truly helped them achieve their goals.
          </p>
          
          <div className="bg-neutral-50 rounded-xl p-6 mb-8">
            <h4 className="font-medium mb-4">Research Methodology</h4>
            <p className="text-sm text-muted leading-relaxed mb-4">
              I conducted a card sorting exercise where members were given cards representing 
              different features and types of support. Members were asked to sort these cards 
              by order of importance. This methodology allowed me to:
            </p>
            <ul className="text-sm text-muted space-y-2">
              <li>• Understand relative priority of different features from the member perspective</li>
              <li>• Identify patterns across different member types and substance use programs</li>
              <li>• Move beyond stated preferences to see what members truly valued when forced to make tradeoffs</li>
              <li>• Gather both quantitative ranking data and rich qualitative insights through think-aloud protocol</li>
            </ul>
          </div>
        </section>

        {/* Research Images */}
        <ImageCarousel
          images={[
            { src: "/images/wayfinder/process-1.png", alt: "Card sorting exercise" },
            { src: "/images/wayfinder/process-2.png", alt: "Research synthesis" },
          ]}
          caption="Card sorting exercise and research synthesis"
        />

        {/* Insights */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Critical Insights</h2>
          
          <div className="space-y-8">
            <div className="insight-card">
              <h4 className="font-medium mb-2">1. Members love tracking, but need guidance</h4>
              <p className="text-sm text-muted leading-relaxed">
                75% of members cited tracking as a top 3 need. Members regularly ignored the app's 
                navigation to complete check-ins. Tracking was described as "keeping me honest" and 
                "helps build awareness."
              </p>
            </div>
            
            <div className="insight-card">
              <h4 className="font-medium mb-2">2. Accountability is universal</h4>
              <p className="text-sm text-muted leading-relaxed">
                100% of members ranked human support/accountability in their top 3 needs. 
                "To have someone keeping tabs on me and helping me stay on track." Planning and 
                structure were critical: "Laying out a plan is like a road trip—I need to know 
                what turns to take."
              </p>
            </div>
            
            <div className="insight-card">
              <h4 className="font-medium mb-2">3. Three essential jobs to be done emerged</h4>
              <ul className="text-sm text-muted space-y-1">
                <li><strong>Education:</strong> "Give me the tools and confidence I need to achieve my goals"</li>
                <li><strong>Human Support:</strong> "Knowing someone is there gives me the motivation to succeed"</li>
                <li><strong>Progress:</strong> "How do I see and feel the successes in my journey so far?"</li>
              </ul>
            </div>
            
            <div className="insight-card">
              <h4 className="font-medium mb-2">4. All three require personalization—and tracking is the foundation</h4>
              <p className="text-sm text-muted leading-relaxed">
                No progress without tracking. No accountability without tracking. No personalized 
                education without understanding member behavior.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Problem with Our Current Approach</h2>
          <p className="text-muted leading-relaxed mb-6">Our assumptions were wrong:</p>
          <ul className="text-muted space-y-3 mb-6">
            <li>• We thought showing hierarchy between cards would structure task importance → <strong className="text-foreground">Members ignored it</strong></li>
            <li>• We thought members would complete most tasks on their to-do list → <strong className="text-foreground">They didn't</strong></li>
            <li>• We thought we could put features in other tabs → <strong className="text-foreground">Only home and chat got traffic</strong></li>
          </ul>
          <p className="text-lg font-medium">
            The insight: If it's not on the home page, members won't see it. If it's buried in a 
            flow, they won't complete it.
          </p>
        </section>

        {/* Design Goals */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Design Goals</h2>
          <p className="text-muted leading-relaxed mb-6">
            Create an experience where members feel:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Guided", "Trusted", "Capable", "Unintimidated", "Understood"].map((goal) => (
              <div key={goal} className="py-3 px-4 bg-neutral-50 rounded-lg text-center">
                <span className="font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Target Metrics */}
        <section className="mb-16">
          <h3 className="text-xs text-muted uppercase tracking-widest mb-6">Target Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline py-3 border-b border-border">
              <span className="text-muted">Week 5 retention</span>
              <span className="font-medium">39% → 62%+</span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-border">
              <span className="text-muted">Check-in completion</span>
              <span className="font-medium">60% → 90%+</span>
            </div>
            <div className="flex justify-between items-baseline py-3 border-b border-border">
              <span className="text-muted">Task 1 completion rate</span>
              <span className="font-medium">35% → 50%+</span>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">The Solution: Three-Phase Approach</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-semibold mb-3">Phase 1: Make Tracking the Keystone Habit</h3>
              <p className="text-muted leading-relaxed mb-4">
                Dramatically simplify the home page to prioritize daily tracking above all else. 
                When members open the app, their primary job is to complete their check-in. Only 
                after tracking do they see educational content, support options, and progress insights.
              </p>
              <p className="text-sm text-muted italic">
                Rationale: Tracking unlocks everything else—personalized education, meaningful 
                progress visualization, and effective clinical support.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Phase 2: Minimize Effort to Complete Tracking</h3>
              <p className="text-muted leading-relaxed mb-4">
                Reduce clicks, time, words read, and decisions required to complete daily check-ins. 
                This involved standardizing tracking UI across programs, removing unnecessary friction 
                points, and making the experience feel effortless.
              </p>
              <p className="text-sm text-muted italic">
                Hypothesis: Even small incremental decreases in effort would have outsized impacts 
                on long-term retention.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Phase 3: Personalize the Post-Tracking Experience</h3>
              <p className="text-muted leading-relaxed mb-4">
                Rebuild the home page from the ground up to support deep personalization based on 
                tracked data. Two core concepts: <strong>Contextual Motivation</strong> (via Widgets) 
                and <strong>Task Prioritization</strong> (via Colorful Task Lists).
              </p>
              <p className="text-sm text-muted italic">
                Technical Foundation: Complete rebuild of the home page architecture to enable faster 
                loading, modular experiences, and increased development speed.
              </p>
            </div>
          </div>
        </section>

        {/* Design Evolution Images */}
        <ImageCarousel
          images={[
            { src: "/images/wayfinder/process-3.png", alt: "Early wireframes" },
            { src: "/images/wayfinder/process-4.png", alt: "Phase 1 design" },
            { src: "/images/wayfinder/process-5.png", alt: "Phase 2 design" },
            { src: "/images/wayfinder/process-6.png", alt: "Phase 3 design" },
            { src: "/images/wayfinder/process-7.png", alt: "Final iteration" },
          ]}
          caption="Design evolution across three phases"
        />

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Design Process</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-2">Information Architecture</h4>
              <p className="text-sm text-muted leading-relaxed">
                I redesigned the entire home page flow to separate "tracking mode" from "engagement 
                mode": Entry point → Streamlined check-in splash → Frictionless tracking → 
                Personalized feed with widgets and prioritized tasks.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Visual Design & Components</h4>
              <p className="text-sm text-muted leading-relaxed">
                Created widget system for flexible, contextual content delivery. Designed colorful, 
                visually distinct task cards with clear hierarchy. Introduced progressive disclosure 
                to prevent overwhelm. Built in celebration moments to reinforce positive behaviors.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Interaction Design</h4>
              <p className="text-sm text-muted leading-relaxed">
                Optimized tap targets and reduced decision fatigue. Added micro-animations to guide 
                attention. Implemented smart defaults based on member data. Created seamless 
                transitions between tracking and engagement.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Collaboration & Iteration</h4>
              <p className="text-sm text-muted leading-relaxed">
                Weekly meetings with clinical team to ensure evidence-based approach. Close 
                partnership with engineering on technical architecture. Continuous testing with 
                members to validate assumptions.
              </p>
            </div>
          </div>
        </section>

        {/* Final Designs */}
        <ImageCarousel
          images={[
            { src: "/images/wayfinder/v1.png", alt: "Final design - Check-in" },
            { src: "/images/wayfinder/home-2.png", alt: "Final design - Home feed" },
            { src: "/images/wayfinder/home-3.png", alt: "Final design - Progress" },
            { src: "/images/wayfinder/home-4.png", alt: "Final design - Tasks" },
          ]}
          caption="Final designs showing the new home experience"
        />

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Results</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xs text-muted uppercase tracking-widest mb-6">Immediate Impact</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Check-in Engagement</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="py-4 border-t-2 border-foreground">
                      <p className="text-3xl font-semibold text-foreground mb-1">60% → 95%</p>
                      <p className="text-sm text-muted">Check-in completion (+58%)</p>
                    </div>
                    <div className="py-4 border-t-2 border-foreground">
                      <p className="text-3xl font-semibold text-foreground mb-1">83%</p>
                      <p className="text-sm text-muted">Care update completion</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Onboarding & Activation</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="py-4 border-t border-border">
                      <p className="text-2xl font-semibold mb-1">38% → 60%</p>
                      <p className="text-sm text-muted">Welcome content starts (+58%)</p>
                    </div>
                    <div className="py-4 border-t border-border">
                      <p className="text-2xl font-semibold mb-1">43% → 17%</p>
                      <p className="text-sm text-muted">Drop-off reduction (-60%)</p>
                    </div>
                    <div className="py-4 border-t border-border">
                      <p className="text-2xl font-semibold mb-1">23% → 50%</p>
                      <p className="text-sm text-muted">Intention setting (+117%)</p>
                    </div>
                    <div className="py-4 border-t border-border">
                      <p className="text-2xl font-semibold mb-1">76% → 85%</p>
                      <p className="text-sm text-muted">Post-check-in engagement (+12%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs text-muted uppercase tracking-widest mb-6">Long-Term Outcomes</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="py-6 px-6 bg-neutral-50 rounded-xl">
                  <p className="text-4xl font-semibold mb-2">+56%</p>
                  <p className="text-sm text-muted">Week 5 retention (39% → 61%)</p>
                </div>
                <div className="py-6 px-6 bg-neutral-50 rounded-xl">
                  <p className="text-4xl font-semibold mb-2">+161%</p>
                  <p className="text-sm text-muted">New member activation (18% → 47%)</p>
                </div>
                <div className="py-6 px-6 bg-neutral-50 rounded-xl">
                  <p className="text-4xl font-semibold mb-2">+50%</p>
                  <p className="text-sm text-muted">Care-avoidant segment engagement</p>
                </div>
                <div className="py-6 px-6 bg-neutral-50 rounded-xl">
                  <p className="text-4xl font-semibold mb-2">32%</p>
                  <p className="text-sm text-muted">Lift to active member retention</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          
          <div className="space-y-6">
            <div className="py-4 border-b border-border">
              <p className="font-medium mb-2">Simplify ruthlessly.</p>
              <p className="text-sm text-muted">
                Our original home page tried to do everything. The redesign succeeded by doing 
                one thing exceptionally well first (tracking), then building from there.
              </p>
            </div>
            
            <div className="py-4 border-b border-border">
              <p className="font-medium mb-2">Follow member behavior, not assumptions.</p>
              <p className="text-sm text-muted">
                Members showed us they loved check-ins—we should have centered the experience 
                around that from day one.
              </p>
            </div>
            
            <div className="py-4 border-b border-border">
              <p className="font-medium mb-2">Foundation first, personalization second.</p>
              <p className="text-sm text-muted">
                Without consistent tracking data, personalization is impossible. We had to get 
                members tracking before we could deliver personalized value.
              </p>
            </div>
            
            <div className="py-4 border-b border-border">
              <p className="font-medium mb-2">Small friction = big impact.</p>
              <p className="text-sm text-muted">
                Reducing cognitive load and physical effort in check-ins had dramatic effects 
                on completion rates and downstream engagement.
              </p>
            </div>
            
            <div className="py-4 border-b border-border">
              <p className="font-medium mb-2">Evidence-based design works.</p>
              <p className="text-sm text-muted">
                Close collaboration with the clinical team ensured our design decisions supported 
                better health outcomes, not just engagement metrics.
              </p>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What's Next</h2>
          <p className="text-muted leading-relaxed mb-6">
            The Wayfinder foundation enables exciting future work:
          </p>
          <ul className="text-muted space-y-2">
            <li>• Adaptive content delivery based on member state (e.g., post-relapse support)</li>
            <li>• Predictive interventions when data suggests increased risk</li>
            <li>• Richer progress visualization tied to clinical milestones</li>
            <li>• Community features that leverage shared progress</li>
            <li>• Integration with wearables and passive data collection</li>
          </ul>
        </section>

        {/* Closing */}
        <section className="py-8 border-t border-border">
          <p className="text-lg leading-relaxed">
            This project represents a fundamental shift in how Pelago delivers digital 
            therapeutics—from a feature-rich app where members didn't know what to do, to a 
            guided experience that meets them where they are and helps them build the foundation 
            for lasting change.
          </p>
        </section>

      </article>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 mt-16 pt-8 border-t border-border">
        <Link 
          href="/" 
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </footer>
    </main>
  );
}

export default function WayfinderCaseStudy() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem("wayfinder-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <CaseStudyContent />;
}
