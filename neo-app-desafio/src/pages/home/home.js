import Card from '../../components/card/card'
import ChangePage from '../../components/changePage/ChangePage';
import { getComics } from '../../hooks/useGetComics'
import { Title, Section, DivMain } from './style'
import md5 from 'md5';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/pageSlice';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';

export default  function Home(){
    const {offset} = useSelector(selectPage)

    var publickey = '24c9d051822feb3ac57093dbbf67d7de';
    var privatekey = '28a5d083127ec437d90bfc81e2ab14442a4a61d0';
    var ts = new Date().getTime();
    var stringToHash = ts + privatekey + publickey;
    var hash = md5(stringToHash);
    var baseUrl = 'http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&orderBy=title';
    var limit = 10;
    var url = baseUrl + "&limit=" + limit + "&offset=" + offset + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

    const {data: comics, isLoading: loading} = useQuery(['Comics', offset], () => getComics(url));

    if(!loading){
        return (
            <DivMain>
                <Title>Marvel Comics</Title>
                <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light" />
                <Section>
                    {comics?.map((comic)=>
                        <Card comic={comic} price={comics.map(comic => comic.prices).map(item => item[0].price)[0]} title={comic.title} imgUrl={comic.images[0].path + "." + comic.images[0].extension} />
                    )}
                </Section>
                <ChangePage/>
            </DivMain>
        )
    }
}