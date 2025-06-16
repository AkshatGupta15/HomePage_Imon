/**
 * Prepends the correct base URL for static assets (e.g., on IITK server)
 * @param path Image or asset path starting with a slash (e.g., /images/x.png)
 * @returns Full URL with base path prepended
 */
export function getFullImageUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}
