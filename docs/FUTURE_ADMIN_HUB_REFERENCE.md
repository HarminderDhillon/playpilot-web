# Future Admin Hub & Community Features — Saved April 2026

These features were removed from the live site marketing as they are still in development. Use as reference for building the admin hub, leadership dashboard, and community features.

---

## Community Features (from Features Page)

**Section Title:** Educator Community

**Description:** Group chats with your room team, schema-spotting challenges, peer provocations, and emotional support circles. Because great educators don't work in isolation.

**Aspirational Community Features:**
- Group chats with room teams
- Schema-spotting challenges
- Peer provocations
- Emotional support circles

**Design:** Accent teal (`bg-accent-teal/10 border-accent-teal/30`, dot: `bg-accent-teal`)

**Source:** `src/app/features/page.tsx` — "Educator Community" section

---

## Web Dashboard (from Features Page)

**Section Title:** Web Dashboard

**Description:** View all your observations, portfolios, and insights on a bigger screen. Supervisors and educational leaders can review documentation, track team progress, and support quality improvement. Coming soon.

**Design:** Primary color (`bg-primary/5 border-primary/20`, dot: `bg-primary`)

**Source:** `src/app/features/page.tsx` — "Web Dashboard" section

---

## Leadership Console (from Landing Page)

**Section Title:** The Leadership Console(TM)

**Tagline:** A real-time view of your program's learning ecosystem.

**Callout:** "PlayPilot doesn't just document learning. It reveals it."

### Console Features:
- Documentation consistency across educators
- Emerging schemas across classrooms
- Domain coverage balance
- Milestone trends
- Family engagement metrics
- Educator reflection frequency
- Compliance readiness indicators

### Mock Dashboard Metrics:
- Doc. Frequency: 94%
- Compliance: 87%
- Reflection Rate: 72%
- Family Engagement: 61%

### Schema Distribution (sample data):
- Transporting: 28%
- Trajectory: 22%
- Enclosing: 18%
- Rotation: 15%
- Connecting: 10%
- Other: 7%

### Compliance Readiness Indicators:
- Doc. Frequency: green
- Portfolio Complete: green
- Missing Reports: yellow

**Source:** `src/components/landing/LeadershipConsole.tsx`

---

## Leadership Hub (from Demo Walkthrough)

**Step Title:** Leadership with Signal, Not Noise

**Subtitle:** The Leadership Hub

**Description:** Seven sections — Overview, Classrooms, Educators, Children, Insights, Compliance, Community. Signal-first language (Strong, Growing, Steady, Quiet) replaces raw metrics with human understanding.

### Leadership Hub Sections:
1. Overview
2. Classrooms
3. Educators
4. Children
5. Insights
6. Compliance
7. Community

### Signal Language System:
- **Strong** — color: `#5CCB8A` (green)
- **Growing** — color: `#3FA7F5` (blue)
- **Steady** — color: `#FFC83D` (yellow)
- **Quiet** — (implied, not shown in mock data)

### Program Pulse Cards (mock data):
| Metric               | Value | Signal  |
|-----------------------|-------|---------|
| Active Classrooms     | 3     | Strong  |
| Moments Captured      | 47    | Strong  |
| Educator Engagement   | 4/4   | Growing |
| Program Climate       | —     | Strong  |

### Classroom Snapshot Cards (mock data):
| Classroom    | Children | Moments | Educators | Signal  |
|--------------|----------|---------|-----------|---------|
| Kids Club    | 4        | 8       | S, P      | Strong  |
| Rainbow Room | 4        | 4       | J         | Growing |

### Compliance Section (mock data):
| Item                   | Value | Signal  |
|------------------------|-------|---------|
| Documentation Coverage | 75%   | Steady  |
| Consent Completion     | 6/8   | Growing |
| Program Readiness      | —     | Growing |

**Source:** `src/components/demo/DemoWalkthrough.tsx` (step config) and `src/components/demo/DemoMockups.tsx` (LeaderConsoleMockup)

---

## Classroom Space (from Demo Walkthrough)

**Step Title:** One Classroom, Five Lenses

**Subtitle:** The Classroom Space

**Description:** Moments, Journey, Community, Culture, and Insights — five sections give educators, families, and consultants different views of the same classroom, each tailored to their role.

### Five Classroom Sections:
1. Moments
2. Journey
3. Community
4. Culture
5. Insights

**Source:** `src/components/demo/DemoMockups.tsx` (DashboardMockup)
