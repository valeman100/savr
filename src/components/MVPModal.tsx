import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Chip,
  LinearProgress,
  Avatar,
  AvatarGroup,
  Alert,
  Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  TrendingUp,
  Target,
  CheckCircle,
  Users,
  DollarSign,
  Shield,
  Brain,
  PiggyBank,
  X,
} from 'lucide-react';

interface MVPModalProps {
  open: boolean;
  onClose: () => void;
}

const MVPModal: React.FC<MVPModalProps> = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    income: '',
    goals: [] as string[],
    riskTolerance: '',
    investmentAmount: 0,
    emergencyFund: 0,
    monthlySavings: 0,
  });

  const steps = [
    {
      label: 'Onboarding Quiz',
      icon: BookOpen,
      color: '#0D8CFE',
    },
    {
      label: 'Bank Connection',
      icon: Shield,
      color: '#8FDE02',
    },
    {
      label: 'AI Portfolio',
      icon: Brain,
      color: '#F2F50E',
    },
    {
      label: 'Goal Setting',
      icon: Target,
      color: '#0D8CFE',
    },
    {
      label: 'Dashboard',
      icon: TrendingUp,
      color: '#8FDE02',
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setUserData({
      name: '',
      age: '',
      income: '',
      goals: [],
      riskTolerance: '',
      investmentAmount: 0,
      emergencyFund: 0,
      monthlySavings: 0,
    });
  };

  const mockAPIResponse = (endpoint: string, data: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        switch (endpoint) {
          case 'onboarding':
            resolve({
              success: true,
              riskProfile: 'Moderate',
              recommendedPortfolio: 'Balanced',
              nextSteps: ['Connect bank', 'Set goals'],
            });
            break;
          case 'bank-connection':
            resolve({
              success: true,
              accounts: [
                { name: 'Chase Checking', balance: 2500 },
                { name: 'Chase Savings', balance: 8000 },
              ],
              totalBalance: 10500,
            });
            break;
          case 'portfolio-generation':
            resolve({
              success: true,
              portfolio: {
                totalValue: 5000,
                allocation: [
                  { name: 'VTI', percentage: 40, value: 2000 },
                  { name: 'VXUS', percentage: 25, value: 1250 },
                  { name: 'BND', percentage: 20, value: 1000 },
                  { name: 'VGLT', percentage: 15, value: 750 },
                ],
                expectedReturn: 8.5,
                riskLevel: 'Moderate',
              },
            });
            break;
          case 'goal-setting':
            resolve({
              success: true,
              goals: [
                { name: 'Emergency Fund', target: 10000, current: 8000, progress: 80 },
                { name: 'Vacation Fund', target: 5000, current: 2000, progress: 40 },
              ],
              monthlyContribution: 500,
            });
            break;
          default:
            resolve({ success: true, data });
            break;
        }
      }, 1500);
    });
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <OnboardingStep userData={userData} setUserData={setUserData} mockAPI={mockAPIResponse} />;
      case 1:
        return <BankConnectionStep userData={userData} mockAPI={mockAPIResponse} />;
      case 2:
        return <PortfolioStep userData={userData} mockAPI={mockAPIResponse} />;
      case 3:
        return <GoalSettingStep userData={userData} setUserData={setUserData} mockAPI={mockAPIResponse} />;
      case 4:
        return <DashboardStep userData={userData} mockAPI={mockAPIResponse} />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          minHeight: '80vh',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Try Savr - Interactive Demo
          </Typography>
          <Button onClick={onClose} sx={{ minWidth: 'auto' }}>
            <X size={20} />
          </Button>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} orientation="horizontal" sx={{ mb: 4 }}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: activeStep >= index ? step.color : '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <step.icon size={16} />
                  </Box>
                )}
              >
                <Typography variant="caption" sx={{ fontWeight: 500 }}>
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent(activeStep)}
          </motion.div>
        </AnimatePresence>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {activeStep === steps.length - 1 ? (
              <>
                <Button onClick={handleReset} variant="outlined">
                  Start Over
                </Button>
                <Button onClick={onClose} variant="contained">
                  Close Demo
                </Button>
              </>
            ) : (
              <Button onClick={handleNext} variant="contained">
                Continue
              </Button>
            )}
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

