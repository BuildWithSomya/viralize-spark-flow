
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Social Media Manager',
    company: 'TechStartup',
    content: 'Viralyze transformed our social media strategy. We went from 500 to 50K followers in just 3 months. The AI-generated content is indistinguishable from human-written posts.',
    rating: 5,
    avatar: 'SC',
    metrics: '+10,000% reach'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Content Creator',
    company: 'Digital Agency',
    content: 'As someone who manages 20+ client accounts, Viralyze is a game-changer. What used to take hours now takes minutes, and the engagement rates are through the roof.',
    rating: 5,
    avatar: 'MR',
    metrics: '5x faster content'
  },
  {
    name: 'Emily Foster',
    role: 'Marketing Director',
    company: 'E-commerce Brand',
    content: 'The visual generation feature is incredible. Every post looks professionally designed, and our LinkedIn engagement has increased by 400% since we started using Viralyze.',
    rating: 5,
    avatar: 'EF',
    metrics: '+400% engagement'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Content Creators
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent block">
              Around the World
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how brands and creators are achieving viral success with our AI-powered platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-indigo-300" />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800">
                    {testimonial.metrics}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
