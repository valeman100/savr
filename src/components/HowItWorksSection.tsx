import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import MVPModal from './MVPModal';

const HowItWorksSection: React.FC = () => {
  const [mvpModalOpen, setMvpModalOpen] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Initial User Pool',
      description: 'Connect with friends and family to stay motivated and share your financial journey.',
      features: ['Social accountability', 'Friend connections', 'Shared goals'],
      color: '#0D8CFE',
    },
    {
      number: '02',
      title: 'Bank Connection',
      description: 'Securely connect your bank accounts using industry-standard encryption and read-only access.',
      features: ['Bank-level security', 'Read-only access', 'Real-time sync'],
      color: '#8FDE02',
    },
    {
      number: '03',
      title: 'AI Analysis',
      description: 'Our AI analyzes your profile and creates a personalized investment strategy tailored to your goals.',
      features: ['Smart allocation', 'Diversification', 'Risk management'],
      color: '#F2F50E',
    },
    {
      number: '04',
      title: 'Recurring Investments',
      description: 'Automatically save spare change and set up recurring investments to build wealth effortlessly.',
      features: ['Auto-savings', 'Round-ups', 'Smart timing'],
      color: '#0D8CFE',
    },
  ];

  return (
    <>
      <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                How It Works
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Getting started with Savr is simple. In just a few minutes, 
                you'll have a personalized investment strategy working for you.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => setMvpModalOpen(true)}
                sx={{
                  backgroundColor: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#0b7ae6',
                  },
                }}
              >
                Try it out
              </Button>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={step.number}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 4,
                      border: '1px solid #e0e7ff',
                      backgroundColor: 'white',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                        borderColor: step.color,
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            backgroundColor: `${step.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                            border: `2px solid ${step.color}30`,
                            flexShrink: 0,
                            minWidth: 60,
                            minHeight: 60,
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              color: step.color,
                              lineHeight: 1,
                            }}
                          >
                            {step.number}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            lineHeight: 1.2,
                          }}
                        >
                          {step.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {step.description}
                      </Typography>
                      
                      <Box>
                        {step.features.map((feature, featureIndex) => (
                          <Box
                            key={feature}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <CheckCircle
                              size={16}
                              color={step.color}
                              style={{ marginRight: 8, flexShrink: 0 }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500,
                              }}
                            >
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Ready to Start Your Financial Journey?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Join thousands of Gen Z investors who are already building wealth with Savr.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setMvpModalOpen(true)}
                  sx={{
                    backgroundColor: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#0b7ae6',
                    },
                  }}
                >
                  Try it out
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#0b7ae6',
                      backgroundColor: 'rgba(13, 140, 254, 0.04)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <MVPModal open={mvpModalOpen} onClose={() => setMvpModalOpen(false)} />
    </>
  );
};

export default HowItWorksSection; 