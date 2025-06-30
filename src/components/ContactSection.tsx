import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const faqs = [
    {
      question: 'How does Savr ensure the security of my financial data?',
      answer: 'We use bank-level encryption and read-only access through Plaid integration. Your data is never stored on our servers and we only access what\'s necessary for portfolio management.',
    },
    {
      question: 'What makes Savr different from other investment apps?',
      answer: 'Savr combines education, investing, and saving in one platform specifically designed for Gen Z. We focus on financial literacy first, then provide smart, automated investing tools.',
    },
    {
      question: 'How much do I need to start investing with Savr?',
      answer: 'You can start with as little as $1. Our fractional share investing allows you to own pieces of expensive stocks and build a diversified portfolio with small amounts.',
    },
    {
      question: 'Is Savr regulated and compliant?',
      answer: 'Yes, we work with registered investment advisors and follow all SEC regulations. Your investments are held by our custodian partner and protected by SIPC insurance.',
    },
    {
      question: 'Can I withdraw my money anytime?',
      answer: 'Yes, you can withdraw your funds at any time. Standard market settlement times apply (1-3 business days for most securities).',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@savr.com',
      color: '#0D8CFE',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: '#8FDE02',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'San Francisco, CA',
      color: '#F2F50E',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', color: '#1DA1F2' },
    { icon: Linkedin, href: '#', color: '#0077B5' },
    { icon: Instagram, href: '#', color: '#E4405F' },
  ];

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
              Get in Touch
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
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                      Contact Form
                    </Typography>
                    
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                      />
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<Send size={20} />}
                        sx={{
                          backgroundColor: '#0D8CFE',
                          '&:hover': {
                            backgroundColor: '#0a7ce8',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
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
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      {contactInfo.map((info, index) => (
                        <Box
                          key={info.label}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              backgroundColor: `${info.color}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <info.icon size={20} color={info.color} />
                          </Box>
                          <Box>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {info.label}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                        Follow Us
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {socialLinks.map((social, index) => (
                          <IconButton
                            key={index}
                            sx={{
                              backgroundColor: `${social.color}15`,
                              color: social.color,
                              '&:hover': {
                                backgroundColor: `${social.color}25`,
                              },
                            }}
                          >
                            <social.icon size={20} />
                          </IconButton>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ mt: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  textAlign: 'center',
                  color: 'text.primary',
                }}
              >
                Frequently Asked Questions
              </Typography>
              
              <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleAccordionChange(`panel${index}`)}
                    sx={{
                      mb: 1,
                      '&:before': { display: 'none' },
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{ fontWeight: 600 }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 