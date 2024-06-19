const { PrismaClient } = require('@prisma/client');

const {
    users,
    roles,
    scores
} = require('./data');

const prisma = new PrismaClient();

const load = async()=>{
    try {
        await prisma.user.deleteMany();
        await prisma.user.createMany({
            data:users
        });

        await prisma.role.deleteMany();
        await prisma.role.createMany({
            data:roles,
        });

        await prisma.score.deleteMany();
        await prisma.score.createMany({
            data:scores,
        });
    } catch (error) {
        console.error(error);
    }finally{
        await prisma.$disconnect();
    }
};

load();