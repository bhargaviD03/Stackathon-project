import React from 'react';
import './TeamSection.css';

const team = [
  {
    id: 1,
    name: 'Ryan Wilson',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Jill Peterson',
    role: 'Garden Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Sam Robinson',
    role: 'Farmyard Coordinator',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-heading">Our Team</h2>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;