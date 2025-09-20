'use client';
import React, { useState } from 'react';
import './features.css';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Briefcase, 
  BarChart3, 
  Shield,
  User,
  UserPlus,
  Settings,
  Video,
  Phone,
  Mail,
  PartyPopper,
  Trophy,
  MapPin,
  GraduationCap,
  DollarSign,
  TrendingUp,
  PieChart,
  Activity,
  Lock,
  Key,
  Database,
  Eye
} from 'lucide-react';

const FeaturesPage = () => {
  const [activeDemo, setActiveDemo] = useState('profile');
  const [userProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@kiit.ac.in',
    batch: '2020',
    department: 'Computer Science',
    currentRole: 'Software Engineer',
    company: 'TechCorp Inc.'
  });

  const [messages] = useState([
    { id: 1, sender: 'Alice Kumar', message: 'Great networking event last week!', time: '2h ago' },
    { id: 2, sender: 'Bob Singh', message: 'Looking for collaboration opportunities', time: '4h ago' },
    { id: 3, sender: 'Carol Patel', message: 'Job opening at my company', time: '1d ago' }
  ]);

  const [events] = useState([
    { id: 1, title: 'Annual Alumni Meetup', date: '2025-10-15', location: 'KIIT Campus', attendees: 250 },
    { id: 2, title: 'Tech Talk: AI Trends', date: '2025-11-20', location: 'Virtual', attendees: 180 },
    { id: 3, title: 'Career Fair 2025', date: '2025-12-05', location: 'Convention Center', attendees: 500 }
  ]);

  const [jobs] = useState([
    { id: 1, title: 'Senior Software Engineer', company: 'Google', location: 'Bangalore', salary: '₹25L - 35L' },
    { id: 2, title: 'Product Manager', company: 'Microsoft', location: 'Hyderabad', salary: '₹30L - 40L' },
    { id: 3, title: 'Data Scientist', company: 'Amazon', location: 'Chennai', salary: '₹20L - 28L' }
  ]);

  const featureCards = [
    {
      id: 'profile',
      icon: <Users size={32} />,
      title: 'User & Profile Management',
      description: 'Comprehensive profile system with alumni verification and networking capabilities'
    },
    {
      id: 'communication',
      icon: <MessageCircle size={32} />,
      title: 'Networking & Communication',
      description: 'Connect with fellow alumni through messaging, video calls, and community forums'
    },
    {
      id: 'events',
      icon: <Calendar size={32} />,
      title: 'Events & Engagement',
      description: 'Discover and participate in alumni events, reunions, and professional meetups'
    },
    {
      id: 'career',
      icon: <Briefcase size={32} />,
      title: 'Career & Opportunities',
      description: 'Access job boards, mentorship programs, and career development resources'
    },
    {
      id: 'analytics',
      icon: <BarChart3 size={32} />,
      title: 'Analytics & Insights',
      description: 'Track engagement metrics, alumni activity, and network growth patterns'
    },
    {
      id: 'security',
      icon: <Shield size={32} />,
      title: 'System & Security',
      description: 'Advanced security features with data privacy and access control management'
    }
  ];

  const renderDemo = () => {
    switch(activeDemo) {
      case 'profile':
        return (
          <div className="demo-content">
            <h3>Profile Management Demo</h3>
            <div className="profile-demo">
              <div className="profile-card">
                <div className="profile-avatar">
                  <User size={64} />
                </div>
                <div className="profile-info">
                  <h4>{userProfile.name}</h4>
                  <p>{userProfile.currentRole} at {userProfile.company}</p>
                  <p>KIIT {userProfile.department} - Batch {userProfile.batch}</p>
                </div>
              </div>
              <div className="profile-actions">
                <button className="demo-btn primary">
                  <UserPlus size={16} />
                  Connect
                </button>
                <button className="demo-btn secondary">
                  <Settings size={16} />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'communication':
        return (
          <div className="demo-content">
            <h3>Networking & Communication Demo</h3>
            <div className="communication-demo">
              <div className="chat-section">
                <h4>Recent Messages</h4>
                <div className="message-list">
                  {messages.map(msg => (
                    <div key={msg.id} className="message-item">
                      <div className="message-header">
                        <strong>{msg.sender}</strong>
                        <span className="time">{msg.time}</span>
                      </div>
                      <p>{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="communication-tools">
                <button className="demo-btn primary">
                  <Video size={16} />
                  Video Call
                </button>
                <button className="demo-btn secondary">
                  <Phone size={16} />
                  Voice Call
                </button>
                <button className="demo-btn secondary">
                  <Mail size={16} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'events':
        return (
          <div className="demo-content">
            <h3>Events & Engagement Demo</h3>
            <div className="events-demo">
              <div className="events-list">
                {events.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-header">
                      <PartyPopper size={20} />
                      <h4>{event.title}</h4>
                    </div>
                    <div className="event-details">
                      <p><Calendar size={14} /> {event.date}</p>
                      <p><MapPin size={14} /> {event.location}</p>
                      <p><Users size={14} /> {event.attendees} attendees</p>
                    </div>
                    <button className="demo-btn primary">Join Event</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'career':
        return (
          <div className="demo-content">
            <h3>Career & Opportunities Demo</h3>
            <div className="career-demo">
              <div className="jobs-section">
                <h4>Latest Job Opportunities</h4>
                <div className="jobs-list">
                  {jobs.map(job => (
                    <div key={job.id} className="job-card">
                      <div className="job-header">
                        <Briefcase size={20} />
                        <div>
                          <h4>{job.title}</h4>
                          <p>{job.company}</p>
                        </div>
                      </div>
                      <div className="job-details">
                        <p><MapPin size={14} /> {job.location}</p>
                        <p><DollarSign size={14} /> {job.salary}</p>
                      </div>
                      <button className="demo-btn primary">Apply Now</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="career-tools">
                <button className="demo-btn secondary">
                  <GraduationCap size={16} />
                  Find Mentors
                </button>
                <button className="demo-btn secondary">
                  <Trophy size={16} />
                  Skill Assessment
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="demo-content">
            <h3>Analytics & Insights Demo</h3>
            <div className="analytics-demo">
              <div className="analytics-cards">
                <div className="analytics-card">
                  <TrendingUp size={24} />
                  <div>
                    <h4>Network Growth</h4>
                    <p>+15% this month</p>
                  </div>
                </div>
                <div className="analytics-card">
                  <PieChart size={24} />
                  <div>
                    <h4>Engagement Rate</h4>
                    <p>78% active users</p>
                  </div>
                </div>
                <div className="analytics-card">
                  <Activity size={24} />
                  <div>
                    <h4>Event Attendance</h4>
                    <p>250 avg per event</p>
                  </div>
                </div>
              </div>
              <div className="analytics-chart">
                <h4>Alumni Activity Overview</h4>
                <div className="chart-placeholder">
                  <BarChart3 size={48} />
                  <p>Interactive analytics dashboard would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="demo-content">
            <h3>System & Security Demo</h3>
            <div className="security-demo">
              <div className="security-features">
                <div className="security-item">
                  <Lock size={24} />
                  <div>
                    <h4>Data Encryption</h4>
                    <p>End-to-end encryption for all communications</p>
                  </div>
                </div>
                <div className="security-item">
                  <Key size={24} />
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Enhanced account security with 2FA</p>
                  </div>
                </div>
                <div className="security-item">
                  <Database size={24} />
                  <div>
                    <h4>Data Privacy</h4>
                    <p>GDPR compliant data handling</p>
                  </div>
                </div>
                <div className="security-item">
                  <Eye size={24} />
                  <div>
                    <h4>Activity Monitoring</h4>
                    <p>Real-time security monitoring</p>
                  </div>
                </div>
              </div>
              <div className="security-status">
                <h4>Security Status: <span className="status-good">Excellent</span></h4>
                <div className="security-meters">
                  <div className="meter">
                    <span>Account Security</span>
                    <div className="meter-bar">
                      <div className="meter-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="meter">
                    <span>Data Protection</span>
                    <div className="meter-bar">
                      <div className="meter-fill" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a feature to view its demo</div>;
    }
  };

  return (
    <div className="features-page">
      <div className="features-hero">
        <h1>Platform Features</h1>
        <p>Discover the comprehensive tools that make RE-LINK the premier alumni networking platform</p>
      </div>
      
      <div className="features-container">
        <div className="features-grid">
          {featureCards.map((feature) => (
            <div 
              key={feature.id}
              className={`feature-card ${activeDemo === feature.id ? 'active' : ''}`}
              onClick={() => setActiveDemo(feature.id)}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="demo-section">
          {renderDemo()}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
