import jwt_decode from "jwt-decode";

export default function Profile({ user }) {
  return (
    <main style={styles.container}>
      <img src="/logo.svg" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Hoş geldin, {user.name} 👋</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Kullanıcı ID:</strong> {user.oid}</p>
    </main>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
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
    fontSize: '22px',
    marginBottom: '10px',
  },
};

export async function getServerSideProps(context) {
  const { id_token } = context.query;
  const user = jwt_decode(id_token);
  return {
    props: { user },
  };
}
