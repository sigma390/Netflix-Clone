import { PrismaClient } from "@prisma/client";



// we saving prisma client in a global file 
// hot reload avoid trick
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV==='production')global.prismadb = client;

export default client;
    
