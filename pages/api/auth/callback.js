export default async function handler(req, res) {
    console.log("Callback endpoint triggered");
    console.log("Code received:", req.query.code);
  
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const tenantId = process.env.AZURE_TENANT_ID;
    const redirectUri = `${process.env.BASE_URL}/api/auth/callback`;
  
    console.log("Redirect URI:", redirectUri);
  
    try {
      const response = await axios.post(
        `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: req.query.code,
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
  
      const data = response.data;
      console.log("Token received:", data);
  
      res.status(200).send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
    } catch (error) {
      console.error("OAuth Error:", error.message, error.response?.data);
      res.status(500).json({ error: error.message, details: error.response?.data });
    }
  }
  