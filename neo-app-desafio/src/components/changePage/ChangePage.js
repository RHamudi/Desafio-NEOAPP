import {MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { prevPage, proxPage, selectPage } from "../../redux/pageSlice";
import { Icons, Section } from "./style";

export default function ChangePage(){
    const dispatch = useDispatch();
    const {page} = useSelector(selectPage);
    
    function pageUp(){
        dispatch(proxPage())
    }
    
    function pageDown()
    {
        dispatch(prevPage())
    }

    return (
        <Section>
            <Icons onClick={pageDown}>
                <MdKeyboardDoubleArrowLeft />
            </Icons>
            <p>{page}</p>
            <Icons onClick={pageUp}>
                <MdKeyboardDoubleArrowRight  />
            </Icons>
      </Section>
    )
}