
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Image, Calendar, TrendingUp, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Content Generation',
    description: 'Transform any article or post into viral social media content with advanced AI that understands engagement patterns.',
    color: 'from-yellow-400 to-orange-500',
    metrics: '95% accuracy'
  },
  {
    icon: Image,
    title: 'Smart Visual Creation',
    description: 'Generate stunning visuals automatically using Gemini 2.0 Flash, perfectly matched to your content theme.',
    color: 'from-green-400 to-emerald-500',
    metrics: '10x faster'
  },
  {
    icon: Calendar,
    title: 'Multi-Platform Automation',
    description: 'Seamlessly post to LinkedIn and Instagram with optimal timing and platform-specific formatting.',
    color: 'from-blue-400 to-cyan-500',
    metrics: '24/7 posting'
  },
  {
    icon: TrendingUp,
    title: 'Viral Optimization',
    description: 'Built-in engagement algorithms that maximize your content\'s viral potential across all platforms.',
    color: 'from-purple-400 to-pink-500',
    metrics: '300% boost'
  },
  {
    icon: Users,
    title: 'Audience Intelligence',
    description: 'Deep analytics on what content resonates with your audience, powered by real-time data analysis.',
    color: 'from-indigo-400 to-purple-500',
    metrics: 'Real-time insights'
  },
  {
    icon: CheckCircle,
    title: 'Content Quality Assurance',
    description: 'AI-powered content review ensures every post meets quality standards before publication.',
    color: 'from-emerald-400 to-teal-500',
    metrics: '99.9% uptime'
  }
];

const FeatureShowcase = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Go
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              Viral on Social Media
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform handles the entire content lifecycle, from creation to optimization to automated posting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {feature.metrics}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
