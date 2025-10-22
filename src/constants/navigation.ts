export const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "tech", label: "TECHNOLOGIES" },
  { id: "contact", label: "CONTACT" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];
