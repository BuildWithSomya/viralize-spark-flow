
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Zap, Image, CheckCircle, Sparkles } from 'lucide-react';

const LiveDemo = () => {
  const [step, setStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputText, setInputText] = useState(
    "Scientists at MIT have developed a revolutionary new battery technology that could charge electric vehicles in just 10 minutes while lasting 10 times longer than current batteries."
  );

  const demoSteps = [
    {
      title: 'Original Content',
      description: 'Input any article, post, or content',
      content: inputText,
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Processing',
      description: 'Our AI analyzes and transforms content',
      content: 'Analyzing content structure, extracting key insights, optimizing for engagement...',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Visual Generation',
      description: 'Creating stunning visuals with Gemini 2.0',
      content: 'Generated: Futuristic battery visualization with electric blue energy flows',
      icon: Image,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Viral Post Created',
      description: 'Ready for LinkedIn & Instagram',
      content: `🔋 BREAKTHROUGH: MIT's 10-minute EV charging revolution is here!

While everyone's stuck with hour-long charging sessions, scientists just cracked the code for batteries that:
✅ Charge in 10 minutes
✅ Last 10x longer
✅ Could change transportation forever

This isn't just an upgrade - it's a complete game-changer for electric vehicles.

What would you do with a car that charges faster than it takes to grab coffee?

#Innovation #ElectricVehicles #Technology #MIT #Future`,
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const runDemo = async () => {
    setIsProcessing(true);
    setStep(0);
    
    for (let i = 0; i <= 3; i++) {
      await new Promise(resolve => setTimeout(resolve, i === 1 ? 2000 : 1500));
      setStep(i);
    }
    
    setIsProcessing(false);
  };

  useEffect(() => {
    runDemo();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            Live Demo
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Watch AI Transform Content
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Into Viral Posts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI takes any content and transforms it into engaging, viral-ready social media posts in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Input Content</span>
                <Badge variant="secondary">Editable</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-32 resize-none"
                placeholder="Paste any article, post, or content here..."
              />
              <Button 
                onClick={runDemo} 
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Transform with AI'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Transformation Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demoSteps.map((demoStep, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: index <= step ? 1 : 0.3,
                      scale: index === step ? 1.02 : 1 
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      index <= step ? 'bg-gradient-to-r from-indigo-50 to-purple-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${demoStep.color} flex items-center justify-center`}>
                      <demoStep.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{demoStep.title}</div>
                      <div className="text-sm text-gray-600">{demoStep.description}</div>
                    </div>
                    {index === step && isProcessing && index === 1 && (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${demoSteps[step].color} flex items-center justify-center`}>
                      <demoSteps[step].icon className="w-3 h-3 text-white" />
                    </div>
                    <span>{demoSteps[step].title}</span>
                    <Badge variant="outline">{demoSteps[step].description}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                      {demoSteps[step].content}
                    </pre>
                  </div>
                  {step === 3 && (
                    <div className="mt-4 flex space-x-4">
                      <Badge className="bg-blue-100 text-blue-800">LinkedIn Ready</Badge>
                      <Badge className="bg-pink-100 text-pink-800">Instagram Ready</Badge>
                      <Badge className="bg-green-100 text-green-800">Visual Included</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LiveDemo;
