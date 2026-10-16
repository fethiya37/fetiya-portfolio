export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  credential?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Health Information System Hackathon",
    issuer: "USAID & Ministry of Health Ethiopia",
    date: "March 15 – 17, 2022",
    description:
      "Successfully participated in the Health Information System (HIS) Hackathon program organized by the Ministry of Health of Ethiopia and USAID Digital Health Activity (DHA).",
    image: "/images/certificates/usaid-his-hackathon.jpg",
    tags: ["Hackathon", "Digital Health", "HIS"],
    credential: "USAID Digital Health Activity",
  },
  {
    title: "Clinic Management System Development",
    issuer: "Sky Link Technologies PLC",
    date: "March 13, 2025",
    description:
      "In recognition of the successful completion of Human Resource Management System, Clinic Management System for Dermatology and School Management System Software Development.",
    image: "/images/certificates/skylink-clinic-system.jpg",
    tags: ["HRM", "Clinic System", "School Management"],
    credential: "Sky Link Technologies",
  },
  {
    title: "Certificate of Achievement",
    issuer: "Sky Link Technologies PLC",
    date: "September 15, 2025",
    description:
      "In recognition and sincere appreciation of many years of service, showing strong commitment and successfully participating in numerous projects.",
    image: "/images/certificates/skylink-achievement.jpg",
    tags: ["Achievement", "Commitment", "Projects"],
    credential: "Sky Link Technologies",
  },
];
