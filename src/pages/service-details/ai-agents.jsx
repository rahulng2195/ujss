import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import { Bot, MessageSquare, Mail, Users, TrendingUp, BarChart3, Calendar, FileText, Zap, Clock, Target, Shield, Sparkles, Brain } from 'lucide-react';

const AIAgentsService = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.pageYOffset > 300) {
          navbarRef.current.classList.add("nav-scroll");
        } else {
          navbarRef.current.classList.remove("nav-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aiAgents = [
    {
      icon: Users,
      title: "Lead Qualification Agent",
      description: "Automatically screens incoming leads, asks qualifying questions, and prioritizes them based on your criteria—so your sales team only talks to ready-to-buy customers."
    },
    {
      icon: MessageSquare,
      title: "24/7 Customer Support Agent",
      description: "Answers customer questions instantly, any time of day. Handles common queries, troubleshooting, and escalates complex issues to your human team when needed."
    },
    {
      icon: Mail,
      title: "Smart Email Assistant",
      description: "Reads incoming emails, categorizes them, drafts responses, and even sends follow-ups automatically. Never miss an important email or forget to reply again."
    },
    {
      icon: TrendingUp,
      title: "Sales Prospecting Agent",
      description: "Finds potential customers online, gathers contact information, and sends personalized outreach messages—building your sales pipeline while you sleep."
    },
    {
      icon: BarChart3,
      title: "Data Analysis Agent",
      description: "Analyzes your business data, identifies trends and patterns, and generates insightful reports automatically—turning numbers into actionable business insights."
    },
    {
      icon: Calendar,
      title: "Meeting Scheduler Agent",
      description: "Coordinates schedules, finds available time slots, sends calendar invites, and manages meeting reminders—eliminating the back-and-forth of scheduling."
    },
    {
      icon: FileText,
      title: "Content Creation Agent",
      description: "Generates blog posts, social media content, product descriptions, and marketing copy based on your brand voice—keeping your content fresh and consistent."
    },
    {
      icon: Bot,
      title: "Social Media Manager Agent",
      description: "Posts content at optimal times, responds to comments and messages, monitors brand mentions, and analyzes engagement—managing your social presence 24/7."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "AI agents work 24/7 without breaks, handling repetitive tasks that would take your team hours. One AI agent can do the work of multiple employees at a fraction of the cost."
    },
    {
      icon: Zap,
      title: "Instant Response Times",
      description: "Customers get immediate answers, leads are qualified instantly, and tasks are completed in seconds—no more waiting or delays that cost you business."
    },
    {
      icon: Target,
      title: "Never Miss Opportunities",
      description: "AI agents never sleep, forget, or get overwhelmed. They capture every lead, respond to every inquiry, and follow up on every opportunity automatically."
    },
    {
      icon: Brain,
      title: "Learn & Improve Continuously",
      description: "AI agents get smarter over time, learning from interactions and adapting to your business needs—constantly improving their performance without training."
    }
  ];

  const useCases = [
    {
      category: "For Sales Teams",
      examples: [
        "Qualify leads automatically before they reach your sales team",
        "Send personalized follow-up emails to prospects",
        "Schedule sales calls and demos without manual coordination",
        "Update CRM records and track customer interactions"
      ]
    },
    {
      category: "For Marketing Teams",
      examples: [
        "Create and schedule social media content automatically",
        "Analyze campaign performance and suggest improvements",
        "Respond to customer inquiries on multiple platforms",
        "Generate SEO-optimized blog content and product descriptions"
      ]
    },
    {
      category: "For Customer Service",
      examples: [
        "Answer common customer questions instantly",
        "Handle support tickets and route complex issues to humans",
        "Provide order status updates and tracking information",
        "Collect customer feedback and satisfaction surveys"
      ]
    },
    {
      category: "For Operations",
      examples: [
        "Process invoices and automate data entry tasks",
        "Generate reports and analyze business metrics",
        "Manage inventory alerts and reorder notifications",
        "Coordinate team schedules and project deadlines"
      ]
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "We Understand Your Needs",
      description: "We discuss your business processes, identify repetitive tasks, and determine where AI agents can add the most value to your operations."
    },
    {
      number: "02",
      title: "Choose Your AI Agents",
      description: "Select from our library of ready-to-use AI agents or we'll build custom ones tailored specifically to your unique business requirements."
    },
    {
      number: "03",
      title: "Quick Setup & Integration",
      description: "We configure and integrate AI agents with your existing tools (CRM, email, social media, etc.) with minimal disruption to your workflow."
    },
    {
      number: "04",
      title: "Train & Optimize",
      description: "We train the AI agents on your business data, test thoroughly, and continuously optimize performance based on real results."
    }
  ];

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="service-detail-section">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="hero-content">
                  <span className="service-tag">Intelligent Automation</span>
                  <h1 className="hero-title">
                    AI Agents<br />
                    <span className="highlight">for Your Business</span>
                  </h1>
                  <p className="hero-subtitle">Your 24/7 Digital Workforce That Never Sleeps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is AI Agent Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">01</div>
                <h2 className="section-title">What is an AI Agent?</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description mb-4">
                  Think of an AI agent as a smart digital assistant that can think, learn, and act on its own. Unlike 
                  simple automation that just follows rules, AI agents can understand context, make decisions, and handle 
                  complex tasks just like a human employee would—but faster, cheaper, and without ever getting tired.
                </p>
                <p className="section-description mb-4">
                  <strong>Here&#39;s a simple example:</strong> Instead of you manually reading every customer email, deciding 
                  how to respond, typing the reply, and following up later—an AI agent does all of this automatically. It 
                  reads the email, understands what the customer needs, writes an appropriate response in your company&#39;s 
                  tone, sends it, and even sets a reminder to follow up if needed.
                </p>
                <p className="section-description">
                  AI agents work behind the scenes in your business, handling repetitive tasks so your team can focus on 
                  what really matters—growing your business and building customer relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready-to-Use AI Agents Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">02</div>
                <h2 className="section-title">Ready-to-Use AI Agents</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Our AI agents are pre-built and ready to deploy in your business immediately. No complex setup, no coding required.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {aiAgents.map((agent, index) => {
                const IconComponent = agent.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{agent.title}</h3>
                      <p className="benefit-description">{agent.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">03</div>
                <h2 className="section-title">Why Businesses Love AI Agents</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  Discover how AI agents transform everyday business operations and deliver remarkable results.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="col-lg-6 col-md-6 my-3">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real-World Use Cases Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">04</div>
                <h2 className="section-title">Real-World Use Cases</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  See how AI agents solve real business problems across different departments.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {useCases.map((useCase, index) => (
                <div key={index} className="col-lg-6 col-md-6 my-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="benefit-title">{useCase.category}</h3>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="benefit-description" style={{ marginBottom: '0.5rem' }}>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="content-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">05</div>
                <h2 className="section-title">How We Implement AI Agents</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description">
                  From consultation to deployment, we make AI adoption simple and effective for your business.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              {howItWorks.map((step, index) => (
                <div key={index} className="col-lg-6 col-md-6 my-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{step.number}</div>
                    </div>
                    <h3 className="benefit-title">{step.title}</h3>
                    <p className="benefit-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">06</div>
                <h2 className="section-title">Real Results</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <div className="mb-5 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>E-Commerce Company</h4>
                  <p className="section-description mb-3">
                    <strong>Challenge:</strong> Customer support team overwhelmed with 500+ daily queries
                  </p>
                  <p className="section-description mb-3">
                    <strong>Solution:</strong> Deployed AI customer support agent
                  </p>
                  <p className="section-description" style={{ color: '#4ade80' }}>
                    <strong>Result:</strong> 70% of queries handled automatically, response time reduced from 4 hours to 30 seconds, customer satisfaction increased by 45%
                  </p>
                </div>

                <div className="mb-5 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Real Estate Agency</h4>
                  <p className="section-description mb-3">
                    <strong>Challenge:</strong> Missing leads because agents couldn&#39;t respond quickly enough
                  </p>
                  <p className="section-description mb-3">
                    <strong>Solution:</strong> Implemented lead qualification and follow-up AI agent
                  </p>
                  <p className="section-description" style={{ color: '#4ade80' }}>
                    <strong>Result:</strong> 100% lead response rate, 3x more qualified appointments, 35% increase in closed deals
                  </p>
                </div>

                <div className="p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>B2B Services Company</h4>
                  <p className="section-description mb-3">
                    <strong>Challenge:</strong> Sales team spending 15 hours/week on email follow-ups
                  </p>
                  <p className="section-description mb-3">
                    <strong>Solution:</strong> Deployed smart email assistant and meeting scheduler agents
                  </p>
                  <p className="section-description" style={{ color: '#4ade80' }}>
                    <strong>Result:</strong> Saved 60 hours/month, zero missed follow-ups, 25% increase in meeting bookings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="section-number">07</div>
                <h2 className="section-title">Investment & ROI</h2>
              </div>
              <div className="col-lg-8 col-md-8 offset-lg-1">
                <p className="section-description mb-4">
                  <strong>Affordable for Any Business:</strong> AI agents cost less than hiring a single employee, with packages starting from just a few hundred dollars per month.
                </p>
                <p className="section-description mb-4">
                  <strong>Quick Return on Investment:</strong> Most businesses see ROI within 2-3 months through time savings, increased conversions, and reduced operational costs.
                </p>
                <p className="section-description mb-4">
                  <strong>Scalable Solution:</strong> Start with one AI agent and add more as you see results. No long-term commitments—pay only for what you use.
                </p>
                <p className="section-description">
                  <strong>Free Consultation:</strong> We&#39;ll analyze your business processes and show you exactly where AI agents can save you time and money—at no cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="cta-title">
                  Ready to Build Your<br />
                  <span className="highlight">AI-Powered Team?</span>
                </h2>
                <p className="cta-text">
                  Schedule a free consultation and discover how AI agents can transform your business operations
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary-custom">
                    Get Free AI Analysis
                  </button>
                  <button className="btn btn-outline-custom">
                    See AI Agents in Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DarkTheme>
  );
};

export default AIAgentsService;