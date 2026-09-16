import { UserRole } from './generated/prisma/enums';
export type JwtUser = {
    sub: number;
    email: string;
    role: UserRole;
};
export type JwtPayload = {
    sub: number;
    email: string;
    role: UserRole;
};
