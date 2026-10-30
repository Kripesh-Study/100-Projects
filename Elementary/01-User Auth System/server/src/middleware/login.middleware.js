import bcrypt from 'bcrypt'




async function auth(password,hash) {
    const dehash = await bcrypt.compare(password,hash)
    return dehash;
}


export default auth;