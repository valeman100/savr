import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  TrendingUp, 
  Target,
  AlertTriangle,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problemStats = [
    { value: '67%', label: 'of Gen Z struggle with investing', color: '#ff6b6b' },
    { value: '89%', label: 'feel overwhelmed by financial jargon', color: '#ffa726' },
    { value: '73%', label: 'have no emergency savings', color: '#ef5350' },
    { value: '45%', label: 'live paycheck to paycheck', color: '#ec407a' },
  ];

  const threePillars = [
    {
      icon: BookOpen,
      title: 'Academy',
      description: 'Gamified micro-lessons that make financial education engaging and accessible.',
      features: ['5-minute daily lessons', 'Interactive quizzes', 'Progress tracking', 'Certification badges'],
      color: '#0D8CFE',
    },
    {
      icon: TrendingUp,
      title: 'Invest Toolkit',
      description: 'Curated investment portfolios designed for Gen Z risk tolerance and goals.',
      features: ['AI-powered allocation', 'Fractional shares', 'Automated rebalancing', 'Real-time insights'],
      color: '#8FDE02',
    },
    {
      icon: Target,
      title: 'Goal‑Based Saving',
      description: 'Smart saving strategies that turn dreams into achievable financial milestones.',
      features: ['Round-up automation', 'Goal visualization', 'Social accountability', 'Milestone rewards'],
      color: '#F2F50E',
    },
  ];

  return (
    <Box id="features"sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Problem Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              The Problem
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Gen Z faces unprecedented financial challenges. Traditional financial services 
              aren't designed for their needs, leaving them behind in wealth building.
            </Typography>
          </Box>

          {/* Problem Stats */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {problemStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: `2px solid ${stat.color}20`,
                      backgroundColor: `${stat.color}08`,
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: stat.color,
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              The Solution
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Savr combines education, investing, and saving into one seamless platform 
              designed specifically for Gen Z's financial journey.
            </Typography>
          </Box>

          {/* Three Pillars */}
          <Grid container spacing={4}>
            {threePillars.map((pillar, index) => (
              <Grid item xs={12} md={4} key={pillar.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: `2px solid ${pillar.color}20`,
                      '&:hover': {
                        borderColor: pillar.color,
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: `${pillar.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <pillar.icon size={40} color={pillar.color} />
                      </Box>
                      
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {pillar.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {pillar.description}
                      </Typography>

                      <Box sx={{ textAlign: 'left' }}>
                        {pillar.features.map((feature, featureIndex) => (
                          <Box
                            key={feature}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              mb: 1,
                            }}
                          >
                            <CheckCircle size={16} color={pillar.color} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProblemSolutionSection; 