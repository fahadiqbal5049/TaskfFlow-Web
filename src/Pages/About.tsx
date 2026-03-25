export function About() {
    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '60px 30px',
            color: '#ffffff',
        } as React.CSSProperties,
        main: {
            maxWidth: '1200px',
            margin: '0 auto',
        } as React.CSSProperties,
        title: {
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '30px',
        } as React.CSSProperties,
        section: {
            marginBottom: '50px',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            color: '#1a202c',
        } as React.CSSProperties,
        sectionTitle: {
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#667eea',
        } as React.CSSProperties,
        text: {
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#333',
        } as React.CSSProperties,
    };

    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <h1 style={styles.title}>About TaskFlow</h1>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Our Mission</h2>
                    <p style={styles.text}>
                        TaskFlow is on a mission to revolutionize how teams manage projects and collaborate. We believe that the right tools 
                        can transform the way teams work together, making them more productive, organized, and successful. Our platform is 
                        designed to remove bottlenecks and empower teams to deliver amazing results.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Who We Are</h2>
                    <p style={styles.text}>
                        Founded in 2022, TaskFlow was built by a team of project management experts and software engineers who experienced 
                        the pain points of existing tools firsthand. We decided to create something better—a modern, intuitive platform that 
                        puts teams first and makes project management enjoyable rather than a chore.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>What We Offer</h2>
                    <p style={styles.text}>
                        TaskFlow is an all-in-one project management platform that combines task management, team collaboration, 
                        time tracking, and advanced analytics. Whether you're managing a small team or coordinating across departments, 
                        TaskFlow scales with you and adapts to your unique workflow.
                    </p>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Our Core Values</h2>
                    <ul style={{ ...styles.text, paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '10px' }}>🎯 <strong>User-Centric</strong> - We obsess over user experience and listen to our customers</li>
                        <li style={{ marginBottom: '10px' }}>⚡ <strong>Reliability</strong> - Your data is safe, secure, and always available</li>
                        <li style={{ marginBottom: '10px' }}>🤝 <strong>Transparency</strong> - We're honest about our roadmap and actively involve our community</li>
                        <li style={{ marginBottom: '10px' }}>🚀 <strong>Innovation</strong> - We continuously improve and adapt to market needs</li>
                        <li>💡 <strong>Simplicity</strong> - We make complex problems simple and intuitive</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>By The Numbers</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '40px', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>10K+</div>
                            <div style={{ fontSize: '16px', color: '#666' }}>Active Teams</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '40px', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>500K+</div>
                            <div style={{ fontSize: '16px', color: '#666' }}>Projects Managed</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '40px', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>99.9%</div>
                            <div style={{ fontSize: '16px', color: '#666' }}>Uptime SLA</div>
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Technology Stack</h2>
                    <p style={styles.text}>
                        <strong>Frontend:</strong> React 19, TypeScript, Tailwind CSS, React Router<br />
                        <strong>Backend:</strong> Node.js, PostgreSQL, Redis, Docker<br />
                        <strong>Infrastructure:</strong> AWS, Kubernetes, CDN optimization<br />
                        <strong>Security:</strong> Enterprise-grade encryption, SSO, SAML 2.0, Two-Factor Authentication
                    </p>
                </div>
            </main>
        </div>
    );
}