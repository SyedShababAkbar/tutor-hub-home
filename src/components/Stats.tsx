import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "3019",
    label: "Total Active Tutors",
  },
  {
    icon: TrendingUp,
    value: "3000+",
    label: "Students Served",
  },
  {
    icon: Award,
    value: "4.5+",
    label: "Ranked on Google",
  },
  {
    icon: Clock,
    value: "9+",
    label: "Years Of Legacy",
  },
];

const Stats = () => {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Our Story in Numbers
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            We aim to make high-quality home tuition and online tutoring accessible, affordable, and results-driven.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;