// Edit these to change what the dashboard shows.

export const RACE_DAY_LABEL = "Day 7 :";
export const RACE_DAY_VALUE = "--------";

// Top tabs. cx/cy = center, w/h = size, r = tilt in degrees (all in the 1920x1080 design grid).
export const TOP_TABS = [
  { label: "Overview", href: "/overview", match: "/overview", cx: 915, cy: 52, w: 258, h: 60, r: -1.35 },
  { label: "Day 1", href: "/day/1/data", match: "/day/1", cx: 1153, cy: 51.5, w: 146, h: 47, r: 3 },
  { label: "Day 2", href: "/day/2/data", match: "/day/2", cx: 1317, cy: 58.5, w: 138, h: 53, r: -4.2 },
  { label: "Day 3", href: "/day/3/data", match: "/day/3", cx: 1480, cy: 57, w: 146, h: 48, r: 3 },
  { label: "Day 4", href: "/day/4/data", match: "/day/4", cx: 1652.5, cy: 60.5, w: 139, h: 53, r: -4.1 },
  { label: "Day 5", href: "/day/5/data", match: "/day/5", cx: 1815.5, cy: 51.5, w: 145, h: 47, r: 3 },
];

// The six cards on the Overview page. Leave title empty for a blank card.
export const OVERVIEW_LEFT = ["Battery in trailer charge", "Power of the SP", ""];
export const OVERVIEW_RIGHT = ["Car speed", "Battery charge in car", "Motor Data"];

// Day sub-tabs.
export const DAY_SUBTABS = [
  { label: "DATA", slug: "data" },
  { label: "Strategy", slug: "strategy" },
  { label: "Reports", slug: "reports" },
];
