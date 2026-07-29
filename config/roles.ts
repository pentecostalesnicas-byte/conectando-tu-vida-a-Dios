export const Roles = {
  SUPER_ADMIN: "super_admin",
  PASTOR_PRINCIPAL: "pastor_principal",
  PASTOR: "pastor",
  EDITOR: "editor",
  COLABORADOR: "colaborador",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];