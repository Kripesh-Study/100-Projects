import bcrypt from 'bcrypt'


async function bcryptHash(password){
    const pwd = await bcrypt.hash(password, 10);
    return pwd;
}



export default bcryptHash;