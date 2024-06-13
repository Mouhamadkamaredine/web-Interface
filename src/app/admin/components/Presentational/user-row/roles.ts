import {Role} from "../../../models/role";

export let roles: Role[]
export let rolesNoAdmin: Role[]

roles = [
  { id: 4, rank: 'Operator' },
  { id: 1, rank: 'Admin' },
  { id: 2, rank: 'Manager' },
  { id: 3, rank: 'Supervisor' },
  { id: 6, rank: 'Technician' },
  { id: 5, rank: 'Technician Manager' }
];

rolesNoAdmin = [
  { id: 4, rank: 'Operator' },
  { id: 2, rank: 'Manager' },
  { id: 3, rank: 'Supervisor' },
  { id: 6, rank: 'Technician' },
  { id: 5, rank: 'Technician Manager' }
];

export enum  enRole {
  Operator = "Operator",
  Admin = "Admin",
  Manager = "Manager",
  Supervisor = "Supervisor",
  Technician = "Technician",
  TechnicianManager = "Technician Manager",
}
