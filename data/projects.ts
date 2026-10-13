export type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  images: string[];
  category: string;
};

export const projects: Project[] = [
  {
    title: "Visa Management System",
    category: "Government",
    tagline: "End-to-end visa workflow from application to deployment.",
    description:
      "A bilingual visa processing platform for agencies managing overseas worker placement. Tracks each applicant through 8 workflow stages — initiated, medical, insurance, fingerprint, embassy, LMIS, visa issued, and flight booked.",
    features: [
      "8-stage workflow with approval gates",
      "Bilingual CV generator (English and Arabic)",
      "Partner agency and case manager assignment",
      "Document uploads per stage",
    ],
    images: [
      "/images/projects/visa-1.png",
      "/images/projects/visa-2.png",
      "/images/projects/visa-3.png",
    ],
  },
  {
    title: "HR Management System",
    category: "Enterprise",
    tagline: "Attendance, Payroll, Recruitment and Performance.",
    description:
      "An HR platform covering the full employee lifecycle — from recruitment and onboarding to attendance, payroll, and performance review. Built to handle Ethiopian tax and pension rules out of the box.",
    features: [
      "Biometric-linked attendance tracking",
      "Automated payroll with tax and pension compliance",
      "Recruitment pipeline and applicant tracking",
      "Performance reviews and goal management",
    ],
    images: ["/images/projects/hr-1.png", "/images/projects/hr-2.png"],
  },
  {
    title: "E-Learning System",
    category: "Education",
    tagline: "Course enrollment and payment integration.",
    description:
      "An online learning platform with course catalog, enrollment, payment integration, and progress tracking. Includes an instructor dashboard for content uploads and a student portal for learning.",
    features: [
      "Course catalog with categories and tags",
      "Enrollment and payment integration",
      "Progress tracking and completion certificates",
      "Instructor dashboard for content management",
    ],
    images: [
      "/images/projects/lms-1.png",
      "/images/projects/lms-2.png",
      "/images/projects/lms-3.png",
    ],
  },
  {
    title: "ERP System",
    category: "Enterprise",
    tagline: "Procurement, Inventory, Sales, Production and Costing.",
    description:
      "A full enterprise resource planning platform built for manufacturers and distributors. Handles the entire operational chain from purchase request to final costing, with real-time stock visibility and role-based workflows across departments.",
    features: [
      "Procurement, inventory, sales, and production modules",
      "Automated costing with batch and serial tracking",
      "Multi-warehouse stock and transfer management",
      "Role-based access for admins, storekeepers, and finance",
    ],
    images: ["/images/projects/erp-1.png"],
  },

  {
    title: "Logistics Platform",
    category: "Operations",
    tagline: "Driver management, SMS notifications and route assignment.",
    description:
      "A dispatch and fleet platform for transport operators. Dispatchers assign routes, drivers receive SMS notifications, and operations get live visibility into trips, fuel, and delivery status.",
    features: [
      "Driver and vehicle registry",
      "Route assignment with weekly scheduling",
      "SMS dispatch notifications",
      "Live trip tracking and fuel reporting",
    ],
    images: [
      "/images/projects/logistics-1.png",
      "/images/projects/logistics-2.png",
    ],
  },
  {
    title: "Clinic Management System",
    category: "Healthcare",
    tagline: "Appointments, prescriptions and patient records.",
    description:
      "A multi-branch clinic platform for managing patient registration, appointments, prescriptions, and medical records. Designed for fast reception workflows and shared patient history across locations.",
    features: [
      "Patient registration and card number generation",
      "Appointment scheduling across doctors",
      "e-Prescription with drug interaction warnings",
      "Shared medical history across branches",
    ],
    images: ["/images/projects/clinic-1.png"],
  },

  {
    title: "School Management System",
    category: "Education",
    tagline: "Classes, sections, students, teachers and fee collection.",
    description:
      "A complete school administration platform covering class sections, student and teacher records, attendance, assessments, fee collection, and reporting. Includes a calendar and analytics dashboard.",
    features: [
      "Class and section management",
      "Student, teacher, and attendance records",
      "Fee collection with monthly reporting",
      "Assessment, results, and analytics dashboard",
    ],
    images: ["/images/projects/school-1.png", "/images/projects/school-2.png"],
  },
  {
    title: "Pharmacy Inventory System",
    category: "Healthcare",
    tagline: "Stock, batches, expiry tracking and sales for pharmacies.",
    description:
      "A pharmacy inventory and sales platform tracking products, batches, expiry dates, and stock levels across multiple locations. Includes patient treatment consumption and low-stock alerts.",
    features: [
      "Product, category, and batch management",
      "Expiry tracking with low-stock alerts",
      "Patient treatment consumption records",
      "Multi-location inventory and sales",
    ],
    images: ["/images/projects/pharmacy-1.png"],
  },
];
