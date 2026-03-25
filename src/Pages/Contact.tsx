import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '60px 30px',
            color: '#ffffff',
        } as React.CSSProperties,
        main: {
            maxWidth: '1000px',
            margin: '0 auto',
        } as React.CSSProperties,
        title: {
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '20px',
            textAlign: 'center',
        } as React.CSSProperties,
        subtitle: {
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '60px',
            color: 'rgba(255, 255, 255, 0.9)',
        } as React.CSSProperties,
        contentGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
        } as React.CSSProperties,
        infoSection: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
        } as React.CSSProperties,
        infoCard: {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '30px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
        } as React.CSSProperties,
        infoIcon: {
            fontSize: '32px',
            marginBottom: '15px',
        } as React.CSSProperties,
        infoTitle: {
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '10px',
        } as React.CSSProperties,
        infoText: {
            fontSize: '15px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
        } as React.CSSProperties,
        formCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            color: '#1a202c',
        } as React.CSSProperties,
        formGroup: {
            marginBottom: '20px',
        } as React.CSSProperties,
        label: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#333',
        } as React.CSSProperties,
        input: {
            width: '100%',
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease',
        } as React.CSSProperties,
        textarea: {
            width: '100%',
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'inherit',
            minHeight: '120px',
            resize: 'vertical',
            transition: 'border-color 0.3s ease',
        } as React.CSSProperties,
        submitBtn: {
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
        } as React.CSSProperties,
        successMessage: {
            padding: '15px',
            background: '#4caf50',
            color: 'white',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '14px',
        } as React.CSSProperties,
    };

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div style={styles.container}>
            <main style={styles.main}>
                <h1 style={styles.title}>Get in Touch</h1>
                <p style={styles.subtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                <div style={styles.contentGrid}>
                    <div style={styles.infoSection}>
                        <div style={styles.infoCard}>
                            <div style={styles.infoIcon}>📧</div>
                            <h3 style={styles.infoTitle}>Email</h3>
                            <p style={styles.infoText}>support@taskflow.io</p>
                        </div>
                        <div style={styles.infoCard}>
                            <div style={styles.infoIcon}>💬</div>
                            <h3 style={styles.infoTitle}>Live Chat</h3>
                            <p style={styles.infoText}>Available 24/7 to assist you with any questions</p>
                        </div>
                        <div style={styles.infoCard}>
                            <div style={styles.infoIcon}>📍</div>
                            <h3 style={styles.infoTitle}>Office</h3>
                            <p style={styles.infoText}>123 Tech Street, San Francisco, CA 94105</p>
                        </div>
                        <div style={styles.infoCard}>
                            <div style={styles.infoIcon}>⏰</div>
                            <h3 style={styles.infoTitle}>Response Time</h3>
                            <p style={styles.infoText}>We typically respond within 2-4 business hours</p>
                        </div>
                    </div>

                    <div style={styles.formCard}>
                        {submitted && <div style={styles.successMessage}>✓ Thank you! We'll be in touch soon.</div>}
                        <form onSubmit={handleSubmit}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Full Name</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email Address</label>
                                <input
                                    style={styles.input}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Company (Optional)</label>
                                <input
                                    style={styles.input}
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Message</label>
                                <textarea
                                    style={styles.textarea}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>
                            <button
                                type="submit"
                                style={styles.submitBtn}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
