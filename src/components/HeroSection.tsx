import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';
import MVPModal from './MVPModal';

const HeroSection: React.FC = () => {
  const [mvpModalOpen, setMvpModalOpen] = useState(false);

  const presenters = [
    {
      name: 'Vinicius Cornetto',
      role: 'Sales Director',
      title: 'Shark Tank Business Angel',
      avatar: '/team-images/Vini.png',
    },
    {
      name: 'Valerio Mannucci',
      role: 'CTO',
      title: 'Google AI Department',
      avatar: '/team-images/Vale.png',
    },
    {
      name: 'Ana Silvestri',
      role: 'CMO',
      title: 'TikTok & Space X',
      avatar: '/team-images/Ana.png',
    },
    {
      name: 'Maria Garcia',
      role: 'Creative Director',
      title: 'Figma Board',
      avatar: '/team-images/Maria.png',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '67%', label: 'Gen Z struggle with investing' },
    { icon: Users, value: '10M+', label: 'Target users by 2030' },
    { icon: Target, value: '$50K', label: 'Average savings goal' },
  ];

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0D8CFE 0%, #8FDE02 100%)',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Financial freedom made simple
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                  }}
                >
                  Savr helps Gen Z build wealth through gamified learning, 
                  smart investing, and goal-based saving.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: '#7acd02',
                      },
                    }}
                  >
                    Request Beta Access
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => setMvpModalOpen(true)}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Try it out
                  </Button>
                </Box>

                {/* Stats */}
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <stat.icon size={20} />
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            {stat.value}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Meet the Founders Section */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    Meet the Founders
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      opacity: 0.9,
                      mb: 4,
                      fontWeight: 400,
                    }}
                  >
                    Experienced team with deep expertise in fintech and Gen Z markets
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  {presenters.map((presenter, index) => (
                    <Grid item xs={12} sm={6} key={presenter.name}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <Card
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                              borderColor: 'white',
                              transform: 'translateY(-4px)',
                              transition: 'all 0.3s ease',
                            },
                          }}
                        >
                          <CardContent sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar
                              src={presenter.avatar}
                              sx={{
                                width: 60,
                                height: 60,
                                mx: 'auto',
                                mb: 1,
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                              }}
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 0.5,
                                fontSize: '1rem',
                              }}
                            >
                              {presenter.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'secondary.main',
                                mb: 0.5,
                                fontWeight: 500,
                              }}
                            >
                              {presenter.role}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                opacity: 0.8,
                                fontSize: '0.75rem',
                              }}
                            >
                              {presenter.title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 6,
                      backgroundColor: 'linear-gradient(135deg, #0D8CFE 0%, #8FDE02 100%)',
                      borderRadius: 4,
                      color: 'white',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                      }}
                    >
                      Join the Financial Revolution
                    </Typography>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        opacity: 0.9,
                        maxWidth: 600,
                        mx: 'auto',
                      }}
                    >
                      Be part of the movement that's transforming how Gen Z thinks about and builds wealth. 
                      Early access is limited - secure your spot today.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: 'white',
                          color: '#0D8CFE',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        Request Beta Access
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() => setMvpModalOpen(true)}
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        Try it out
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MVPModal open={mvpModalOpen} onClose={() => setMvpModalOpen(false)} />
    </>
  );
};

export default HeroSection; 