// Step Components
const OnboardingStep: React.FC<{
  userData: any;
  setUserData: (data: any) => void;
  mockAPI: (endpoint: string, data: any) => Promise<any>;
}> = ({ userData, setUserData, mockAPI }) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await mockAPI('onboarding', userData);
      console.log('Onboarding response:', response);
      setCompleted(true);
    } catch (error) {
      console.error('Onboarding error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (completed) {
    return (
      <Card sx={{ backgroundColor: '#8FDE0208', border: '1px solid #8FDE0220' }}>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <CheckCircle size={48} color="#8FDE02" style={{ marginBottom: 16 }} />
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
            Onboarding Complete!
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Your risk profile: <strong>Moderate</strong><br />
            Recommended portfolio: <strong>Balanced</strong>
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
        Let's get to know you better
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Your Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          fullWidth
        />
        
        <TextField
          label="Age"
          type="number"
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          fullWidth
        />
        
        <FormControl>
          <FormLabel>What's your primary financial goal?</FormLabel>
          <RadioGroup
            value={userData.goals[0] || ''}
            onChange={(e) => setUserData({ ...userData, goals: [e.target.value] })}
          >
            <FormControlLabel value="emergency" control={<Radio />} label="Build emergency fund" />
            <FormControlLabel value="house" control={<Radio />} label="Save for a house" />
            <FormControlLabel value="retirement" control={<Radio />} label="Plan for retirement" />
            <FormControlLabel value="travel" control={<Radio />} label="Travel and experiences" />
          </RadioGroup>
        </FormControl>
        
        <FormControl>
          <FormLabel>What's your risk tolerance?</FormLabel>
          <RadioGroup
            value={userData.riskTolerance}
            onChange={(e) => setUserData({ ...userData, riskTolerance: e.target.value })}
          >
            <FormControlLabel value="conservative" control={<Radio />} label="Conservative - I prefer safety over growth" />
            <FormControlLabel value="moderate" control={<Radio />} label="Moderate - I want balanced growth" />
            <FormControlLabel value="aggressive" control={<Radio />} label="Aggressive - I want maximum growth" />
          </RadioGroup>
        </FormControl>
        
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || !userData.name || !userData.goals[0] || !userData.riskTolerance}
          sx={{ alignSelf: 'flex-start' }}
        >
          {loading ? 'Analyzing...' : 'Complete Assessment'}
        </Button>
      </Box>
    </Box>
  );
};

