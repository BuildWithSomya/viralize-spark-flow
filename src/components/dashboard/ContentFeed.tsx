
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Clock, AlertCircle, Eye, Heart, Share, MoreHorizontal } from 'lucide-react';

const contentItems = [
  {
    id: 1,
    title: 'MIT Battery Technology Breakthrough',
    source: 'Wired',
    status: 'published',
    platform: 'LinkedIn',
    engagement: { likes: 234, shares: 45, comments: 67 },
    publishedAt: '2 hours ago',
    preview: 'Scientists at MIT have developed revolutionary battery technology that could charge EVs in 10 minutes...'
  },
  {
    id: 2,
    title: 'AI Revolutionizes Healthcare Diagnosis',
    source: 'Reddit',
    status: 'processing',
    platform: 'Instagram',
    engagement: { likes: 0, shares: 0, comments: 0 },
    publishedAt: null,
    preview: 'Processing AI analysis and visual generation...'
  },
  {
    id: 3,
    title: 'Space X Mars Mission Update',
    source: 'BlueeSky',
    status: 'scheduled',
    platform: 'LinkedIn',
    engagement: { likes: 0, shares: 0, comments: 0 },
    publishedAt: 'in 3 hours',
    preview: 'SpaceX announces major breakthrough in Mars colonization technology with new rocket design...'
  },
  {
    id: 4,
    title: 'Quantum Computing Milestone',
    source: 'Wired',
    status: 'published',
    platform: 'Instagram',
    engagement: { likes: 189, shares: 23, comments: 34 },
    publishedAt: '1 day ago',
    preview: 'Google achieves quantum supremacy with new 70-qubit processor, solving complex problems...'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'published':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'processing':
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case 'scheduled':
      return <Clock className="w-4 h-4 text-blue-500" />;
    default:
      return <AlertCircle className="w-4 h-4 text-red-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'bg-green-100 text-green-800';
    case 'processing':
      return 'bg-yellow-100 text-yellow-800';
    case 'scheduled':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-red-100 text-red-800';
  }
};

const ContentFeed = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredContent = contentItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.status === activeTab;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Content Pipeline</span>
            <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600">
              View All
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">{item.source}</Badge>
                        <Badge variant="outline" className="text-xs">{item.platform}</Badge>
                        <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-gray-600 mb-3">{item.preview}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    {item.status === 'published' && (
                      <>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.engagement.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4" />
                          <span>{item.engagement.shares}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.engagement.comments}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {item.publishedAt || 'Processing...'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContentFeed;
