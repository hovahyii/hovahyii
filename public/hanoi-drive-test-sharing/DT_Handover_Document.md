# DT Work Handover Document

**Prepared by:** Jehovah Yii Zui Hon (j60086951)
**Date:** 01-Sep-2026
**Project:** MobiFone (MBF) RAN 2026 - Vietnam
**Scope:** All Drive Test work done from Aug 2026 onwards

---

## 1. WeLink Groups Overview

| Group Name | Group ID | Purpose |
|------------|----------|---------|
| DT Management | 936714420879622473 | Main coordination group for all DT activities |
| 10/08 - 16/08 Drive Test Record | 997212977222389807 | Noi Bai Airport T2 Shop testing |
| Hanoi Airport DT Asurrance | 994063112594419792 | Airport T1 assurance + Mobifone store testing |

---

## 2. People You Need to Know

| Name | Account | Role | What to Know |
|------|---------|------|--------------|
| Miao Peiqian | m00907087 | RF Delivery Leader | Your direct leader for DT tasks |
| Ouyang Changjun | o60125604 | Delivery Leader | Overall delivery, VIP complaint handling |
| Hoang Minh Thao | h00708566 | Local MBF RF | Approves DT plans, reviews reports |
| Phan Tuan Anh | p60120025 | Local engineer | Handles MBF access, cross feeder updates |
| Su Xiaobo | s00921749 | GSC engineer | Report writing, log analysis |
| Nguyen Ha Phan | n50066043 | Local engineer | Field testing partner |
| Phan Truong Khang | p50065883 | Local engineer | Field testing partner |
| Luo Yanyang | l00947656 | RF engineer | VIP complaint testing, Riverside DT |

---

## 3. DT Storage Location

All DT logs are stored in the WeLink Group Space:
```
Group Space > DT Management > North > Benchmark DT Log > [date] > [location]
```

Onebox link: `https://onebox.huawei.com/#eSpaceGroupFile/1/2926/21491566`

---

## 4. Detailed Test History

### 4.1 Noi Bai International Airport T2 (08-16)

**Why:** Customer complaint - Shop 1 on 1st floor had poor UL performance.

**What we tested:**

| Test Item | Method | Result |
|-----------|--------|--------|
| Shop 1 - 4G FTP UL | Static test at Shop 1 counter, multiple trials | OK after optimization |
| Shop 2 - 4G FTP UL | Static test at Shop 2 counter | Still low (UL < 10Mbps), not much improvement |
| T2 1st Floor - 4G Idle | Walk test on 1st floor | Normal |
| T2 1st Floor - 5G Idle | Walk test on 1st floor | Normal |
| T1 Floor 1 - VNPT 4G Lock 1875 | Lock to VNPT freq 1875, idle walk | Collected for interference analysis |
| VUE Trace | MBF SIM (Phone: 841212953022, Trace ID: 977718) | Collected for further analysis |

**Key findings:**
- VNPT antenna found near Shop 1 (horizontal distance ~12-15m from F2 of VNPT building)
- Shop 2 had no complaints from Mobifone card customers since yesterday
- UL target set at > 10Mbps
- Miao Peiqian asked to check UL interference and load

**Logs uploaded:**
- `20260816142046489_868551052493262_0_T2_1stFloor_4G_Idle.gen.zip`
- `20260816145956552_868551052493262_0_T2_1stFloor_Shop 1_4G_FTPUL.gen-1.zip` (Trial 2)
- `20260816153425153_863342043540147_0_1stFloor_Shop1_4G_FTPUL.gen.zip` (Trial 2, 3:30 PM)
- `20260816_T1_floor1_vnpt_4g_lock1875_Idle.gen.zip`
- `20260816_T2_1floor_5g_mbf_Idle.gen.zip`
- `20260816_T2_1floor_4g_mbf_Idle.gen.zip`

**Final report:** `Drive Test Summary 07082026 - 16082026.xlsx`

---

### 4.2 Mobifone Store Testing - 21B Ba La (08-13, 08-19)

**Why:** VIP assurance, speed testing at MBF retail stores.

**What we tested:**

| Test Item | Method | Result |
|-----------|--------|--------|
| Indoor 5G Speedtest | Ookla app, inside store | Bad coverage - no 5G signal in some areas |
| Outdoor 5G Speedtest | Ookla app, outside store | Normal |
| Indoor LTE BasicInfo | Screenshots of LTE info | Collected |
| Indoor 5G BasicInfo | Screenshots of NR info | Collected |

**Key findings:**
- Indoor 5G had bad coverage (no signal shown in later screenshots)
- First screenshot showed "false 5G" (displayed 5G but actually not connected)
- Escalated to VIP care and optimization team for optimization

**Deliverables:**
- `Ookla 5G Speedtest at Mobifone Store - 21B Ba La.pptx`
- `Ookla 5G Speedtest at Mobifone Store - 21B Ba La Update.pptx`

---

### 4.3 Mobifone Store Testing - 16 Dien Bien Phu (08-20)

