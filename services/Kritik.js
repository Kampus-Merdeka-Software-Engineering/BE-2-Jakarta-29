import "../model/kritik-model.js";

export const readKritik = async () => {
    return await Kritik.findAll({
        attributes: [
            'name',
            'kritik',
        ],
        limit: 8,
        raw: true,
    })
}

export const createKritik = async (name, kritik) =>{
    return await Kritik.create({
        name,
        kritik,
    })
}