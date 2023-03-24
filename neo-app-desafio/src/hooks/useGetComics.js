import axios from "axios";
import { useRequest } from "./useRequest";

export async function getComics(url){
    const res = (
        await axios({
            method: 'get',
            url: url,

        })
    ).data

    const filter = res.data.results;
    
    return filter.map(item => {
        return {
            images: item.images,
            prices: item.prices,
            title: item.title,
            description: item.description,
            id: item.id
        }
    }).filter((elem)=> elem !== undefined && elem.images.length > 0)
}
