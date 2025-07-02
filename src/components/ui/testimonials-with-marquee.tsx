
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
  }>;
  className?: string;
}

export function TestimonialsWithMarquee({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-muted text-foreground",
      "py-8 sm:py-12 md:py-14 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-3 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-3 px-4 sm:gap-4">
          <div className="bg-white/60 rounded-lg p-6 shadow-sm border border-primary/5 relative overflow-hidden mb-3">
            <div className="relative z-10">
              <h2 className="max-w-[720px] text-2xl font-semibold leading-tight sm:text-3xl sm:leading-tight">
                {title}
              </h2>
              <p className="text-sm max-w-[600px] font-medium text-muted-foreground sm:text-lg mt-2">
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(3)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-muted" />
        </div>
      </div>
    </section>
  );
}
