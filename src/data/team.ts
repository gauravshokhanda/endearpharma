export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Dr. Chen has over 20 years of experience in the pharmaceutical industry. She holds a Ph.D. in Pharmacology from Stanford University and has led the development of several breakthrough medications. Under her leadership, Endearpharma has expanded its product line and international presence significantly.",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Chief Research Officer",
    bio: "Dr. Rodriguez leads our research and development team with passion and innovation. With a background in medicinal chemistry and a Ph.D. from MIT, he has been instrumental in developing our proprietary drug delivery systems and formulations.",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg"
  },
  {
    id: 3,
    name: "Dr. Emily Patel",
    role: "Head of Clinical Trials",
    bio: "Dr. Patel oversees all clinical trials and ensures our products meet the highest standards of safety and efficacy. She brings 15 years of experience in clinical research and holds an MD from Johns Hopkins University.",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Chief Operations Officer",
    bio: "James ensures our manufacturing and distribution operations run smoothly and efficiently. His background in supply chain management and MBA from Wharton have been instrumental in optimizing our production processes.",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg"
  },
  {
    id: 5,
    name: "Dr. Aisha Kahn",
    role: "Quality Assurance Director",
    bio: "Dr. Kahn ensures all our products meet rigorous quality standards and comply with international regulations. Her attention to detail and background in pharmaceutical quality control make her perfect for this critical role.",
    image: "https://images.pexels.com/photos/5490812/pexels-photo-5490812.jpeg"
  },
  {
    id: 6,
    name: "Robert Chen",
    role: "Marketing Director",
    bio: "Robert leads our marketing initiatives with creativity and strategic thinking. His innovative campaigns have significantly increased brand awareness and market share for Endearpharma products over the past five years.",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg"
  }
];