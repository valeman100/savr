import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PieChart, TrendingUp, Users, Code } from 'lucide-react';

const FinancingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fundAllocation = [
    { category: 'Product Development', percentage: 40, amount: '$2M', color: '#0D8CFE' },
    { category: 'Marketing & Growth', percentage: 25, amount: '$1.25M', color: '#8FDE02' },
    { category: 'Team & Operations', percentage: 20, amount: '$1M', color: '#F2F50E' },
    { category: 'Regulatory & Compliance', percentage: 15, amount: '$750K', color: '#ff6b6b' },
  ];

  const milestones = [
    { date: 'Q1 2024', milestone: 'Seed Round Close', status: 'completed' },
    { date: 'Q2 2024', milestone: 'Beta Launch', status: 'in-progress' },
    { date: 'Q3 2024', milestone: '10K Users', status: 'planned' },
    { date: 'Q4 2024', milestone: 'Series A', status: 'planned' },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
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
              Seed Round Financing
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
              $5M seed round to accelerate product development and market expansion
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
                      Fund Allocation
                    </Typography>
                    
                    {fundAllocation.map((item, index) => (
                      <Box key={item.category} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {item.category}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 600, color: item.color }}>
                            {item.amount}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={item.percentage}
                          sx={{
                            height: 12,
                            borderRadius: 6,
                            backgroundColor: `${item.color}20`,
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: item.color,
                            },
                          }}
                        />
                        <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
                          {item.percentage}% of total funding
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
                      Key Milestones
                    </Typography>
                    
                    {milestones.map((milestone, index) => (
                      <Box key={milestone.milestone} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: '50%',
                              backgroundColor: 
                                milestone.status === 'completed' ? '#8FDE02' :
                                milestone.status === 'in-progress' ? '#F2F50E' : '#e0e0e0',
                            }}
                          />
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {milestone.milestone}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', ml: 4 }}>
                          {milestone.date}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinancingSection; 