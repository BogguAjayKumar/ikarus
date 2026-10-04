# 🚀 IKARUS 2026 – Official Guide & Interactive Competition Arena

> **KG Reddy College of Engineering & Technology (KGRCET)**  
> **Department of Computer Science & Engineering (CSE)**  
> *Investigate. Decode. UnLock. Put your skills to the test.*

![IKARUS 2026](https://img.shields.io/badge/IKARUS-2026-06b6d4?style=for-the-badge&logo=shield)
![KGRCET](https://img.shields.io/badge/KGRCET-CSE_Dept-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

---

## 📌 Overview

**IKARUS 2026** is the premier cybersecurity fest hosted at **KG Reddy College of Engineering & Technology (KGRCET)** as part of the IGNUS College Fest. This web application serves as the official student handbook, event guide, cyber toolkit, and live interactive practice arena for students competing across 3 customized academic tracks.

---

## 🏆 Competition Tracks

### 🟢 1st Year Track: *The Digital Footprint Hunt*
* **Format**: Individual or Pairs (30–45 Mins)
* **Round 1 (OSINT Investigation)**: Trace fictitious target persona evidence files (`user_profile.txt`, `email_conversation.eml`, `sms_logs.txt`, `website.png`, `social_media.txt`, `transactions.csv`). Target: **Aarav Mehta** (`aarav.m_21`).
* **Round 2 (Spot the Scam)**: Phishing email/SMS classification & technical reasoning.

### 🟣 2nd Year Track: *Steg-Ops: Hidden in Plain Sight*
* **Format**: Teams of 2 (45 Mins)
* **Round 1 (Image Forensics)**: Extract steganography payload using `steghide`, EXIF metadata viewers, or `strings` command.
* **Round 2 (Cipher Break)**: Multi-stage Base64, ROT13, and Caesar cipher decoding for flag `IKARUS{st3g0_ninja_2026}`.

### 🟡 3rd Year Track: *Operation: Decrypt & UnLock*
* **Format**: Teams of 2 (45–60 Mins)
* **Round 1 (Hash Reverse Lookup)**: Reverse target SHA-256 hash (`8d969eef6ecad...`) to plaintext password (`kgrcet2026`) via rainbow tables / CrackStation.
* **Round 2 (Archive Access)**: Unlock password-protected `protected_archive.zip` to retrieve victory code `IKARUS{h4sh_cr4ck3d_2026}`.

---

## ✨ Features

- 🌐 **Interactive Practice Arena**: Hands-on simulator reproducing the live competition dashboard with countdown timers, evidence viewers, and flag submissions.
- 🤖 **Interactive AI Virtual Guide ("Alex")**: Guided step-by-step tour engine and teleport navigation buttons.
- 🛠️ **Cyber Toolkit**: Google Search Dorks, Steganography CLI cheatsheets, and live ROT13/Caesar cipher transformer.
- 📊 **Live Leaderboard**: Real-time standings with time-based tiebreaker metrics.
- 📖 **Event Guide Document**: Complete handbook detailing schedule, rules, and organizers contact info.

---

## 🛠️ Local Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BogguAjayKumar/ikarus.git
   cd ikarus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📜 Event Rules & Code of Conduct

1. Participants must compete within their designated academic year category track.
2. Workstation activities must remain confined to designated computer lab PCs at KGRCET.
3. All profiles, logs, and emails provided are fictitious datasets created strictly for educational purposes.
4. Tiebreaker Priority: Earliest submission timestamp on server.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
