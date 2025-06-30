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
import {
  Users,
  Shield,
  Brain,
  PiggyBank,
} from 'lucide-react';
import MVPModal from './MVPModal';

const FeaturesSection: React.FC = () => {
  const [mvpModalOpen, setMvpModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Initial User Pool',
      description: 'Connect with friends and family to stay motivated and share your financial journey.',
      color: '#0D8CFE',
    },
    {
      icon: Shield,
      title: 'Bank Connection',
      description: 'Securely connect your bank accounts using industry-standard encryption and read-only access.',
      color: '#8FDE02',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI analyzes your profile and creates a personalized investment strategy tailored to your goals.',
      color: '#F2F50E',
    },
    {
      icon: PiggyBank,
      title: 'Recurring Investments',
      description: 'Automatically save spare change and set up recurring investments to build wealth effortlessly.',
      color: '#0D8CFE',
    },
  ];

  return (
    <>
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid #e0e7ff',
                      backgroundColor: 'white',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        borderColor: feature.color,
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: `${feature.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          border: `2px solid ${feature.color}30`,
                        }}
                      >
                        <feature.icon size={32} color={feature.color} />
                      </Box>
                      
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'text.primary',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <MVPModal open={mvpModalOpen} onClose={() => setMvpModalOpen(false)} />
    </>
  );
};

export default FeaturesSection; 