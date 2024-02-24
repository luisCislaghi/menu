export const titleCase = (s: string) =>
  s
    .toLowerCase()
    .replace(/^_*(.)|_+(.)/g, (s, c, d) =>
      c ? c.toUpperCase() : " " + d.toUpperCase()
    );