**Location:** 16 Dien Bien Phu (21.0298, 105.8422)

**What we tested:**

| Test Item | Method | Result |
|-----------|--------|--------|
| 5G Speedtest | Indoor + Outdoor | Collected |
| FTP DL | Indoor + Outdoor | Collected |

**Notes:**
- Combined with Ba La results into one report
- New test phones stored in drawer (I kept the key)

**Deliverable:** `Ookla 5G Speedtest at Mobifone Store 18 August - 20 August.pptx`

---

### 4.4 Hanoi Airport T1 Indoor - Post Optimization (08-25)

**Why:** Ouyang Changjun requested post-test after optimization. Previous issue: Floor 1-2 partial areas using Macro PCI, Floor 3 all using Macro PCI.

**What we tested:**

| Test Item | Method | Result |
|-----------|--------|--------|
| 1st Floor - 4G FTPDL | Walk test, public area only | IBC coverage improved |
| 1st Floor - 5G FTPDL | Walk test, public area only | IBC coverage improved |
| 2nd Floor - 4G FTPDL | Walk test, public area only | IBC coverage improved |
| 2nd Floor - 5G FTPDL | Walk test, public area only | IBC coverage improved |
| 3rd Floor - 4G FTPDL | Walk test, public area only | IBC coverage improved |
| 3rd Floor - 5G FTPDL | Walk test, public area only | IBC coverage improved |

**Key findings:**
- Only tested public area (restricted area access expired on Aug 15)
- 3rd Floor public area shape didn't match the PPTX - confirmed with team
- Some areas still handover to Macro, but overall IBC coverage improved a lot
- 3G was NOT tested

**Logs uploaded:**
- `20260825181411267_868551052493262_0_T1_Airport_1501_503_482_1stFloor_Public_Post_4G_FTPDL.gen.zip`
- `20260825182247370_868551052493262_0_T1_Airport_523470_992_982_1stFloor_Post_5G_FTPDL.gen.zip`
- `20260825184912016_868551052493262_0_T1_Airport_2ndFloor_Post_4G_FTPDL.gen.zip`
- `20260825185759380_868551052493262_0_T1_Airport_2ndFloor_Post_5G_FTPDL.gen.zip`
- `20260825192409030_868551052493262_0_T1_Airport_3rdFloor_Post_4G_FTPDL.gen.zip`
- `20260825193245166_868551052493262_0_T1_Airport_3rdFloor_Public_Post_5G_FTPDL.gen.zip`

**Deliverable:** `Airport T1 Indoor Walktest.pptx`

---

### 4.5 VIP Route Testing - 14 Routes (08-24)

**Why:** New 14 VIP routes added, need benchmark testing.

**Reference file:** `14 VIP Route-起终点站点明细.xlsx` (shared by wwx1428497)

**Test completed:** 08-24 (all 14 routes)

---

### 4.6 VIP Cluster 21 - Riverside Complaint DT (08-26)

**Why:** VIP complaint in Cluster 21, MBF requested immediate drive test.

**Route file:** `Riverside_VIP Route.kmz`

**Team:** Jehovah + Luo Yanyang + Bui Do Hoang Minh (local, ID: 50065881)

**Notes:**
- Need local MBF staff for VIP area access (interns cannot enter)
- Phan Tuan Anh handles access coordination with MBF

---

### 4.7 VIP Residential Area Complaint Reports (08-27 to 08-28)

**Handled by:** Su Xiaobo

| Version | Date | Status |
|---------|------|--------|
| V1.0 | 08-27 | Initial version |
| V2.0 | 08-27 | Updated version |
| V3.0 | 08-28 | Final version sent to customer |

**Key feedback from Hoang Minh Thao:**
- Report had poor 5G/4G coverage areas but no analysis or optimization suggestion
- Need to add analysis and optimization suggestions before sending to customer
- Su Xiaobo was asked to add coverage improvement solutions

**Root cause identified by Su Xiaobo:**
- Area severely affected by flower insertion (cross-coverage)
- POST DT optimization not yet carried out
- Coverage improvement requires overall relocation first
- Top priority: address transmission issues, urge customer to complete relocation

---

### 4.8 Benchmark Route Testing (08-29 to 08-31)

These are the benchmark routes tested in late August:

| Date | Route | Test Type | Notes |
|------|-------|-----------|-------|
| 08-29 | Route 3: MBF Office to Government Office | Benchmark | Pre-optimization baseline |
| 08-29 | Huawei Office VIP Area | 4G/5G FTPUL Retest | Post-test after optimization |
| 08-29 | FTPUL | FTPUL | Retest |
| 08-30 | MBF Office VIP Area | Viettel 5G FTPUL Retest | Missing area pre-test |
| 08-30 | Route 2: MPS Branch Office to MBF Office | Pre FTPDL Benchmark | |
| 08-30 | Route 4: MPS Branch Office to MPS HQ | Pre FTPDL Benchmark | |
| 08-30 | Route 5: MPS Branch Office to Government Office | Pre FTPDL Benchmark | |
| 08-30 | Route 6: MBF Office to Northern MBF Network Center | Pre FTLDL Benchmark | |
| 08-30 | Route 6: MBF Office to Northern MBF Network Center | Pre FTLUL Benchmark | |
| 08-31 | Route 7: MPS HQ to Government Office | Pre FTPDL | |
| 08-31 | Route 7: MPS HQ to Government Office | Pre FTPUL | |

