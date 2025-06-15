
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, TrendingUp, Users, Sparkles, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import LiveDemo from '@/components/LiveDemo';
import Analytics from '@/components/AnalyticsPreview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <FloatingParticles />
      <motion.div style={{ opacity }}>
        <Navbar />
        <Hero />
      </motion.div>
      
      <FeatureShowcase />
      <LiveDemo />
      <Analytics />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
