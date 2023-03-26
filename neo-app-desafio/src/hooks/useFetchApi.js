import md5 from "md5";

export function useFetchApi(offset){
    var publickey = '24c9d051822feb3ac57093dbbf67d7de';
    var privatekey = '28a5d083127ec437d90bfc81e2ab14442a4a61d0';
    var ts = new Date().getTime();
    var stringToHash = ts + privatekey + publickey;
    var hash = md5(stringToHash);
    var baseUrl = 'http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&orderBy=title';
    var limit = 20;
    var url = baseUrl + "&limit=" + limit + "&offset=" + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

    return url
}