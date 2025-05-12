
import { TestimonialsWithMarquee } from "./ui/testimonials-with-marquee";

const testimonials = [
  {
    text: "Ich wusste an dem Nachmittag nicht, wie ich die Zeit mit meiner Tochter sinnvoll gestalten soll – und dann kam der Achtsamkeitskurs wie gerufen. Es war so einfach und gleichzeitig so intensiv. Seitdem fühlen wir uns wieder näher und ich nehme mir viel bewusster kleine Momente mit ihr.",
    author: {
      name: "Felix Sanovski",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
    },
  },
  {
    text: "Die Schatz(t)ruhe hat unsere Kinder richtig berührt. So viel Ruhe, Nähe und echtes Miteinander – das erlebt man im Kita-Alltag selten. Frau Hillmann ist sehr warmherzig und bringt die Inhalte mit so viel Gefühl rüber, dass die Kinder sich sofort öffnen.",
    author: {
      name: "Katrin Povisz",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
    },
  },
  {
    text: "Die Kinder waren völlig begeistert von Captain Apfel – sie waren aktiv dabei, haben viel gefragt und richtig mitgelebt. Man spürt bei Frau Hillmann sofort, dass sie das mit Herz macht. Es war nicht nur lehrreich, sondern auch richtig schön und lebendig.",
    author: {
      name: "Jan Berner",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
    },
  },
  {
    text: "Ich fand es toll, wie natürlich und unaufgeregt alles war. Kein Druck, kein erhobener Finger – einfach ein Raum zum Auftanken. Auch für mich als Vater war das mal ein Zugang, bei dem ich mich wohlgefühlt habe. Man merkt, dass hier echte Verbindung zählt.",
    author: {
      name: "Nicole Rose",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=150&h=150&fit=crop&crop=face"
    },
  },
];

const TestimonialSection = () => {
  return (
    <TestimonialsWithMarquee
      title="Was andere sagen"
      description="Erfahrungen von Eltern, Erziehern und Einrichtungen mit der Tankzeile"
      testimonials={testimonials}
    />
  );
};

export default TestimonialSection;
