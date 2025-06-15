
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Zap, Calendar } from 'lucide-react';

const metrics = [
  {
    title: 'Posts Generated',
    value: '247',
    change: '+23%',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    trend: 'up'
  },
  {
    title: 'Total Engagement',
    value: '156K',
    change: '+45%',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    trend: 'up'
  },
  {
    title: 'Reach',
    value: '2.4M',
    change: '+67%',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    trend: 'up'
  },
  {
    title: 'Posts Scheduled',
    value: '34',
    change: '+12%',
    icon: Calendar,
    color: 'from-purple-500 to-pink-500',
    trend: 'up'
  }
];

const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'} className="bg-green-100 text-green-800">
                  {metric.change}
                </Badge>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