---

### 4.9 Cross Feeder and Hardware Issue Tracking (Ongoing)

Phan Tuan Anh provides regular updates:

| Date | ITC Cross Feeder | MBF-S Cross Feeder | ITC Hardware | MBF-S Hardware |
|------|------------------|--------------------|--------------|----------------|
| 08-19 | 64 issued / 40 resolved / 14 pending | 71 / 58 / 13 | 87 / 36 / 51 | 42 / 20 / 22 |
| 08-27 | 64 / 40 / 14 | 75 / 66 / 9 | 93 / 36 / 57 | 51 / 27 / 24 |

**Pending items (08-27):**
- ITC Cross feeder: 14 pending
- MBF-S Cross feeder: 9 pending
- ITC Hardware: 57 pending
- MBF-S Hardware: 24 pending

---

## 5. SIM Cards for Testing

Current SIM card situation (as of 08-28):
- **VNPT:** 2 data SIM cards, 2 vice SIM cards
- **Viettel (VLT):** 2 data SIM cards, 2 vice SIM cards
- **Mobifone:** Available at stores

**How to get more:** Ask Ouyang Changjun to arrange purchase with local staff (Dang Hong Quan / Thai Huu Tuan Ha).

---

## 6. Report Template

**IMPORTANT:** Use the latest template for all reports.

**Template file:** `Standard Template for VIP T1 Assurance_20260810 V1.pptx`
**Reference:** `MBF RF Performance_20260808.pptx` (for statistics metrics)

**Rule:** Always align with the template content before outputting reports. Both front-line and GSC teams produce reports, so make sure you're using the latest version.

---

## 7. Standard DT Test Methodology

### 7.1 For Indoor Static Testing (CQT)

1. **Position:** At specific location (shop counter, desk, etc.)
2. **Test items:**
   - FTP DL (4G and 5G)
   - FTP UL (4G and 5G)
   - Idle mode (4G and 5G)
   - VUE Trace (if needed, record Trace ID)
3. **Multiple trials:** Do at least 2-3 rounds if results are inconsistent
4. **Screenshots:** Capture BasicInfo for LTE and NR

### 7.2 For Walk Test (CDT)

1. **Follow the route:** Use KMZ file or predefined route
2. **Test items:**
   - FTP DL (4G and 5G)
   - FTP UL (4G and 5G)
3. **Note public vs restricted areas:** Check access permission before testing
4. **Upload logs to Group Space immediately after testing**

### 7.3 For Speedtest (Ookla)

1. **Indoor + Outdoor:** Test both locations
2. **5G only:** Speedtest 5G only (not 4G)
3. **Screenshot:** Capture the result page showing speed, latency, etc.
4. **BasicInfo:** Also capture LTE/NR BasicInfo at the same location

### 7.4 Post-Test Process

1. Upload all log files to Group Space (organized by date > location)
2. Notify the team (especially Su Xiaobo for log analysis)
3. Track report writing progress
4. For VIP complaints: make sure report includes analysis and optimization suggestions

---

## 8. Outstanding Items / Pending Tasks

| Item | Status | Who | Notes |
|------|--------|-----|-------|
| CQT report retest | NOT done | l00935779 flagged | Installation quality issues need retest |
| VIP Residential coverage analysis | Needs optimization suggestions | Su Xiaobo | Hoang Minh Thao flagged missing analysis |
| Cross feeder issues | Ongoing | Phan Tuan Anh | 104 issues still pending |
| Shop 2 UL improvement | Low UL persists | Miao Peiqian | Interference check requested |

---

## 9. Key Contacts for Specific Tasks

| Task | Contact | How |
|------|---------|-----|
| VIP area access | Phan Tuan Anh | Send ID card photo |
| MBF coordination | Ouyang Changjun | WeLink |
| Report template | GSC team (Gu Xue) | WeLink |
| Log analysis | Su Xiaobo | Send logs to Group Space |
| RF interference check | Miao Peiqian | WeLink |
| Field testing partners | Nguyen Ha Phan / Phan Truong Khang | WeLink |
| SIM card purchase | Ouyang Changjun | He arranges with local staff |

---

## 10. Tools and Equipment

| Item | Detail |
|------|--------|
| DT Phone | Phone No: 841212953022 (MBF SIM) |
| Trace ID | 977718 (VUE Trace) |
| Test App | Ookla Speedtest, TEMS Investigation |
| Log format | .gen.zip |
| Group Space | DT Management > North > Benchmark DT Log |
| New test phones | Stored in drawer (key kept by previous handover) |

---

*End of Handover Document*
