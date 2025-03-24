export default function Home() {
    const login = () => {
      const tenantId = process.env.NEXT_PUBLIC_AZURE_TENANT_ID;
      const clientId = process.env.NEXT_PUBLIC_AZURE_CLIENT_ID;
      const redirectUri = `${window.location.origin}/api/auth/callback`;
  
      const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=openid%20profile%20email&state=12345`;
  
      window.location.href = url;
    };
  
    return (
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Azure Entra ID Login Test</h1>
        <button onClick={login} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Microsoft ile Giriş Yap
        </button>
      </main>
    );
  }
  