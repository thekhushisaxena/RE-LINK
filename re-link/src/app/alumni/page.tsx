'use client';
import React, { useState, useMemo } from 'react';
import './alumni.css';
import { 
  Search,
  Filter,
  MapPin,
  Building2,
  GraduationCap,
  User,
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Users,
  ChevronDown,
  X
} from 'lucide-react';

interface Alumni {
  id: number;
  name: string;
  email: string;
  phone?: string;
  batch: number;
  department: string;
  currentRole: string;
  company: string;
  city: string;
  country: string;
  linkedin?: string;
  github?: string;
  website?: string;
  avatar: string;
  achievements?: string[];
  skills?: string[];
}

const AlumniPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Demo alumni data - memoized to prevent re-creation on each render
  const alumniData: Alumni[] = useMemo(() => [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@gmail.com',
      phone: '+91-9876543210',
      batch: 2018,
      department: 'Computer Science',
      currentRole: 'Senior Software Engineer',
      company: 'Google',
      city: 'Bangalore',
      country: 'India',
      linkedin: 'linkedin.com/in/rahulsharma',
      github: 'github.com/rahulsharma',
      avatar: 'RS',
      achievements: ['Google Summer of Code', 'Tech Lead'],
      skills: ['React', 'Node.js', 'Python', 'AWS']
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@microsoft.com',
      batch: 2019,
      department: 'Electronics',
      currentRole: 'Product Manager',
      company: 'Microsoft',
      city: 'Hyderabad',
      country: 'India',
      linkedin: 'linkedin.com/in/priyapatel',
      website: 'priyapatel.dev',
      avatar: 'PP',
      achievements: ['Women in Tech Award', 'Innovation Leader'],
      skills: ['Product Strategy', 'Azure', 'Data Analytics']
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit.kumar@amazon.com',
      batch: 2017,
      department: 'Computer Science',
      currentRole: 'Data Scientist',
      company: 'Amazon',
      city: 'Seattle',
      country: 'USA',
      linkedin: 'linkedin.com/in/amitkumar',
      github: 'github.com/amitkumar',
      avatar: 'AK',
      achievements: ['ML Research Publication', 'Data Science Excellence'],
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'SQL']
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@meta.com',
      batch: 2020,
      department: 'Information Technology',
      currentRole: 'Frontend Developer',
      company: 'Meta',
      city: 'Menlo Park',
      country: 'USA',
      linkedin: 'linkedin.com/in/snehareddy',
      github: 'github.com/snehareddy',
      avatar: 'SR',
      achievements: ['Hackathon Winner', 'Open Source Contributor'],
      skills: ['React', 'TypeScript', 'GraphQL', 'CSS']
    },
    {
      id: 5,
      name: 'Vikash Singh',
      email: 'vikash.singh@wipro.com',
      batch: 2016,
      department: 'Mechanical Engineering',
      currentRole: 'Project Manager',
      company: 'Wipro',
      city: 'Pune',
      country: 'India',
      linkedin: 'linkedin.com/in/vikashsingh',
      avatar: 'VS',
      achievements: ['PMP Certified', 'Team Excellence Award'],
      skills: ['Project Management', 'Agile', 'SAP', 'Leadership']
    },
    {
      id: 6,
      name: 'Ananya Ghosh',
      email: 'ananya.ghosh@tcs.com',
      batch: 2021,
      department: 'Computer Science',
      currentRole: 'Full Stack Developer',
      company: 'TCS',
      city: 'Kolkata',
      country: 'India',
      linkedin: 'linkedin.com/in/ananyaghosh',
      github: 'github.com/ananyaghosh',
      avatar: 'AG',
      achievements: ['Rising Star Award', 'Innovation Challenge Winner'],
      skills: ['MEAN Stack', 'Docker', 'Kubernetes', 'MongoDB']
    },
    {
      id: 7,
      name: 'Rajesh Gupta',
      email: 'rajesh.gupta@infosys.com',
      batch: 2015,
      department: 'Electronics',
      currentRole: 'Technical Architect',
      company: 'Infosys',
      city: 'Bangalore',
      country: 'India',
      linkedin: 'linkedin.com/in/rajeshgupta',
      avatar: 'RG',
      achievements: ['Technical Excellence Award', 'Patent Holder'],
      skills: ['System Architecture', 'Microservices', 'Java', 'Spring']
    },
    {
      id: 8,
      name: 'Kavya Nair',
      email: 'kavya.nair@salesforce.com',
      batch: 2019,
      department: 'Information Technology',
      currentRole: 'DevOps Engineer',
      company: 'Salesforce',
      city: 'San Francisco',
      country: 'USA',
      linkedin: 'linkedin.com/in/kavyanair',
      github: 'github.com/kavyanair',
      avatar: 'KN',
      achievements: ['Cloud Certification', 'Automation Expert'],
      skills: ['AWS', 'Jenkins', 'Terraform', 'Docker']
    }
  ], []);

  // Extract unique values for filters
  const batches = [...new Set(alumniData.map(alumni => alumni.batch))].sort((a, b) => b - a);
  const departments = [...new Set(alumniData.map(alumni => alumni.department))].sort();
  const cities = [...new Set(alumniData.map(alumni => alumni.city))].sort();
  const companies = [...new Set(alumniData.map(alumni => alumni.company))].sort();

  // Filtered alumni data
  const filteredAlumni = useMemo(() => {
    return alumniData.filter(alumni => {
      const matchesSearch = 
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBatch = selectedBatch === 'all' || alumni.batch.toString() === selectedBatch;
      const matchesDepartment = selectedDepartment === 'all' || alumni.department === selectedDepartment;
      const matchesCity = selectedCity === 'all' || alumni.city === selectedCity;
      const matchesCompany = selectedCompany === 'all' || alumni.company === selectedCompany;

      return matchesSearch && matchesBatch && matchesDepartment && matchesCity && matchesCompany;
    });
  }, [searchTerm, selectedBatch, selectedDepartment, selectedCity, selectedCompany, alumniData]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBatch('all');
    setSelectedDepartment('all');
    setSelectedCity('all');
    setSelectedCompany('all');
  };

  const activeFiltersCount = [selectedBatch, selectedDepartment, selectedCity, selectedCompany]
    .filter(filter => filter !== 'all').length;

  return (
    <div className="alumni-page">
      <div className="alumni-hero">
        <h1>Alumni Directory</h1>
        <p>Connect with KIIT alumni worldwide and expand your professional network</p>
      </div>

      <div className="alumni-container">
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by name, company, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filters
            {activeFiltersCount > 0 && <span className="filter-count">{activeFiltersCount}</span>}
            <ChevronDown size={16} className={showFilters ? 'rotated' : ''} />
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="filter-panel">
            <div className="filter-header">
              <h3>Filter Alumni</h3>
              <button onClick={clearFilters} className="clear-filters">
                <X size={16} />
                Clear All
              </button>
            </div>

            <div className="filter-grid">
              <div className="filter-group">
                <label>Graduation Year</label>
                <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
                  <option value="all">All Years</option>
                  {batches.map(batch => (
                    <option key={batch} value={batch.toString()}>{batch}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Department</label>
                <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>City</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                  <option value="all">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Company</label>
                <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                  <option value="all">All Companies</option>
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <div className="results-summary">
          <div className="results-count">
            <Users size={20} />
            <span>Showing {filteredAlumni.length} of {alumniData.length} alumni</span>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="alumni-grid">
          {filteredAlumni.map(alumni => (
            <div key={alumni.id} className="alumni-card">
              <div className="alumni-header">
                <div className="alumni-avatar">
                  {alumni.avatar}
                </div>
                <div className="alumni-info">
                  <h3>{alumni.name}</h3>
                  <p className="role">{alumni.currentRole}</p>
                  <p className="company">
                    <Building2 size={14} />
                    {alumni.company}
                  </p>
                </div>
              </div>

              <div className="alumni-details">
                <div className="detail-row">
                  <GraduationCap size={14} />
                  <span>{alumni.department} - {alumni.batch}</span>
                </div>
                <div className="detail-row">
                  <MapPin size={14} />
                  <span>{alumni.city}, {alumni.country}</span>
                </div>
                <div className="detail-row">
                  <Mail size={14} />
                  <span>{alumni.email}</span>
                </div>
                {alumni.phone && (
                  <div className="detail-row">
                    <Phone size={14} />
                    <span>{alumni.phone}</span>
                  </div>
                )}
              </div>

              {alumni.skills && (
                <div className="alumni-skills">
                  <h4>Skills</h4>
                  <div className="skills-tags">
                    {alumni.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                    {alumni.skills.length > 3 && (
                      <span className="skill-tag more">+{alumni.skills.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}

              {alumni.achievements && (
                <div className="alumni-achievements">
                  <h4>Achievements</h4>
                  <ul>
                    {alumni.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="alumni-social">
                {alumni.linkedin && (
                  <a href={`https://${alumni.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                  </a>
                )}
                {alumni.github && (
                  <a href={`https://${alumni.github}`} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                  </a>
                )}
                {alumni.website && (
                  <a href={`https://${alumni.website}`} target="_blank" rel="noopener noreferrer">
                    <Globe size={18} />
                  </a>
                )}
              </div>

              <div className="alumni-actions">
                <button className="connect-btn">
                  <User size={16} />
                  Connect
                </button>
                <button className="message-btn">
                  <Mail size={16} />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="no-results">
            <Users size={48} />
            <h3>No alumni found</h3>
            <p>Try adjusting your search criteria or filters</p>
            <button onClick={clearFilters} className="reset-btn">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniPage;
