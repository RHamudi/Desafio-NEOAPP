import Card from '../../components/card/card'
import ChangePage from '../../components/changePage/ChangePage';
import { getComics } from '../../hooks/useGetComics'
import { Title, Section, DivMain } from './style'
import md5 from 'md5';
import { useSelector } from 'react-redux';
import { selectPage } from '../../redux/pageSlice';
import { useQuery } from 'react-query';
import { useFetchApi } from '../../hooks/useFetchApi';

export default  function Home(){
    const {offset} = useSelector(selectPage)

    const url = useFetchApi(offset);

    const {data: comics, isLoading: loading} = useQuery(['Comics', offset], () => getComics(url));

    if(!loading){
        return (
            <DivMain>
                <Title>Marvel Comics</Title>
                
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