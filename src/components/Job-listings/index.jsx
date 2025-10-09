import React from "react";
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Cloud Support Executive",
      department: "Technical Support",
      location: "Bhandup, Mumbai",
      type: "Full Time",
      experience: "1-3 years",
      description: "We're looking for a Cloud Support Executive to provide technical assistance to our clients using Tally on Cloud and other cloud solutions. The ideal candidate should have strong problem-solving skills and excellent communication abilities.",
      responsibilities: [
        "Provide technical support for cloud-based applications",
        "Troubleshoot and resolve customer issues",
        "Assist clients with Tally on Cloud setup and configuration",
        "Monitor cloud infrastructure and ensure optimal performance",
        "Document support cases and maintain knowledge base"
      ],
      requirements: [
        "1-3 years of experience in technical support",
        "Knowledge of cloud computing platforms",
        "Familiarity with Tally software is a plus",
        "Excellent problem-solving and communication skills",
        "Ability to work in a fast-paced environment"
      ]
    },
    {
      id: 2,
      title: "Tally Support Executive",
      department: "Technical Support",
      location: "Bhandup, Mumbai",
      type: "Full Time",
      experience: "2-4 years",
      description: "Join our team as a Tally Support Executive to help businesses streamline their accounting processes. You'll provide expert guidance on TallyPrime implementation, customization, and troubleshooting.",
      responsibilities: [
        "Provide comprehensive Tally support to clients",
        "Assist with Tally implementation and data migration",
        "Troubleshoot Tally software issues",
        "Conduct training sessions for clients",
        "Stay updated with latest Tally features and updates"
      ],
      requirements: [
        "2-4 years of hands-on experience with Tally",
        "Strong knowledge of accounting principles",
        "Experience with Tally customization and integration",
        "Excellent interpersonal and training skills",
        "Tally certification is preferred"
      ]
    },
    {
      id: 3,
      title: "Sales Manager",
      department: "Sales",
      location: "Bhandup, Mumbai",
      type: "Full Time",
      experience: "3-5 years",
      description: "We're seeking an experienced Sales Manager to lead our sales team and drive revenue growth. You'll be responsible for developing sales strategies, managing client relationships, and achieving sales targets.",
      responsibilities: [
        "Develop and implement effective sales strategies",
        "Lead and mentor the sales team",
        "Build and maintain strong client relationships",
        "Identify new business opportunities",
        "Achieve monthly and quarterly sales targets",
        "Prepare sales reports and forecasts"
      ],
      requirements: [
        "3-5 years of experience in B2B sales, preferably in IT/software industry",
        "Proven track record of achieving sales targets",
        "Strong leadership and team management skills",
        "Excellent negotiation and communication abilities",
        "Knowledge of cloud services and business software is a plus"
      ]
    },
    {
      id: 4,
      title: "Inside Sales Executive",
      department: "Sales",
      location: "Bhandup, Mumbai",
      type: "Full Time",
      experience: "1-2 years",
      description: "Join our dynamic sales team as an Inside Sales Executive. You'll be responsible for generating leads, qualifying prospects, and converting them into customers for our cloud solutions and business software.",
      responsibilities: [
        "Generate and qualify leads through various channels",
        "Conduct product demonstrations and presentations",
        "Follow up with prospects and close sales",
        "Maintain accurate records in CRM",
        "Achieve individual sales targets",
        "Collaborate with the sales team to meet company goals"
      ],
      requirements: [
        "1-2 years of experience in inside sales or telesales",
        "Excellent communication and persuasion skills",
        "Proficiency in MS Office and CRM software",
        "Self-motivated with a results-driven approach",
        "Ability to understand technical products and explain to customers"
      ]
    }
  ];

  const [expandedJob, setExpandedJob] = React.useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section className="job-listings section-padding">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-8 text-center">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Current Openings</h6>
              <h3 className="wow color-font">
                Explore exciting opportunities to grow with us
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {jobs.map((job, index) => (
            <div key={job.id} className="col-lg-12 mb-4">
              <div 
                className={`job-card wow fadeInUp ${expandedJob === job.id ? 'expanded' : ''}`}
                data-wow-delay={`${index * 0.1}s`}
              >
                <div className="job-card-header" onClick={() => toggleJob(job.id)}>
                  <div className="job-header-content">
                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                      <div className="job-title-section mb-3 mb-md-0">
                        <h4 className="job-title mb-2">{job.title}</h4>
                        <span className="job-department">{job.department}</span>
                      </div>
                      <button className="btn-job-expand">
                        <i className={`fas fa-chevron-${expandedJob === job.id ? 'up' : 'down'}`}></i>
                      </button>
                    </div>
                    
                    <div className="job-meta mt-3">
                      <div className="row">
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                          <div className="meta-item">
                            <MapPin size={18} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                          <div className="meta-item">
                            <Clock size={18} />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                          <div className="meta-item">
                            <Briefcase size={18} />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div className="meta-item">
                            <Users size={18} />
                            <span>{job.department}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="job-card-body">
                    <div className="job-description mb-4">
                      <h5 className="mb-3">About the Role</h5>
                      <p>{job.description}</p>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <h5 className="mb-3">Key Responsibilities</h5>
                        <ul className="job-list">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}>
                              <i className="fas fa-check-circle"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="col-lg-6">
                        <h5 className="mb-3">Requirements</h5>
                        <ul className="job-list">
                          {job.requirements.map((item, idx) => (
                            <li key={idx}>
                              <i className="fas fa-check-circle"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="job-apply-section mt-4">
                      <a 
                        href="mailto:hr@ujss.in?subject=Application for Cloud Support Executive" 
                        className="btn-apply"
                      >
                        <span>Apply Now</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why Join Us Section */}
        <div className="row mt-100">
          <div className="col-lg-12">
            <div className="why-join-section text-center">
              <h3 className="mb-50 color-font">Why Work With Us?</h3>
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="benefit-item">
                    <div className="benefit-icon mb-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h5>Growth Opportunities</h5>
                    <p>Continuous learning and career advancement</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="benefit-item">
                    <div className="benefit-icon mb-3">
                      <i className="fas fa-users"></i>
                    </div>
                    <h5>Great Team</h5>
                    <p>Work with talented and supportive colleagues</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className="benefit-item">
                    <div className="benefit-icon mb-3">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <h5>Work-Life Balance</h5>
                    <p>Flexible work environment and policies</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="benefit-item">
                    <div className="benefit-icon mb-3">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <h5>Recognition</h5>
                    <p>Rewards for outstanding performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;