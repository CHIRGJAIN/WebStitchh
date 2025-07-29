import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Smartphone, Globe, Brain, Code, Palette, Zap } from 'lucide-react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: number;
  color: string;
}

const aiDemoSteps: DemoStep[] = [
  {
    id: 'data-input',
    title: 'Data Collection',
    description: 'AI system processes incoming data streams',
    icon: Brain,
    duration: 2000,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'analysis',
    title: 'Pattern Analysis',
    description: 'Machine learning algorithms identify patterns',
    icon: Zap,
    duration: 3000,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'prediction',
    title: 'Prediction Generation',
    description: 'AI generates intelligent predictions',
    icon: Brain,
    duration: 2500,
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'output',
    title: 'Actionable Insights',
    description: 'System delivers actionable recommendations',
    icon: Zap,
    duration: 2000,
    color: 'from-orange-500 to-red-500'
  }
];

const webDemoSteps: DemoStep[] = [
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Creating stunning visual designs',
    icon: Palette,
    duration: 2000,
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Building responsive web applications',
    icon: Code,
    duration: 3000,
    color: 'from-blue-500 to-green-500'
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    description: 'Ensuring quality and performance',
    icon: Globe,
    duration: 2000,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description: 'Launching your website live',
    icon: Zap,
    duration: 1500,
    color: 'from-green-500 to-blue-500'
  }
];

const mobileDemoSteps: DemoStep[] = [
  {
    id: 'wireframe',
    title: 'Wireframing',
    description: 'Planning app structure and flow',
    icon: Smartphone,
    duration: 2000,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'prototype',
    title: 'Prototyping',
    description: 'Creating interactive prototypes',
    icon: Palette,
    duration: 2500,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'native-dev',
    title: 'Native Development',
    description: 'Building for iOS and Android',
    icon: Code,
    duration: 3500,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'app-store',
    title: 'App Store Launch',
    description: 'Publishing to app stores',
    icon: Zap,
    duration: 2000,
    color: 'from-green-500 to-blue-500'
  }
];

interface ServiceDemoProps {
  service: 'ai' | 'web' | 'mobile';
  title: string;
}

export const ServiceDemo: React.FC<ServiceDemoProps> = ({ service, title }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demoSteps = service === 'ai' ? aiDemoSteps : service === 'web' ? webDemoSteps : mobileDemoSteps;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying && currentStep < demoSteps.length) {
      const currentStepData = demoSteps[currentStep];
      
      // Progress animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 100;
          }
          return prev + (100 / (currentStepData.duration / 50));
        });
      }, 50);

      // Step transition
      interval = setTimeout(() => {
        setProgress(0);
        if (currentStep < demoSteps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsPlaying(false);
          setCurrentStep(0);
        }
      }, currentStepData.duration);
    }

    return () => {
      clearTimeout(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentStep, demoSteps]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title} Demo
        </h3>
        <div className="flex space-x-3">
          <motion.button
            onClick={handlePlay}
            disabled={isPlaying}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            whileHover={!isPlaying ? { scale: 1.05 } : {}}
            whileTap={!isPlaying ? { scale: 0.95 } : {}}
          >
            <Play className="w-4 h-4 mr-2" />
            Play
          </motion.button>
          <motion.button
            onClick={handlePause}
            disabled={!isPlaying}
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
            whileHover={isPlaying ? { scale: 1.05 } : {}}
            whileTap={isPlaying ? { scale: 0.95 } : {}}
          >
            <Pause className="w-4 h-4 mr-2" />
            Pause
          </motion.button>
          <motion.button
            onClick={handleReset}
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </motion.button>
        </div>
      </div>

      {/* Demo Visualization */}
      <div className="mb-8">
        <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {demoSteps.map((step, index) => (
              index === currentStep && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${step.color} rounded-full mb-4`}
                      animate={isPlaying ? { 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1, repeat: Infinity }
                      }}
                    >
                      <step.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-600">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Step Timeline */}
      <div className="space-y-4">
        {demoSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex items-center p-4 rounded-lg transition-all ${
              index === currentStep
                ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                : index < currentStep
                ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                : 'bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600'
            }`}
            animate={index === currentStep && isPlaying ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
              index === currentStep
                ? `bg-gradient-to-br ${step.color}`
                : index < currentStep
                ? 'bg-green-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}>
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {(step.duration / 1000).toFixed(1)}s
            </div>
          </motion.div>
        ))}
      </div>

      {/* Demo Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {demoSteps.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Steps</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {Math.round(demoSteps.reduce((acc, step) => acc + step.duration, 0) / 1000)}s
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {currentStep + 1}/{demoSteps.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
        </div>
      </div>
    </div>
  );
};