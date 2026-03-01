import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#1a202c',
    } as React.CSSProperties,
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 30px',
    } as React.CSSProperties,
    hero: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '60px',
      alignItems: 'center',
      marginBottom: '100px',
    } as React.CSSProperties,
    heroText: {
      color: '#ffffff',
    } as React.CSSProperties,
    heroTag: {
      display: 'inline-block',
      padding: '8px 16px',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      marginBottom: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    } as React.CSSProperties,
    h1: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.2',
      color: '#ffffff',
    } as React.CSSProperties,
    description: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '30px',
      color: 'rgba(255, 255, 255, 0.9)',
    } as React.CSSProperties,
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    } as React.CSSProperties,
    primaryBtn: {
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '8px',
      background: '#ffffff',
      color: '#667eea',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    } as React.CSSProperties,
    secondaryBtn: {
      padding: '14px 32px',
      fontSize: '16px',
      fontWeight: '600',
      border: '2px solid #ffffff',
      borderRadius: '8px',
      background: 'transparent',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    } as React.CSSProperties,
    heroImage: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '20px',
      padding: '40px',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
    } as React.CSSProperties,
    imageContent: {
      fontSize: '14px',
      lineHeight: '1.8',
      textAlign: 'center',
    } as React.CSSProperties,
    badges: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      marginTop: '20px',
      flexWrap: 'wrap',
    } as React.CSSProperties,
    badge: {
      padding: '6px 12px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '20px',
      fontSize: '12px',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    } as React.CSSProperties,
    section: {
      marginBottom: '80px',
    } as React.CSSProperties,
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '40px',
      color: '#ffffff',
      textAlign: 'center',
    } as React.CSSProperties,
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
    } as React.CSSProperties,
    featureCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    } as React.CSSProperties,
    featureIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '30px',
    } as React.CSSProperties,
    featureTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#1a202c',
    } as React.CSSProperties,
    featureDesc: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: '15px',
    } as React.CSSProperties,
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    } as React.CSSProperties,
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    } as React.CSSProperties,
    quote: {
      fontSize: '16px',
      lineHeight: '1.8',
      marginBottom: '20px',
      color: '#333',
      fontStyle: 'italic',
    } as React.CSSProperties,
    author: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '600',
    } as React.CSSProperties,
    footer: {
      borderTop: '2px solid rgba(255, 255, 255, 0.2)',
      paddingTop: '40px',
      color: 'rgba(255, 255, 255, 0.9)',
    } as React.CSSProperties,
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '30px',
    } as React.CSSProperties,
    footerLinks: {
      display: 'flex',
      gap: '30px',
    } as React.CSSProperties,
    footerLink: {
      color: '#ffffff',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.3s ease',
      fontSize: '14px',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      padding: 0,
    } as React.CSSProperties,
    footerCopy: {
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.6)',
      textAlign: 'center',
    } as React.CSSProperties,
  };

  const features = [
    { icon: '📊', title: 'Smart Analytics', desc: 'Real-time insights into project performance and team productivity with detailed reports.' },
    { icon: '👥', title: 'Team Collaboration', desc: 'Work together seamlessly with real-time updates, comments, and file sharing.' },
    { icon: '⏱️', title: 'Time Tracking', desc: 'Track time spent on tasks and projects for accurate billing and resource planning.' },
    { icon: '📱', title: 'Mobile Ready', desc: 'Manage your projects on the go with our fully responsive mobile application.' },
    { icon: '🔐', title: 'Enterprise Security', desc: 'Bank-level encryption and compliance with GDPR, SOC 2, and ISO 27001 standards.' },
    { icon: '🔗', title: 'Integrations', desc: 'Connect with 100+ tools including Slack, GitHub, Jira, and Microsoft Teams.' },
  ];

  const testimonials = [
    { quote: '"TaskFlow transformed how our team collaborates. We ship faster and with fewer errors now!"', author: '— Jennifer Park, Product Manager at TechStart' },
    { quote: '"The best project management tool we\'ve used. The analytics alone saved us thousands in wasted hours."', author: '— David Chen, CEO at InnovateCo' },
    { quote: '"Intuitive, powerful, and actually fun to use. Our whole team loves TaskFlow."', author: '— Maria Rodriguez, Team Lead at DesignHub' },
  ];

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <div style={styles.heroTag}>🚀 Project Management Evolved</div>
            <h1 style={styles.h1}>Manage Projects Like Never Before</h1>
            <p style={styles.description}>
              TaskFlow is the modern platform for team collaboration and project management. Organize tasks, track progress, and deliver projects on time with powerful tools built for teams of any size.
            </p>
            <div style={styles.buttonGroup}>
              <button
                style={styles.primaryBtn}
                onClick={() => navigate('/services')}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
              >
                Explore Features
              </button>
              <button
                style={styles.secondaryBtn}
                onClick={() => navigate('/contact')}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Start Free Trial
              </button>
            </div>
            <p style={{ ...styles.description, marginBottom: 0, fontSize: '14px' }}>
              ✨ Trusted by over 10,000+ teams worldwide
            </p>
          </div>
          <div style={styles.heroImage}>
            <div style={styles.imageContent}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>All-in-One Solution</h3>
              <p>Centralize your project management with TaskFlow. From planning to execution, manage everything in one place.</p>
              <div style={styles.badges}>
                <div style={styles.badge}>⚡ Lightning Fast</div>
                <div style={styles.badge}>🔒 Secure</div>
                <div style={styles.badge}>🎯 Focused</div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose TaskFlow</h2>
          <div style={styles.featureGrid}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                style={styles.featureCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.25)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={styles.testimonialCard}>
                <p style={styles.quote}>{testimonial.quote}</p>
                <p style={styles.author}>{testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>TaskFlow</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>The modern platform for project management and team collaboration.</p>
            </div>
            <div style={styles.footerLinks}>
              <button
                style={styles.footerLink}
                onClick={() => navigate('/services')}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Services
              </button>
              <a
                href="#"
                style={styles.footerLink}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Privacy
              </a>
              <a
                href="#"
                style={styles.footerLink}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Terms
              </a>
            </div>
          </div>
          <p style={styles.footerCopy}>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
