import React from 'react';

const Profile = ({ name, bio, avatarUrl }) => {
  return (
    <div style={styles.container}>
      <img
        src={avatarUrl || 'https://via.placeholder.com/150'}
        alt={`Avatar di ${name}`}
        style={styles.avatar}
      />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.bio}>{bio}</p>
    </div> 
  );
};

// Stili inline per il componente
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '1rem',
    textAlign: 'center',
  },
};

export default Profile;

