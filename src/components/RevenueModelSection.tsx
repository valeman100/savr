import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Users, TrendingUp, Building } from 'lucide-react';

const RevenueModelSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Freemium & Pro',
      description: 'Premium features and advanced analytics',
      revenue: '$15-25/month',
      color: '#0D8CFE',
    },
    {
      icon: TrendingUp,
      title: 'Transaction Fee Share',
      description: 'Small percentage of investment transactions',
      revenue: '0.25-0.5%',
      color: '#8FDE02',
    },
    {
      icon: Building,
      title: 'B2B White-label',
      description: 'Licensing to banks and financial institutions',
      revenue: '$50K-200K/year',
      color: '#F2F50E',
    },
    {
      icon: Users,
      title: 'Affiliate Commission',
      description: 'Partnerships with financial products',
      revenue: '5-15%',
      color: '#0D8CFE',
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic financial education',
        'Goal setting & tracking',
        'Community access',
        'Basic portfolio insights',
      ],
      limitations: ['Limited investment options', 'Basic analytics'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Everything in Free',
        'Advanced investment portfolios',
        'AI-powered recommendations',
        'Priority customer support',
        'Advanced analytics & reports',
        'Tax optimization tools',
        'Social accountability circles',
      ],
      limitations: [],
      popular: true,
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
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
              Revenue Model
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
              Multiple revenue streams designed for sustainable growth and profitability
            </Typography>
          </Box>

          {/* Revenue Streams */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {revenueStreams.map((stream, index) => (
              <Grid item xs={12} sm={6} md={3} key={stream.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: `2px solid ${stream.color}20`,
                      '&:hover': {
                        borderColor: stream.color,
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
                          backgroundColor: `${stream.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <stream.icon size={30} color={stream.color} />
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {stream.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                          lineHeight: 1.5,
                        }}
                      >
                        {stream.description}
                      </Typography>

                      <Chip
                        label={stream.revenue}
                        sx={{
                          backgroundColor: stream.color,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'text.primary',
                }}
              >
                Pricing Plans
              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {pricingPlans.map((plan, index) => (
                <Grid item xs={12} md={6} lg={4} key={plan.name}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        position: 'relative',
                        border: plan.popular ? '3px solid #8FDE02' : '2px solid #e0e0e0',
                        transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                        '&:hover': {
                          transform: plan.popular ? 'scale(1.08)' : 'scale(1.03)',
                          transition: 'all 0.3s ease',
                        },
                      }}
                    >
                      {plan.popular && (
                        <Chip
                          label="Most Popular"
                          sx={{
                            position: 'absolute',
                            top: -12,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#8FDE02',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      )}
                      
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: 'text.primary',
                          }}
                        >
                          {plan.name}
                        </Typography>
                        
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h2"
                            sx={{
                              fontWeight: 700,
                              color: plan.popular ? '#8FDE02' : 'text.primary',
                            }}
                          >
                            {plan.price}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              textTransform: 'capitalize',
                            }}
                          >
                            {plan.period}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                          {plan.features.map((feature, featureIndex) => (
                            <Box
                              key={featureIndex}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 1,
                                textAlign: 'left',
                              }}
                            >
                              <Box
                                sx={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: '50%',
                                  backgroundColor: plan.popular ? '#8FDE02' : '#0D8CFE',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                  }}
                                >
                                  ✓
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                          
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <Box
                              key={limitationIndex}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                mb: 1,
                                textAlign: 'left',
                              }}
                            >
                              <Box
                                sx={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: '50%',
                                  backgroundColor: '#ff6b6b',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.75rem',
                                  }}
                                >
                                  ✗
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {limitation}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        <Box
                          sx={{
                            p: 2,
                            backgroundColor: plan.popular ? '#8FDE02' : 'transparent',
                            color: plan.popular ? 'white' : 'inherit',
                            borderRadius: 2,
                            mb: 3,
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {plan.popular ? 'Start Free Trial' : 'Get Started'}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RevenueModelSection; 