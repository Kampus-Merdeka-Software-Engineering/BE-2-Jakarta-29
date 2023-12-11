import fs from 'fs';
import News from '../model/news-model.js';


// Baca file json
const jsonData = fs.readFileSync('news.json', 'utf8')
const newsData = JSON.parse(jsonData)

// Sync model with Database
export const importData = async () => {
    await News.sync({ force: true })

    //Simpan data ke database
    await News.bulkCreate(newsData)

    console.log('Data berhasil disimpan ke database')
    process.exit()
}

importData()

