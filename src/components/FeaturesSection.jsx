import React from 'react'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold text-center mb-20 text-white bg-clip-text"
        >
          Features
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Large Feature Card */}
          <motion.div variants={cardVariants} className="md:col-span-2 group">
            <div className="h-full bg-gradient-to-br from-violet-900/20 via-violet-800/15 to-fuchsia-900/10 backdrop-blur-lg rounded-3xl p-10 
              border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300
              hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interactive Learning
                  </h3>
                  <p className="text-white/80">Engage with our interactive quizzes designed to make learning fun and effective. Track your progress and improve your skills.</p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-violet-400/50 via-fuchsia-400/50 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Feature Card - Multiple Subjects */}
          <motion.div variants={cardVariants} className="group">
            <div className="h-full bg-gradient-to-br from-violet-900/20 via-violet-800/15 to-fuchsia-900/10 backdrop-blur-lg rounded-3xl p-10 
              border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300
              hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📚</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Multiple Subjects
                  </h3>
                  <p className="text-white/80">Choose from a variety of subjects to test and enhance your knowledge.</p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-violet-400/50 via-fuchsia-400/50 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Feature Card - Progress Tracking */}
          <motion.div variants={cardVariants} className="group">
            <div className="h-full bg-gradient-to-br from-violet-900/20 via-violet-800/15 to-fuchsia-900/10 backdrop-blur-lg rounded-3xl p-10 
              border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300
              hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📊</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Progress Tracking
                  </h3>
                  <p className="text-white/80">Monitor your learning journey with detailed progress tracking and analytics.</p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-violet-400/50 via-fuchsia-400/50 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large Feature Card - Instant Feedback */}
          <motion.div variants={cardVariants} className="md:col-span-2 group">
            <div className="h-full bg-gradient-to-br from-violet-900/20 via-violet-800/15 to-fuchsia-900/10 backdrop-blur-lg rounded-3xl p-10 
              border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300
              hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Instant Feedback
                  </h3>
                  <p className="text-white/80">Get immediate feedback on your answers and detailed explanations to help you learn from your mistakes.</p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-violet-400/50 via-fuchsia-400/50 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Feature Card - Personalized Learning */}
          <motion.div variants={cardVariants} className="group">
            <div className="h-full bg-gradient-to-br from-violet-900/20 via-violet-800/15 to-fuchsia-900/10 backdrop-blur-lg rounded-3xl p-10 
              border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300
              hover:shadow-[0_0_30px_-5px] hover:shadow-violet-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Personalized Learning
                  </h3>
                  <p className="text-white/80">Adaptive quizzes that adjust to your skill level and learning pace.</p>
                </div>
                <div className="mt-6">
                  <div className="w-full h-1 bg-gradient-to-r from-violet-400/50 via-fuchsia-400/50 to-transparent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Updated background overlay with new colors */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"
          style={{ transform: 'translateY(-20%)' }}
        />
        <div 
          className="absolute w-[800px] h-[800px] -left-1/4 top-1/4 bg-violet-500/10 rounded-full blur-[120px]"
        />
        <div 
          className="absolute w-[600px] h-[600px] -right-1/4 top-1/2 bg-fuchsia-500/10 rounded-full blur-[120px]"
        />
      </div>
    </section>
  )
}

export default FeaturesSection
