import React from 'react';
import { TeamMember } from '../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text-dark">{member.name}</h3>
        <p className="text-secondary-red font-medium text-sm mb-3">{member.role}</p>
        <p className="text-text-light text-sm line-clamp-3">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;