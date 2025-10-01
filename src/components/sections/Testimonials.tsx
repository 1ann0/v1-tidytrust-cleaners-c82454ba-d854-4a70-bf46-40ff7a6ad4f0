import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-brand-gold fill-brand-gold" : "text-muted/40"
        }`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients in Kenya Are Saying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to have earned the trust of homes and businesses across the country.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-card/80 border-border/80">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <blockquote className="text-foreground/90 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="font-semibold text-foreground">
                    {testimonial.name}
                    <span className="text-muted-foreground font-normal"> - {testimonial.location}</span>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};