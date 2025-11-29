import React, { useState } from 'react';
import personImage from '../../assets/images/image 25.png'; // Replace with your actual image path

const boardMembers = [
  { name: 'John Doe', role: 'CEO', image: personImage },
  { name: 'Jane Smith', role: 'CTO', image: personImage },
  { name: 'Alice Johnson', role: 'CFO', image: personImage },
  { name: 'Robert Brown', role: 'COO', image: personImage },
];

const BoardMembers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ovalStyles = [
    { width: '115.5px', height: '305px', marginTop: '4rem' },
    { width: '115.5px', height: '305px', marginTop: '0rem' },
    ];

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2D3748' }}>Board Members</h2>
      <p style={{ marginBottom: '0rem', color: '#4A5568' }}>
        We're lucky to be supported by some of the best investors in the world.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        {boardMembers.map((member, index) => (
          <div
            key={index}
            style={{ position: 'relative', marginTop: ovalStyles[index % ovalStyles.length].marginTop }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                ...ovalStyles[index % ovalStyles.length],
                backgroundColor: '#E2E8F0',
                borderRadius: '536px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ borderRadius: '50%', width: '3rem', height: '3rem' }}
              />
            </div>
            {hoveredIndex === index && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '100%',
                  transform: 'translate(10px, -50%)',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '0.5rem',
                  textAlign: 'center',
                  zIndex: 1,
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{member.name}</h3>
                <p style={{ color: '#718096' }}>{member.role}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardMembers;
