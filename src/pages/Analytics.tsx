
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Heart, Share, Eye, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Navbar from '@/components/Navbar';

const engagementData = [
  { date: '2024-01-01', LinkedIn: 45, Instagram: 32 },
  { date: '2024-01-02', LinkedIn: 78, Instagram: 54 },
  { date: '2024-01-03', LinkedIn: 92, Instagram: 67 },
  { date: '2024-01-04', LinkedIn: 134, Instagram: 89 },
  { date: '2024-01-05', LinkedIn: 156, Instagram: 112 },
  { date: '2024-01-06', LinkedIn: 189, Instagram: 134 },
  { date: '2024-01-07', LinkedIn: 223, Instagram: 167 },
];

const contentPerformance = [
  { category: 'Technology', posts: 45, engagement: 89 },
  { category: 'Science', posts: 32, engagement: 76 },
  { category: 'Business', posts: 28, engagement: 82 },
  { category: 'Health', posts: 24, engagement: 71 },
];

const platformData = [
  { name: 'LinkedIn', value: 65, color: '#0077B5' },
  { name: 'Instagram', value: 35, color: '#E4405F' },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Analytics Dashboard 📊
                </h1>
                <p className="text-gray-600">
                  Deep insights into your viral content performance
                </p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Reach', value: '2.4M', change: '+23%', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { title: 'Engagement Rate', value: '8.4%', change: '+45%', icon: Heart, color: 'from-pink-500 to-rose-500' },
              { title: 'Viral Posts', value: '34', change: '+67%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
              { title: 'Total Shares', value: '12.8K', change: '+34%', icon: Share, color: 'from-purple-500 to-indigo-500' },
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">{metric.change}</Badge>
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

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Engagement Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Line 
                        type="monotone" 
                        dataKey="LinkedIn" 
                        stroke="#0077B5" 
                        strokeWidth={3}
                        dot={{ fill: '#0077B5', strokeWidth: 2, r: 4 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="Instagram" 
                        stroke="#E4405F" 
                        strokeWidth={3}
                        dot={{ fill: '#E4405F', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span>Platform Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Content Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Content Category Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="engagement" fill="url(#categoryGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="categoryGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