const BankConnectionStep: React.FC<{
  userData: any;
  mockAPI: (endpoint: string, data: any) => Promise<any>;
}> = ({ userData, mockAPI }) => {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState<any[]>([]);

  const handleConnect = async () => {
    setLoading(true);
    try {
      const response = await mockAPI('bank-connection', {});
      setAccounts(response.accounts);
      setConnected(true);
    } catch (error) {
      console.error('Bank connection error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
        Connect Your Bank Accounts
      </Typography>
      
      {!connected ? (
        <Card sx={{ backgroundColor: '#0D8CFE08', border: '1px solid #0D8CFE20' }}>
          <CardContent sx={{ textAlign: 'center', p: 4 }}>
            <Shield size={48} color="#0D8CFE" style={{ marginBottom: 16 }} />
            <Typography variant="h6" sx={{ mb: 2 }}>
              Secure Bank Connection
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
              We use bank-level encryption and read-only access. Your data is never stored on our servers.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 3, flexWrap: 'wrap' }}>
              {['Chase', 'Bank of America', 'Wells Fargo', 'Citibank'].map((bank) => (
                <Chip key={bank} label={bank} variant="outlined" />
              ))}
            </Box>
            
            <Button
              variant="contained"
              onClick={handleConnect}
              disabled={loading}
              sx={{ backgroundColor: '#0D8CFE' }}
            >
              {loading ? 'Connecting...' : 'Connect Bank'}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ backgroundColor: '#8FDE0208', border: '1px solid #8FDE0220' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <CheckCircle size={24} color="#8FDE02" />
              <Typography variant="h6">Successfully Connected!</Typography>
            </Box>
            
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              Connected Accounts:
            </Typography>
            
            {accounts.map((account, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">{account.name}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  ${account.balance.toLocaleString()}
                </Typography>
              </Box>
            ))}
            
            <Box sx={{ mt: 2, p: 2, backgroundColor: 'white', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ color: '#8FDE02' }}>
                Total Balance: ${accounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

const PortfolioStep: React.FC<{
  userData: any;
  mockAPI: (endpoint: string, data: any) => Promise<any>;
}> = ({ userData, mockAPI }) => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState<any>(null);

  React.useEffect(() => {
    const generatePortfolio = async () => {
      setLoading(true);
      try {
        const response = await mockAPI('portfolio-generation', userData);
        setPortfolio(response.portfolio);
      } catch (error) {
        console.error('Portfolio generation error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    generatePortfolio();
  }, [userData, mockAPI]);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Brain size={48} color="#F2F50E" style={{ marginBottom: 16 }} />
        <Typography variant="h6" sx={{ mb: 2 }}>
          AI is creating your portfolio...
        </Typography>
        <LinearProgress sx={{ height: 8, borderRadius: 4 }} />
      </Box>
    );
  }

  if (!portfolio) return null;

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
        Your AI-Generated Portfolio
      </Typography>
      
      <Card sx={{ backgroundColor: '#F2F50E08', border: '1px solid #F2F50E20' }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              ${portfolio.totalValue.toLocaleString()}
            </Typography>
            <Chip label={`${portfolio.expectedReturn}% expected return`} color="success" />
          </Box>
          
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Asset Allocation (Risk Level: {portfolio.riskLevel})
          </Typography>
          
          {portfolio.allocation.map((asset: any, index: number) => (
            <Box key={asset.name} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">
                  {asset.name} ({asset.percentage}%)
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  ${asset.value.toLocaleString()}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={asset.percentage}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#F2F50E20',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#F2F50E',
                  },
                }}
              />
            </Box>
          ))}
          
          <Alert severity="info" sx={{ mt: 2 }}>
            This portfolio is automatically rebalanced monthly based on market conditions and your goals.
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
};

const GoalSettingStep: React.FC<{
  userData: any;
  setUserData: (data: any) => void;
  mockAPI: (endpoint: string, data: any) => Promise<any>;
}> = ({ userData, setUserData, mockAPI }) => {
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState<any[]>([]);

  const handleSaveGoals = async () => {
    setLoading(true);
    try {
      const response = await mockAPI('goal-setting', userData);
      setGoals(response.goals);
    } catch (error) {
      console.error('Goal setting error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
        Set Your Financial Goals
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Emergency Fund Target"
          type="number"
          value={userData.emergencyFund}
          onChange={(e) => setUserData({ ...userData, emergencyFund: Number(e.target.value) })}
          fullWidth
          InputProps={{
            startAdornment: <DollarSign size={20} style={{ marginRight: 8 }} />,
          }}
        />
        
        <TextField
          label="Monthly Savings Amount"
          type="number"
          value={userData.monthlySavings}
          onChange={(e) => setUserData({ ...userData, monthlySavings: Number(e.target.value) })}
          fullWidth
          InputProps={{
            startAdornment: <PiggyBank size={20} style={{ marginRight: 8 }} />,
          }}
        />
        
        <Button
          variant="contained"
          onClick={handleSaveGoals}
          disabled={loading || !userData.emergencyFund || !userData.monthlySavings}
          sx={{ alignSelf: 'flex-start' }}
        >
          {loading ? 'Saving...' : 'Save Goals'}
        </Button>
        
        {goals.length > 0 && (
          <Card sx={{ backgroundColor: '#0D8CFE08', border: '1px solid #0D8CFE20' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Your Goals
              </Typography>
              {goals.map((goal, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{goal.name}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {goal.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={goal.progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#0D8CFE20',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#0D8CFE',
                      },
                    }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

const DashboardStep: React.FC<{
  userData: any;
  mockAPI: (endpoint: string, data: any) => Promise<any>;
}> = ({ userData, mockAPI }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
        Your Savr Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrendingUp size={20} />
                Portfolio Performance
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#8FDE02', mb: 1 }}>
                +12.5%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Year to date return
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Target size={20} />
                Goal Progress
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#0D8CFE', mb: 1 }}>
                80%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Emergency fund complete
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Users size={20} />
                Accountability Circle
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AvatarGroup max={4}>
                  <Avatar sx={{ bgcolor: '#0D8CFE' }}>A</Avatar>
                  <Avatar sx={{ bgcolor: '#8FDE02' }}>B</Avatar>
                  <Avatar sx={{ bgcolor: '#F2F50E' }}>C</Avatar>
                </AvatarGroup>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  3 friends are cheering you on!
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Alert severity="success" sx={{ mt: 3 }}>
        <Typography variant="body2">
          <strong>Congratulations!</strong> You've completed the Savr demo. 
          This is how your real dashboard would look with actual data and features.
        </Typography>
      </Alert>
    </Box>
  );
};

export default MVPModal; 