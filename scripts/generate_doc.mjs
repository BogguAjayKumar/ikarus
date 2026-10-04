import { 
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType 
} from 'docx';
import fs from 'fs';
import path from 'path';

async function generateDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Title Banner
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: "IKARUS 2026",
                bold: true,
                size: 44,
                color: "06B6D4",
                font: "Outfit"
              })
            ]
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: "Official Student Guide & Event Handbook",
                bold: true,
                size: 28,
                color: "1E293B",
                font: "Plus Jakarta Sans"
              })
            ]
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({
                text: "KG Reddy College of Engineering & Technology (KGRCET)\n",
                bold: true,
                size: 22,
                color: "0F172A"
              }),
              new TextRun({
                text: "Department of Computer Science & Engineering (CSE)\n",
                size: 20,
                color: "64748B"
              }),
              new TextRun({
                text: "Investigate. Decode. UnLock. Put your skills to the test.",
                italics: true,
                bold: true,
                size: 20,
                color: "10B981"
              })
            ]
          }),

          // Section 1: Executive Summary
          new Paragraph({
            text: "1. Executive Summary & Event Overview",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 150 }
          }),

          new Paragraph({
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: "IKARUS 2026 is the flagship cybersecurity competition hosted at KG Reddy College of Engineering & Technology (KGRCET) as part of the IGNUS College Fest. Designed specifically for engineering students across different academic years, IKARUS 2026 tests real-world cybersecurity acumen, digital forensic investigation, open-source intelligence (OSINT), steganography, and cryptographic password cracking.",
                size: 22
              })
            ]
          }),

          // Overview Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "0F172A" },
                    children: [new Paragraph({ children: [new TextRun({ text: "Metric / Field", bold: true, color: "FFFFFF" })] })]
                  }),
                  new TableCell({
                    shading: { fill: "0F172A" },
                    children: [new Paragraph({ children: [new TextRun({ text: "Detail Specification", bold: true, color: "FFFFFF" })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Host Venue", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "CSE Department Computer Labs (Lab 1 - Lab 4), KGRCET Campus" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Target Participants", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "B.Tech 1st Year, 2nd Year, and 3rd Year Students" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Competition Platform", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Live Workstation Portal (http://localhost:5173/)" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Evaluation Basis", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Accuracy, Technical Reasoning, & Fastest Completion Time" })] })
                ]
              })
            ]
          }),

          // Section 2: Event Timeline
          new Paragraph({
            text: "2. Event Day Schedule & Timeline",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 150 }
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ shading: { fill: "0284C7" }, children: [new Paragraph({ children: [new TextRun({ text: "Time Slot", bold: true, color: "FFFFFF" })] })] }),
                  new TableCell({ shading: { fill: "0284C7" }, children: [new Paragraph({ children: [new TextRun({ text: "Phase / Activity", bold: true, color: "FFFFFF" })] })] }),
                  new TableCell({ shading: { fill: "0284C7" }, children: [new Paragraph({ children: [new TextRun({ text: "Details", bold: true, color: "FFFFFF" })] })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "09:30 AM – 10:00 AM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Participant Check-in", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Workstation assignment in KGRCET Computer Science Labs" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "10:00 AM – 10:30 AM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Inauguration Briefing", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Rules briefing by Faculty Convenor & Technical Leads" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "10:30 AM – 11:30 AM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1st Year Competition", bold: true, color: "059669" })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "The Digital Footprint Hunt (OSINT & Phishing Detection)" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "11:45 AM – 12:45 PM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2nd Year Competition", bold: true, color: "7C3AED" })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Steg-Ops: Hidden in Plain Sight (Steganography & Ciphers)" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "01:30 PM – 02:45 PM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3rd Year Competition", bold: true, color: "D97706" })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Operation: Decrypt & UnLock (Hash Cracking & Archives)" })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ text: "03:00 PM – 03:30 PM" })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Valedictory & Awards", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ text: "Live Leaderboard reveal & cash prize distribution" })] })
                ]
              })
            ]
          }),

          // Section 3: Track Breakdown
          new Paragraph({
            text: "3. Competition Track Specifications",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 150 }
          }),

          // Track 1
          new Paragraph({
            text: "Track 1: 1st Year – The Digital Footprint Hunt",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Format: ", bold: true }),
              new TextRun({ text: "Individual or Pairs (30–45 Mins)\n" }),
              new TextRun({ text: "Round 1 (Clue Tracing): ", bold: true }),
              new TextRun({ text: "Participants inspect evidence files regarding target persona Aarav Mehta (aarav.m_21) including user_profile.txt, email_conversation.eml, sms_logs.txt, website.png, social_media.txt, and transactions.csv to answer 4 investigation questions.\n" }),
              new TextRun({ text: "Round 2 (Spot the Scam): ", bold: true }),
              new TextRun({ text: "Participants analyze 10 realistic emails, URLs, and SMS messages, classify them as Phishing vs Safe, and provide technical reasoning." })
            ]
          }),

          // Track 2
          new Paragraph({
            text: "Track 2: 2nd Year – Steg-Ops: Hidden in Plain Sight",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Format: ", bold: true }),
              new TextRun({ text: "Teams of 2 (45 Mins)\n" }),
              new TextRun({ text: "Round 1 (Image Forensics): ", bold: true }),
              new TextRun({ text: "Teams extract hidden data from sample_evidence.png using steghide, EXIF metadata inspection, or binary strings extraction.\n" }),
              new TextRun({ text: "Round 2 (Cipher Break): ", bold: true }),
              new TextRun({ text: "Decodes multi-stage Base64, ROT13, and Caesar ciphers to submit the secret victory flag: " }),
              new TextRun({ text: "IKARUS{st3g0_ninja_2026}", bold: true, color: "7C3AED" })
            ]
          }),

          // Track 3
          new Paragraph({
            text: "Track 3: 3rd Year – Operation: Decrypt & UnLock",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Format: ", bold: true }),
              new TextRun({ text: "Teams of 2 (45–60 Mins)\n" }),
              new TextRun({ text: "Round 1 (Hash Reverse Lookup): ", bold: true }),
              new TextRun({ text: "Teams reverse target SHA-256 hash string (8d969eef6ecad...) to plaintext password (kgrcet2026) via rainbow tables / CrackStation.\n" }),
              new TextRun({ text: "Round 2 (Archive Extraction): ", bold: true }),
              new TextRun({ text: "Teams use recovered password to unlock protected_archive.zip to retrieve flag.txt: " }),
              new TextRun({ text: "IKARUS{h4sh_cr4ck3d_2026}", bold: true, color: "D97706" })
            ]
          }),

          // Section 4: Rules & Organizers
          new Paragraph({
            text: "4. Code of Conduct & Contact Info",
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Workstation Rules: ", bold: true }),
              new TextRun({ text: "Activities must be confined to assigned computer lab PCs. Attacking platform or neighboring workstations leads to disqualification.\n" }),
              new TextRun({ text: "• Tiebreaker Rule: ", bold: true }),
              new TextRun({ text: "Earliest submission timestamp recorded on server breaks ties.\n" }),
              new TextRun({ text: "• Venue: ", bold: true }),
              new TextRun({ text: "CSE Department Computer Science Labs (Lab 1 - Lab 4), KG Reddy College of Engineering & Technology, Hyderabad.\n" }),
              new TextRun({ text: "• Faculty Convenor: ", bold: true }),
              new TextRun({ text: "Head of Dept, CSE Dept (convenor.ikarus@kgrcet.ac.in)\n" }),
              new TextRun({ text: "• Student Tech Leads: ", bold: true }),
              new TextRun({ text: "Rohan Verma (+91 98765 12345), Kavya Sharma (+91 98765 67890)" })
            ]
          })

        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(process.cwd(), 'IKARUS_2026_EVENT_GUIDE.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`Successfully generated Word Document: ${outPath}`);
}

generateDocx();
