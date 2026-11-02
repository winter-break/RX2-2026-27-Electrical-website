// Shared by the login route and the middleware (uses Web Crypto, works in both).
export const AUTH_COOKIE = "rx2_auth";

export async function tokenFor(password: string): Promise<string> {
  const data = new TextEncoder().encode(`rx2-site:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
