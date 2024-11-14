import React from 'react';
import './Showcase.css';

const Showcase = () => {
    const items = [
        { title: 'IEEE Xtreme 18.0 (2024)', link: ''},
        { title: 'ACES Coders V11.0 (2024)', link: 'https://www.linkedin.com/posts/priyatharsinis_coding-teamwork-problemsolving-activity-7251472121959260160-KGeR?utm_source=share&utm_medium=member_desktop' },
        { title: 'YGC-2024 : CodeStorm 2.0', link: 'https://drive.google.com/file/d/1e1w27HvTUf5BlkmPHLjqJf_b2bVTZhZX/view?usp=sharing' },
        { title: 'GeSSOMI-2024 : CyberSecurity Bootcamp', link: 'https://www.linkedin.com/posts/priyatharsinis_cybersecurity-zerotrust-wireshark-activity-7209564507830939648-7E7j' },
        { title: 'IEEE Xtreme 17.0 (2023)', link: 'https://www.linkedin.com/posts/priyatharsinis_ieeextreme-uoj-teamwork-activity-7142013735111434240-kBqV' },
        { title: 'ACES Coders V10.0 (2023)', link: 'https://www.linkedin.com/posts/priyatharsinis_coding-teamwork-problemsolving-activity-7251472121959260160-KGeR?utm_source=share&utm_medium=member_desktop' },
        { title: 'ANCQ Quiz by Australian Chemistry Institute (2017)', link: 'https://drive.google.com/file/d/1rBGsWlc62YhCGH6Ek_h1dy3mmO4ILFbd/view?usp=sharing' },
        { title: 'Microsoft .NET Fundamentals, Great Learning', link: 'https://drive.google.com/file/d/1Wu5A_Q9hYnp6rFXzM34GQoiLdJJO5K7d/view?usp=sharing' },
        { title: 'Supervised Machine Learning: Regression & Classification, Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/LRYZ89ZJ9JAJ' },
        { title: 'JavaScript for Web Development, Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/L3S9PMQH3NFF' },
        { title: 'Python for Beginners, University of Moratuwa', link: 'https://drive.google.com/file/d/1_R7HsPMJQn0fyAWNy3Ir-EP58YFLgNVt/view?usp=sharing' },
        { title: 'Web Design for Beginners, University of Moratuwa', link: 'https://drive.google.com/file/d/1A8wyoXp4xYImOr-N_FZAdkqSdHCd1GCP/view?usp=sharing' },
        { title: 'Front-End Web Development, University of Moratuwa', link: 'https://drive.google.com/file/d/1JHBSUnW8gO_Nm2EnMtXeFmiOs3fbG_AX/view?usp=sharing' },
    ];

  return (
    <section id="showcase" className="container">
      <h5 className="text-light">Participation and Certification</h5>
      <div className="showcase-container">
        {items.map((item, index) => (
          <div className="showcase-item" key={index}>
            <div className="showcase-content">
              <h3>{item.title}</h3>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
