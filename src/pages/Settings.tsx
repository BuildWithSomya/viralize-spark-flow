
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon, User, Bell, Lock, Palette, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Settings ⚙️
            </h1>
            <p className="text-gray-600">
              Configure your Viralyze experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="platforms">Platforms</TabsTrigger>
                <TabsTrigger value="ai">AI Settings</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Profile Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" defaultValue="Tech Startup Inc." />
                    </div>
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="platforms">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Connected Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* LinkedIn */}
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">in</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">LinkedIn</h3>
                            <p className="text-sm text-gray-600">Connected as @johndoe</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-green-100 text-green-800">Connected</Badge>
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      </div>

                      {/* Instagram */}
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">📷</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">Instagram</h3>
                            <p className="text-sm text-gray-600">Not connected</p>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>AI Configuration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Auto-generate posts</Label>
                          <p className="text-sm text-gray-600">Automatically create posts from trending content</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Visual generation</Label>
                          <p className="text-sm text-gray-600">Create AI images for every post</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Engagement optimization</Label>
                          <p className="text-sm text-gray-600">Optimize posts for maximum viral potential</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contentSources">Content Sources</Label>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        {['Wired', 'Reddit', 'BluesSky'].map((source) => (
                          <div key={source} className="flex items-center space-x-2">
                            <Switch defaultChecked />
                            <span className="text-sm">{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="w-5 h-5" />
                      <span>Notification Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { title: 'Post published', desc: 'Get notified when posts go live' },
                        { title: 'High engagement', desc: 'Alert when posts perform exceptionally well' },
                        { title: 'Processing complete', desc: 'Notify when AI finishes generating content' },
                        { title: 'Weekly reports', desc: 'Receive weekly performance summaries' },
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-base">{item.title}</Label>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                            <Switch defaultChecked={index < 2} />
                          </div>
                          {index < 3 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Billing & Subscription</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">Pro Plan</h3>
                            <p className="text-gray-600">Unlimited posts, AI generation, and analytics</p>
                          </div>
                          <Badge className="bg-indigo-100 text-indigo-800">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">$29/month</span>
                          <Button variant="outline">Change Plan</Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Usage This Month</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>Posts Generated</span>
                            <span>247 / Unlimited</span>
                          </div>
                          <div className="flex justify-between">
                            <span>AI Images Created</span>
                            <span>89 / Unlimited</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Platforms Connected</span>
                            <span>2 / Unlimited</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
