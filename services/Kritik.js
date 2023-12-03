import "../model/kritik-model.js";

export const readKritik = async () => {
    return await Kritik.findAll();
}

export const createKritik = async (name, kritik) =>{
    return await Kritik.create({
        name,
        kritik,
    })
}