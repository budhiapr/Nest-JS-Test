const { Prisma } = require("@prisma/client")
const bcrypt = require("bcryptjs");

const users = [
    {
        username:"admin",
        name:"Administrator",
        password:bcrypt.hashSync("12345678", 10),
        roleId:1
    },
    {
        username:"andi_setiawan",
        name:"Andi Setiawan",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"budi_santoso",
        name:"Budi Santoso",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"indah_permata",
        name:"Indah Permata",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"citra_lestari",
        name:"Citra Lestari",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"Dedi Pratama",
        name:"dedi_pratama",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"eko_wibowo",
        name:"Eko Wibowo",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"fajar_rahman",
        name:"Fajar Rahman",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"gina_ayu",
        name:"Gina Ayu",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"hadi_kusuma",
        name:"Hadi Kusuma",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    },
    {
        username:"joko_susilo",
        name:"Joko Susilo",
        password:bcrypt.hashSync("12345678", 10),
        roleId:2
    }
];

const roles = [
    {
        id:1,
        name:"Admin"
    },
    {
        id:2,
        name:"User"
    }
];

const scores = [
    {
        "id": 1,
        "score": 75,
        "userId": 3
    },
    {
        "id": 2,
        "score": 82,
        "userId": 5
    },
    {
        "id": 3,
        "score": 90,
        "userId": 7
    },
    {
        "id": 4,
        "score": 88,
        "userId": 2
    },
    {
        "id": 5,
        "score": 67,
        "userId": 6
    },
    {
        "id": 6,
        "score": 74,
        "userId": 11
    },
    {
        "id": 7,
        "score": 85,
        "userId": 9
    },
    {
        "id": 8,
        "score": 78,
        "userId": 8
    },
    {
        "id": 9,
        "score": 92,
        "userId": 10
    },
    {
        "id": 10,
        "score": 81,
        "userId": 4
    },
    {
        "id": 11,
        "score": 76,
        "userId": 2
    },
    {
        "id": 12,
        "score": 69,
        "userId": 3
    },
    {
        "id": 13,
        "score": 95,
        "userId": 7
    },
    {
        "id": 14,
        "score": 70,
        "userId": 5
    },
    {
        "id": 15,
        "score": 87,
        "userId": 8
    },
    {
        "id": 16,
        "score": 73,
        "userId": 9
    },
    {
        "id": 17,
        "score": 68,
        "userId": 10
    },
    {
        "id": 18,
        "score": 94,
        "userId": 6
    },
    {
        "id": 19,
        "score": 86,
        "userId": 4
    },
    {
        "id": 20,
        "score": 77,
        "userId": 2
    }
];

module.exports={
    users,
    roles,
    scores,
}