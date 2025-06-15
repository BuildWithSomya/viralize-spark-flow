
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Heart, Share, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const engagementData = [
  { name: 'Mon', engagement: 45, reach: 1200 },
  { name: 'Tue', engagement: 78, reach: 2100 },
  { name: 'Wed', engagement: 92, reach: 2800 },
  { name: 'Thu', engagement: 134, reach: 3400 },
  { name: 'Fri', engagement: 156, reach: 4200 },
  { name: 'Sat', engagement: 189, reach: 5100 },
  { name: 'Sun', engagement: 223, reach: 6300 },
];

const platformData = [
  { platform: 'LinkedIn', posts: 24, engagement: 89 },
  { platform: 'Instagram', posts: 18, engagement: 76 },
];

const AnalyticsPreview = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            Performance Analytics
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your Viral Success
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
              With Real-Time Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get detailed insights into your content performance, engagement rates, and viral potential across all platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: TrendingUp, label: 'Engagement Rate', value: '+347%', color: 'from-green-500 to-emerald-500' },
            { icon: Users, label: 'Total Reach', value: '2.4M', color: 'from-blue-500 to-cyan-500' },
            { icon: Heart, label: 'Avg. Likes', value: '1,234', color: 'from-pink-500 to-rose-500' },
            { icon: Share, label: 'Viral Posts', value: '89', color: 'from-purple-500 to-indigo-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span>Engagement Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="url(#engagementGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    />
                    <defs>
                      <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-500" />
                  <span>Platform Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={platformData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="platform" />
                    <YAxis />
                    <Bar dataKey="engagement" fill="url(#platformGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="platformGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {platformData.map((platform) => (
                    <div key={platform.platform} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{platform.platform}</span>
                      <Badge variant="outline">{platform.posts} posts</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;
