export function Services() {
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
            marginBottom: '50px',
            textAlign: 'center',
        } as React.CSSProperties,
        subtitle: {
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '80px',
            color: 'rgba(255, 255, 255, 0.9)',
        } as React.CSSProperties,
        serviceGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '80px',
        } as React.CSSProperties,
        serviceCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            color: '#1a202c',
        } as React.CSSProperties,
        serviceIcon: {
            fontSize: '48px',
            marginBottom: '20px',
        } as React.CSSProperties,
        serviceTitle: {
            fontSize: '22px',
            fontWeight: '700',
            marginBottom: '15px',
            color: '#667eea',
        } as React.CSSProperties,
        serviceDesc: {
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '20px',
        } as React.CSSProperties,
        featureList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        } as React.CSSProperties,
        featureItem: {
            fontSize: '14px',
            color: '#333',
            marginBottom: '8px',
            paddingLeft: '20px',
        } as React.CSSProperties,
        pricingSection: {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '60px 40px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
        } as React.CSSProperties,
        pricingTitle: {
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '50px',
            textAlign: 'center',
        } as React.CSSProperties,
        pricingGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
        } as React.CSSProperties,
        pricingCard: {
            background: '#ffffff',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            color: '#1a202c',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
        } as React.CSSProperties,
        planName: {
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#667eea',
        } as React.CSSProperties,
        price: {
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '10px',
            color: '#1a202c',
        } as React.CSSProperties,
        priceNote: {
            fontSize: '14px',
            color: '#999',
            marginBottom: '30px',
        } as React.CSSProperties,
        priceFeatures: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            marginBottom: '30px',
            textAlign: 'left',
        } as React.CSSProperties,
        priceFeatureItem: {
            fontSize: '14px',
            color: '#666',
            padding: '10px 0',
            borderBottom: '1px solid #eee',
        } as React.CSSProperties,
        ctaButton: {
            padding: '12px 32px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            transition: 'transform 0.3s ease',
        } as React.CSSProperties,
    };

    const services = [
        {
            icon: '📋',
            title: 'Task Management',
            description: 'Organize and track all your tasks with intuitive boards, lists, and timelines.',
            features: ['✓ Drag & drop tasks', '✓ Custom categories', '✓ Due dates & reminders', '✓ Priority levels']
        },
        {
            icon: '👥',
            title: 'Team Collaboration',
            description: 'Work seamlessly with your team in real-time with powerful collaboration tools.',
            features: ['✓ Real-time updates', '✓ Comments & mentions', '✓ File attachments', '✓ Activity feed']
        },
        {
            icon: '📊',
            title: 'Project Analytics',
            description: 'Get detailed insights into project progress with comprehensive analytics and reports.',
            features: ['✓ Progress tracking', '✓ Team reports', '✓ Time tracking', '✓ Performance metrics']
        },
        {
            icon: '🔔',
            title: 'Smart Notifications',
            description: 'Stay updated with intelligent notifications tailored to your preferences.',
            features: ['✓ Email alerts', '✓ In-app notifications', '✓ Custom triggers', '✓ Do not disturb mode']
        },
        {
            icon: '🔐',
            title: 'Enterprise Security',
            description: 'Your data is protected with enterprise-grade security and compliance features.',
            features: ['✓ End-to-end encryption', '✓ SSO support', '✓ GDPR compliant', '✓ 2FA authentication']
        },
        {
            icon: '⚙️',
            title: 'Automation',
            description: 'Automate repetitive tasks and streamline your workflow with powerful automations.',
            features: ['✓ Workflow automation', '✓ Template creation', '✓ Recurring tasks', '✓ API integrations']
        },
    ];

    const plans = [
        {
            name: 'Starter',
            price: '$9',
            period: '/month',
            features: ['Up to 3 projects', 'Basic analytics', 'Email support', '2GB storage', '5 team members']
        },
        {
            name: 'Professional',
            price: '$29',
            period: '/month',
            features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '100GB storage', 'Unlimited team members']
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            features: ['Everything in Pro', 'Custom integrations', '24/7 phone support', 'Unlimited storage', 'Dedicated account manager']
        },
    ];

    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <h1 style={styles.title}>Our Services</h1>
                <p style={styles.subtitle}>Comprehensive features designed to streamline your workflow and boost productivity</p>

                <div style={styles.serviceGrid}>
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            style={styles.serviceCard}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.25)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                            }}
                        >
                            <div style={styles.serviceIcon}>{service.icon}</div>
                            <h3 style={styles.serviceTitle}>{service.title}</h3>
                            <p style={styles.serviceDesc}>{service.description}</p>
                            <ul style={styles.featureList}>
                                {service.features.map((feature, fidx) => (
                                    <li key={fidx} style={styles.featureItem}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={styles.pricingSection}>
                    <h2 style={styles.pricingTitle}>Simple, Transparent Pricing</h2>
                    <div style={styles.pricingGrid}>
                        {plans.map((plan, idx) => (
                            <div key={idx} style={styles.pricingCard}>
                                <h3 style={styles.planName}>{plan.name}</h3>
                                <div style={styles.price}>{plan.price}</div>
                                <p style={styles.priceNote}>{plan.period}</p>
                                <ul style={styles.priceFeatures}>
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx} style={styles.priceFeatureItem}>{feature}</li>
                                    ))}
                                </ul>
                                <button
                                    style={styles.ctaButton}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
