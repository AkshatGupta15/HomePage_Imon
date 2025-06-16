import { Helmet } from "react-helmet-async";

const getFullUrl = (path?: string) => {
  if (typeof window !== "undefined") {
    const base = window.location.origin;
    return path ? `${base}${path}` : base;
  }
  return ""; // fallback for SSR (if any)
};

export const SEO = ({
  title,
  description,
  path = "",
  image = "/iitk.png",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}) => {
  const fullUrl = typeof window !== "undefined" ? getFullUrl(path) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {fullUrl && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image.startsWith("http") ? image : getFullUrl(image)} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image.startsWith("http") ? image : getFullUrl(image)} />
    </Helmet>
  );
};
