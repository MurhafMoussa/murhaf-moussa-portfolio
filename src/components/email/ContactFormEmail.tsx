interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: '1.5', color: '#333' }}>
    <h2 style={{ color: '#0070f3', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      New Portfolio Inquiry
    </h2>
    
    <p>You have received a new message from your portfolio contact form.</p>
    
    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
      <p><strong>Sender Name:</strong> {name}</p>
      <p><strong>Sender Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
    </div>

    <div style={{ marginTop: '20px' }}>
      <p><strong>Message Content:</strong></p>
      <blockquote style={{ 
        borderLeft: '4px solid #0070f3', 
        paddingLeft: '15px', 
        fontStyle: 'italic',
        color: '#555' 
      }}>
        {message}
      </blockquote>
    </div>

    <hr style={{ border: 'none', borderTop: '1px solid #eee', marginTop: '30px' }} />
    
    <p style={{ fontSize: '12px', color: '#888' }}>
      Sent from your Next.js Portfolio via Resend.
    </p>
  </div>
);

export default ContactFormEmail;