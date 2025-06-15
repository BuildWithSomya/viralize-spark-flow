
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

const activities = [
  {
    type: 'success',
    message: 'Post published to LinkedIn',
    time: '2 minutes ago',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    type: 'engagement',
    message: 'High engagement on MIT battery post',
    time: '15 minutes ago',
    icon: TrendingUp,
    color: 'text-blue-500'
  },
  {
    type: 'milestone',
    message: 'Reached 10K followers milestone',
    time: '1 hour ago',
    icon: Users,
    color: 'text-purple-500'
  },
  {
    type: 'processing',
    message: 'AI generated 5 new posts',
    time: '2 hours ago',
    icon: Zap,
    color: 'text-yellow-500'
  }
];

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className={`mt-1 ${activity.color}`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecentActivity;
