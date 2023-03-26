import axios from "axios";

export async function getComics(url){
    const res = (
        await axios.get(url)
    ).data

    
    const filter = res.data.results.map(item => {
        return {
            images: item.images,
            prices: item.prices,
            title: item.title,
            description: item.description,
            id: item.id
        }
    }).filter((elem)=> elem !== undefined && elem.images.length > 0);
    const quantidadePremium = Math.round(filter.length * 0.1);

    const indicesPremium = [];
    
    while (indicesPremium.length < quantidadePremium) {
        const indice = Math.floor(Math.random() * filter.length);
        if (indicesPremium.indexOf(indice) === -1) {
          indicesPremium.push(indice);
        }
    }

    filter.forEach((objeto, indice) => {
        if (indicesPremium.includes(indice)) {
          objeto.premium = true;
        }
      });


    return filter
}
