export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algorize",
    url: `${process.env.DOMAIN_URL}`,
    logo: `${process.env.DOMAIN_URL}/logo.jpeg`,
    sameAs: [
      "https://twitter.com/companyhandle",
      "https://www.linkedin.com/company/company",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
