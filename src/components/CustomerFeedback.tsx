import { Star } from "lucide-react";

const CustomerFeedback = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white/80 rounded-lg shadow-sm p-6 border border-primary/10">
            <h3 className="text-lg font-medium text-primary-dark mb-3">
              Rückmeldungen meiner Kunden
            </h3>
            <div className="flex justify-center items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-yellow-500 fill-current" 
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              "Es war eine große Bereicherung für uns alle"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;