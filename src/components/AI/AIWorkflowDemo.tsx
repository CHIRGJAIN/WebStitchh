import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  MessageCircle, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'pending' | 'processing' | 'completed';
  duration: number;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'data-input',
    title: 'Data Input',
    description: 'Collecting and preprocessing customer data',
    icon: BarChart3,
    status: 'pending',
    duration: 2000
  },
  {
    id: 'ai-analysis',
    title: 'AI Analysis',
    description: 'Machine learning algorithms analyze patterns',
    icon: Brain,
    status: 'pending',
    duration: 3000
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Automated workflows trigger based on insights',
    icon: Zap,
    status: 'pending',
    duration: 2500
  },
  {
    id: 'response',
    title: 'Intelligent Response',
    description: 'AI-powered responses and recommendations',
    icon: MessageCircle,
    status: 'pending',
    duration: 1500
  }
];

export const AIWorkflowDemo: React.FC = () => {
  const [steps, setSteps] = useState<WorkflowStep[]>(workflowSteps);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startWorkflow = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));
  };

  const pauseWorkflow = () => {
    setIsRunning(false);
  };

  const resetWorkflow = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));
  };

  useEffect(() => {
    if (!isRunning || currentStep >= steps.length) return;

    const timer = setTimeout(() => {
      setSteps(prev => prev.map((step, index) => {
        if (index === currentStep) {
          return { ...step, status: 'processing' };
        }
        return step;
      }));

      const completionTimer = setTimeout(() => {
        setSteps(prev => prev.map((step, index) => {
          if (index === currentStep) {
            return { ...step, status: 'completed' };
          }
          return step;
        }));

        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsRunning(false);
        }
      }, steps[currentStep].duration);

      return () => clearTimeout(completionTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            AI Workflow Demo
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Experience how our AI automation processes work in real-time
          </p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            onClick={startWorkflow}
            disabled={isRunning}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all ${
              isRunning 
                ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
            }`}
            whileHover={!isRunning ? { scale: 1.05 } : {}}
            whileTap={!isRunning ? { scale: 0.95 } : {}}
          >
            <Play className="w-4 h-4 mr-2" />
            Start
          </motion.button>
          <motion.button
            onClick={pauseWorkflow}
            disabled={!isRunning}
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            whileHover={isRunning ? { scale: 1.05 } : {}}
            whileTap={isRunning ? { scale: 0.95 } : {}}
          >
            <Pause className="w-4 h-4 mr-2" />
            Pause
          </motion.button>
          <motion.button
            onClick={resetWorkflow}
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </motion.button>
        </div>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.id}
              className="flex items-center space-x-4"
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: step.status === 'pending' ? 0.5 : 1,
                scale: step.status === 'processing' ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                step.status === 'pending' 
                  ? 'bg-gray-100 dark:bg-gray-700' 
                  : step.status === 'processing'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'bg-gradient-to-r from-green-500 to-blue-500'
              }`}>
                <AnimatePresence mode="wait">
                  {step.status === 'completed' ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      animate={step.status === 'processing' ? { rotate: 360 } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <IconComponent className={`w-6 h-6 ${
                        step.status === 'pending' 
                          ? 'text-gray-400 dark:text-gray-500' 
                          : 'text-white'
                      }`} />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {step.status === 'processing' && (
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>

              <div className="flex-1">
                <h4 className={`font-semibold transition-colors ${
                  step.status === 'pending' 
                    ? 'text-gray-500 dark:text-gray-400' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-sm transition-colors ${
                  step.status === 'pending' 
                    ? 'text-gray-400 dark:text-gray-500' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {step.description}
                </p>
              </div>

              <div className="flex items-center">
                {step.status === 'processing' && (
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
                {index < steps.length - 1 && (
                  <ArrowRight className={`w-4 h-4 transition-colors ${
                    step.status === 'completed' 
                      ? 'text-green-500' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`} />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {currentStep >= steps.length && !isRunning && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-300">
                Workflow Completed Successfully!
              </h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                AI automation has processed the data and generated intelligent responses.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};