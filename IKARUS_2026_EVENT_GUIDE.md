# IKARUS 2026 – Official Student Guide & Event Handbook
**Host Institution**: KG Reddy College of Engineering & Technology (KGRCET), Hyderabad  
**Department**: Computer Science & Engineering (CSE)  
**Event Motto**: *"Investigate. Decode. UnLock. Put your skills to the test."*  
**Tagline**: *REAL PROBLEMS. REAL SKILLS. REAL CHALLENGES.*

---

## 📌 1. Executive Summary & Event Overview

**IKARUS 2026** is the flagship cybersecurity competition hosted at **KG Reddy College of Engineering & Technology (KGRCET)** as part of the IGNUS College Fest. Designed specifically for engineering students across different academic years, IKARUS 2026 tests real-world cybersecurity acumen, digital forensic investigation, open-source intelligence (OSINT), steganography, and cryptographic password cracking.

### Key Event Metadata
| Metric / Field | Detail |
| :--- | :--- |
| **Host Venue** | CSE Department Computer Science Labs (Lab 1 - Lab 4), KGRCET Campus |
| **Target Participants** | B.Tech 1st Year, 2nd Year, and 3rd Year Students |
| **Competition Platform** | Live Workstation Portal (`http://localhost:5173/` or Lab Server) |
| **Evaluation Basis** | Accuracy, Technical Reasoning, & Fastest Completion Time |

---

## 🗓️ 2. Event Day Timeline & Schedule

| Time Slot | Phase / Activity | Details |
| :--- | :--- | :--- |
| **09:30 AM – 10:00 AM** | Participant Check-in | Workstation assignment in KGRCET Computer Science Labs |
| **10:00 AM – 10:30 AM** | Inauguration & Briefing | Rules briefing by Faculty Convenor & Technical Leads |
| **10:30 AM – 11:30 AM** | **1st Year Competition** | *The Digital Footprint Hunt* (OSINT & Phishing Detection) |
| **11:45 AM – 12:45 PM** | **2nd Year Competition** | *Steg-Ops: Hidden in Plain Sight* (Steganography & Ciphers) |
| **01:30 PM – 02:45 PM** | **3rd Year Competition** | *Operation: Decrypt & UnLock* (Hash Cracking & Archives) |
| **03:00 PM – 03:30 PM** | Valedictory & Awards | Live Leaderboard reveal & cash prize distribution |

---

## 🏆 3. Detailed Competition Track Specifications

### Track 1: 1st Year – "The Digital Footprint Hunt"
* **Format**: Individual or Pairs (30 – 45 Minutes)
* **Core Focus**: Digital Investigation, OSINT, Clue Tracing, Scam & Phishing Detection.

#### How It Works:
* **Round 1 (Clue Tracing)**: Participants receive evidence files regarding a target persona, **Aarav Mehta** (`aarav.m_21`). Participants analyze:
  - `user_profile.txt` – Target background, course, DOB, hobbies.
  - `email_conversation.eml` – Suspicious sign-in alerts & IP logs (`192.168.1.105`).
  - `sms_logs.txt` – Banking OTPs & phishing urgency alerts (`http://bit.ly/fake-kgrcet-verify`).
  - `website.png` – Social media profile snapshot.
  - `social_media.txt` – Target post text containing secret repository (`github.com/aarav21-hidden`).
  - `transactions.csv` – Transaction log to suspicious merchants.
* **Round 2 ("Spot the Scam")**: Participants analyze 10 realistic emails, URLs, and SMS messages, classify them as Phishing vs Safe, and state valid technical reasons (e.g., spoofed domains, shortened URLs).
* **Scoring & Victory**: Points awarded per correctly answered clue + correctly identified scam. Fastest completion timestamp serves as tiebreaker.

---

### Track 2: 2nd Year – "Steg-Ops: Hidden in Plain Sight"
* **Format**: Teams of 2 (45 Minutes)
* **Core Focus**: Image Forensics, Steganography Payload Extraction, Cipher Breaking.

