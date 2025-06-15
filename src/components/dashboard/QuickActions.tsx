
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Zap, Calendar, Settings } from 'lucide-react';

const actions = [
  {
    title: 'Create Post',
    description: 'Generate new content from URL',
    icon: Plus,
    color: 'from-blue-500 to-cyan-500',
    action: () => console.log('Create post')
  },
  {
    title: 'Auto Generate',
    description: 'Let AI find trending content',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    action: () => console.log('Auto generate')
  },
  {
    title: 'Schedule Posts',
    description: 'Plan your content calendar',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
    action: () => console.log('Schedule posts')
  },
  {
    title: 'Settings',
    description: 'Configure AI preferences',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    action: () => console.log('Settings')
  }
];

const QuickActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={action.action}
                  variant="ghost"
                  className="w-full justify-start p-4 h-auto hover:bg-gradient-to-r hover:from-gray-50 hover:to-indigo-50"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-3`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{action.title}</div>
                    <div className="text-sm text-gray-600">{action.description}</div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuickActions;
