
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  className?: string;
}

export function TestimonialCard({ 
  author,
  text,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-primary-light/50 to-primary-light/10",
        "p-4 text-start sm:p-6",
        "hover:from-primary-light/60 hover:to-primary-light/20",
        "max-w-[320px] sm:max-w-[360px]",
        "transition-colors duration-300",
        "shadow-md",
        className
      )}
    >
      <p className="sm:text-md mt-2 text-sm text-foreground italic">
        "{text}"
      </p>
      <div className="flex items-center gap-3 mt-4 pt-2 border-t border-primary/20">
        {author.avatar ? (
          <Avatar className="h-12 w-12 border border-primary/20">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <Avatar className="h-12 w-12 bg-primary-light">
            <AvatarFallback className="bg-primary text-white">{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.role}
          </p>
        </div>
      </div>
    </div>
  );
}
