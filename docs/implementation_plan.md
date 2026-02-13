# Claude Skills Platform - Rebuild Plan (Japanese Business Edition)

## Goal
Completely rebuild the UI/UX to match the "Trustworthy & Clean" standard of top-tier Japanese SaaS (e.g., SmartHR, Note, Kintone), while maintaining the "Richness" of global prompt libraries.

## Design Concept: "Clean Trust" (信頼と洗練)
- **Theme**: Light Mode base (White/Off-white) with soft shadows and "Trust Blue" accents. Avoid "Dark Cyber" to reduce the "Hacker tool" intimidation factor.
- **Layout**: 
    - **Bento Grid**: Structured, organized skill cards.
    - **Sidebar Navigation**: For easy access to intuitive categories.
    - **Ma (Whitespace)**: Generous spacing to improve readability.
- **Typography**: Optimized for Japanese (Noto Sans JP).

## Key Improvements

### 1. Richer Skill Cards
Move beyond simple icons. Cards will include:
- **Visuals**: Colored badges/tags (e.g., "Writing", "Efficiency").
- **Metrics**: "Difficulty" (Easy/Advanced), "Estimated Time Saved".
- **Preview**: A snippet of the prompt to show "what's inside".
- **Author**: "By Antigravity" etc. to build trust.

### 2. Deep Detail Pages
Instead of just a copy button, each skill gets a dedicated page (`/skills/[id]`) featuring:
- **Full Prompt Preview**: Scrollable text area.
- **Usage Guide**: Specific instructions for *that* skill.
- **Why use this?**: Business benefit explanation.

### 3. Navigation & Discovery
- **Search Bar**: Prominent at the top.
- **Category Filters**: "Business", "Creative", "Engineering".
- **Sort**: "Recommended", "Newest".

## Implementation Steps

### Phase 1: Foundation Overhaul
- [x] **Global CSS**: Switch to Light Mode defaults. Font setup.
- [x] **Skill type expansion**: Add tags, timeSaved, difficulty, longDescription.

### Phase 2: Core Components
- [x] **SkillCard V2**: Redesign for "Richness".
- [x] **Skill Detail Page**: Implement dynamic routing `src/app/skills/[id]/page.tsx`.
- [ ] **Filter/Search UI**: Add interactivity (currently visual-only).

### Phase 3: Content Refinement
- [x] **Japanese Copywriting**: Rewrite all English text to natural, polite Japanese.
- [x] **Populate Data**: Add more specific tagging and metadata to existing skills.
- [ ] **Build error resolution**: Fix persistent Turbopack parsing issue.

## Verification
- **Visual Check**: Does it look like a Japanese SaaS product?
- **Usability**: Can a non-engineer understand "what to do" in 5 seconds?
