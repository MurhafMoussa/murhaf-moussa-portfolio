import Link from "next/link";

const lastUpdated = "May 2026";

export default function page() {
  return (
    <article className="prose mt-8 pb-16 dark:prose-invert">
      <div className="space-y-4">
        <h1 className="title text-5xl">privacy policy.</h1>
        <p className="font-mono text-sm">Last Updated: {lastUpdated}</p>
      </div>

      <div className="space-y-4">
        <h2 className="title text-3xl">Commitment to Privacy</h2>
        <p>
          As a software engineer, I value data integrity and user privacy. 
          This policy outlines how I handle information on this portfolio site. 
          The primary goal of this website is to showcase my technical expertise 
          and professional experience.
        </p>

        <h2 className="title text-2xl">Data Collection</h2>
        <p>
          This site is designed to be as privacy-preserving as possible. I do 
          not use tracking cookies, analytics scripts that identify individuals, 
          or third-party advertising trackers.
        </p>

        <h3 className="text-xl font-bold">1. Contact Inquiries</h3>
        <p>
          When you use the contact form, I collect the information you explicitly 
          provide, such as your <b>name</b>, <b>email address</b>, and the content 
          of your <b>message</b>. This data is used solely to respond to your 
          professional inquiries.
        </p>

        <h3 className="text-xl font-bold">2. Technical Logs</h3>
        <p>
          Like most web services, my hosting provider (Vercel) may record standard 
          server logs (such as IP addresses) to ensure the security and stability 
          of the service.
        </p>

        <h2 className="title text-2xl">How Information is Used</h2>
        <ul>
          <li>To facilitate professional communication regarding job opportunities or collaborations.</li>
          <li>To maintain the security and technical performance of the website.</li>
          <li>To improve the site structure based on generalized, anonymous usage patterns.</li>
        </ul>

        <h2 className="title text-2xl">Third-Party Services</h2>
        <p>
          I utilize <b>Resend</b> for handling email delivery from the contact form. 
          Your information is never sold, traded, or shared with third parties 
          for marketing purposes.
        </p>

        <h2 className="title text-2xl">Your Rights (GDPR)</h2>
        <p>
          If you are visiting from the European Union, you have the right to 
          access, rectify, or request the deletion of any personal data you 
          have shared through the contact form. As a candidate 
          supported by the <b>Imagine Foundation</b> and eligible for the 
          <b> EU Blue Card</b>, I am committed to upholding these standards 
          of data protection.
        </p>

        <h2 className="title text-2xl">Security</h2>
        <p>
          I implement industry-standard security measures to protect your data. 
          However, please remember that no method of transmission over the 
          internet is 100% secure.
        </p>

        <h2 className="title text-2xl">Contact</h2>
        <p>
          For any questions regarding this policy or your data, please reach 
          out directly at{" "}
          <Link href="mailto:murhaf.moussa@hotmail.com" className="text-primary hover:underline">
            murhaf.moussa@hotmail.com
          </Link>.
        </p>
      </div>
    </article>
  );
}