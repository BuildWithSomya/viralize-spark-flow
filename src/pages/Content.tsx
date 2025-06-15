import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Plus, Calendar, Edit, Trash2, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Content = () => {
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
                  Content Manager 📝
                </h1>
                <p className="text-gray-600">
                  Manage your AI-generated content pipeline
                </p>
              </div>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Content
              </Button>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Search content..." 
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Content</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: item * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className="mb-2 bg-green-100 text-green-800">Published</Badge>
                              <CardTitle className="text-lg">MIT Battery Breakthrough</CardTitle>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">
                            Revolutionary 10-minute charging technology could transform electric vehicles...
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                              <Badge variant="outline" className="text-xs">LinkedIn</Badge>
                              <Badge variant="outline" className="text-xs">Technology</Badge>
                            </div>
                            <span className="text-xs text-gray-500">2 hours ago</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>234 likes</span>
                              <span>45 shares</span>
                              <span>67 comments</span>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tab contents would be similar */}
              <TabsContent value="published">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Published Content</h3>
                  <p className="text-gray-600">All your published posts across platforms</p>
                </div>
              </TabsContent>

              <TabsContent value="scheduled">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Content</h3>
                  <p className="text-gray-600">Content ready to be published</p>
                </div>
              </TabsContent>

              <TabsContent value="drafts">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Draft Content</h3>
                  <p className="text-gray-600">Content waiting for your review</p>
                </div>
              </TabsContent>

              <TabsContent value="processing">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Content</h3>
                  <p className="text-gray-600">AI is working on these posts</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Content;
