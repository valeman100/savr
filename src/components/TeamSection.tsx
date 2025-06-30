import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Vinicius Cornetto',
      role: 'Sales Director',
      title: 'Shark Tank Business Angel',
      avatar: '/team-images/Vini.png',
      linkedin: '#',
      email: 'vinicius@savr.com',
    },
    {
      name: 'Valerio Mannucci',
      role: 'CTO',
      title: 'Google AI Department',
      avatar: '/team-images/Vale.png',
      linkedin: '#',
      email: 'valerio@savr.com',
    },
    {
      name: 'Ana Silvestri',
      role: 'CMO',
      title: 'TikTok & Space X',
      avatar: '/team-images/Ana.png',
      linkedin: '#',
      email: 'ana@savr.com',
    },
    {
      name: 'Maria Garcia',
      role: 'Creative Director',
      title: 'Figma Board',
      avatar: '/team-images/Maria.png',
      linkedin: '#',
      email: 'maria@savr.com',
    },
  ];

  const advisorRoles = [
    'Financial Services Expert',
    'Gen Z Marketing Specialist',
    'Regulatory & Compliance Advisor',
    'Investment Strategy Consultant',
  ];

  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
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
              Team & Advisors
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
              Experienced founders with deep expertise in fintech and Gen Z markets
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 3,
                          border: '3px solid #0D8CFE',
                        }}
                      />
                      
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {member.name}
                      </Typography>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      >
                        {member.role}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          color: 'text.secondary',
                        }}
                      >
                        {member.title}
                      </Typography>

                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<Linkedin size={16} />}
                          sx={{ borderColor: '#0D8CFE', color: '#0D8CFE' }}
                        >
                          LinkedIn
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<Mail size={16} />}
                          sx={{ borderColor: '#8FDE02', color: '#8FDE02' }}
                        >
                          Email
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card sx={{ backgroundColor: '#0D8CFE08', border: '2px solid #0D8CFE20' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  We're seeking advisors!
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                  }}
                >
                  Join our advisory board and help shape the future of Gen Z financial services
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                  {advisorRoles.map((role, index) => (
                    <Grid item xs={12} sm={6} md={3} key={role}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: 'white',
                          borderRadius: 2,
                          border: '1px solid #0D8CFE20',
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {role}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    backgroundColor: '#0D8CFE',
                    '&:hover': {
                      backgroundColor: '#0a7ce8',
                    },
                  }}
                >
                  Apply to be an Advisor
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection; 