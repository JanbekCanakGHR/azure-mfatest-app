export default function Home() {
  const login = () => {
    const tenantId = process.env.NEXT_PUBLIC_AZURE_TENANT_ID;
    const clientId = process.env.NEXT_PUBLIC_AZURE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/api/auth/callback`;

    const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=openid%20profile%20email&state=12345`;

    window.location.href = url;
  };

  return (
    <main style={styles.container}>
      <img src="/logo.svg" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Microsoft Azure Entra ID Giriş Testi</h1>
      <button onClick={login} style={styles.button}>Microsoft 365 Hesabı ile Giriş Yapın</button>
    </main>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
  },
  logo: {
    width: '150px',
    height: '50px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  }
};
