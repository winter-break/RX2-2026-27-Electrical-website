export const dynamic = "force-dynamic";

export default async function PasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="gate">
      <img className="gate-glow" src="/glow.png" alt="" />
      <img className="gate-tiger" src="/tiger.png" alt="" />
      <img className="gate-logo" src="/logo.png" alt="Racer X²" />
      <form className="gate-bar" method="POST" action="/api/login" autoComplete="off">
        <label htmlFor="pw">PASSWORD:</label>
        <input id="pw" name="password" type="password" autoFocus required />
      </form>
      {error && <p className="gate-error">Incorrect password</p>}
    </main>
  );
}