#### How It Works:
* **Round 1 (Image Forensics)**: Teams receive an image file (`sample_evidence.png`) embedded with hidden data using steganography techniques. Teams must inspect:
  - EXIF Metadata tags (`exiftool`).
  - LSB binary strings (`strings sample_evidence.png | grep -i "IKARUS"`).
  - Steghide extraction (`steghide extract -sf image.png`).
* **Round 2 (Cipher Break)**: Extracted payload contains a multi-stage cipher (e.g., Base64 `VW5sb2NrIHRoZSBzZWNyZXQgY29kZTogSUtBUlVTe3N0M2cwX25pbmphXzIwMjZ9`, ROT13, or Caesar cipher). Teams decode the payload to reveal the final flag.
* **Victory & Flag Format**: First team to submit the exact decoded string wins:
  ```text
  IKARUS{st3g0_ninja_2026}
  ```

---

### Track 3: 3rd Year – "Operation: Decrypt & UnLock"
* **Format**: Teams of 2 (45 – 60 Minutes)
* **Core Focus**: Cryptography, Hash Identification, Password Cracking, ZIP Archive Unlocking.

#### How It Works:
* **Round 1 (Hash Reverse Lookup)**: Teams receive a target SHA-256 hash string:
  ```text
  8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
  ```
  Teams must use hash identification tools and rainbow table databases (CrackStation) to reverse the hash back into its original plain-text passphrase: **`kgrcet2026`**.
* **Round 2 (Archive Extraction)**: Teams use the recovered password to unlock an encrypted file (`protected_archive.zip`) on their lab workstation PC.
* **Victory & Flag Format**: Inside the unlocked archive is `flag.txt` containing the secret victory code. First team to submit exact string wins:
  ```text
  IKARUS{h4sh_cr4ck3d_2026}
  ```

---

## 🛠️ 4. Student Cyber Toolkit & Command Cheat Sheet

### Google Dorks & OSINT Commands (1st Year)
```bash
# Search target domain for exposed files
site:kgrcet.ac.in filetype:pdf "mid term"

# Find open directory listings containing user profiles
intitle:"index of" "user_profile" site:example.com

# Target username search across public profiles
"aarav.m_21" OR "aaravm21@studymail.com"
```

### Steganography & Binary Forensics (2nd Year)
```bash
# Extract Steghide payload
steghide extract -sf hidden_image.jpg -p ""

# Extract readable ASCII strings from binary image
strings hidden_image.png | grep -i "IKARUS"

# Read image EXIF metadata headers
exiftool hidden_image.jpg
```

### Cryptography & Hash Cracking (3rd Year)
```bash
# Dictionary attack on password-protected ZIP archive
fcrackzip -u -d -p rockyou.txt protected_archive.zip

# Identify Hash Type
hash-identifier 8d969eef6ecad3c29a3a629280e686cf

# Compute SHA-256 file checksum in PowerShell
Get-FileHash -Algorithm SHA256 protected_archive.zip
```

---

## 📜 5. Code of Conduct & Tiebreaker Policy

1. **Academic Integrity**: Participants must compete strictly within their designated academic year track.
2. **Workstation Usage**: All activities must be confined to the assigned computer lab workstation. Attacking the platform or neighboring workstations will result in immediate disqualification.
3. **Data Usage**: All profiles, emails, phone numbers, and transactions provided during the competition are fictitious datasets created solely for educational evaluation.
4. **⏱️ Tiebreaker Rule**: If multiple teams achieve full score, rank priority is automatically awarded to the team with the earliest submission timestamp recorded on the server.

---

## 📞 6. Venue & Organizers Contact Information

* **Venue**: Computer Science & Engineering Labs (Lab 1 - Lab 4), KG Reddy College of Engineering & Technology, Hyderabad.
* **Faculty Convenor**: Head of Department, CSE Dept, KGRCET (`convenor.ikarus@kgrcet.ac.in`)
* **Student Technical Leads**:
  - Rohan Verma (Technical Lead): `+91 98765 12345`
  - Kavya Sharma (Event Coordinator): `+91 98765 67890`
