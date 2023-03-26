import md5 from "md5";

export function useFetchApi(offset, id){
    var publickey = '24c9d051822feb3ac57093dbbf67d7de';
    var privatekey = '28a5d083127ec437d90bfc81e2ab14442a4a61d0';
    var hash = md5(new Date().getTime() + privatekey + publickey);
    var url;
    if(offset != null){
        url = "https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&orderBy=title" + "&limit=" + 20 + "&offset=" + offset + '&ts=' + new Date().getTime() + '&apikey=' + publickey + '&hash=' + hash;
    } else if(offset === null) {
        url = `https://gateway.marvel.com/v1/public/comics/${id}?&ts=${new Date().getTime()}&apikey=${publickey}&hash=${hash}`
    }

    return url
}