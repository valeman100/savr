import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, Globe, Star } from 'lucide-react';

const GoToMarketSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const channels = [
    {
      icon: Users,
      title: 'Influencer Partnerships',
      description: 'Collaborate with Gen Z financial influencers',
      timeline: 'Q1 2024',
      color: '#0D8CFE',
    },
    {
      icon: TrendingUp,
      title: 'University Partnerships',
      description: 'Launch on college campuses nationwide',
      timeline: 'Q2 2024',
      color: '#8FDE02',
    },
    {
      icon: Globe,
      title: 'Neo-bank Integrations',
      description: 'Partner with digital banking platforms',
      timeline: 'Q3 2024',
      color: '#F2F50E',
    },
    {
      icon: Star,
      title: 'SEO & Retargeting',
      description: 'Digital marketing and content strategy',
      timeline: 'Ongoing',
      color: '#0D8CFE',
    },
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
              Go-to-Market Strategy
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
              Multi-channel approach to reach and engage Gen Z users
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {channels.map((channel, index) => (
              <Grid item xs={12} sm={6} md={3} key={channel.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: `2px solid ${channel.color}20`,
                      '&:hover': {
                        borderColor: channel.color,
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: `${channel.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <channel.icon size={30} color={channel.color} />
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {channel.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                          lineHeight: 1.5,
                        }}
                      >
                        {channel.description}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          backgroundColor: channel.color,
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: 600,
                        }}
                      >
                        {channel.timeline}
                      </Typography>
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

export default GoToMarketSection; 