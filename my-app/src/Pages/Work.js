import React from "react";
import CardBox from "../Component/CardBox";
import imgDatas from '../Data/imgData'
import { useParams, useSearchParams } from "react-router-dom";
import './Work.css'
import Input from "../Component/Input";

function Work(){

    const [searchParams, setSearchParams] = useSearchParams()

    const changeQueryString = (e) => {
        const filter = e.target.value
        filter ? setSearchParams({ filter }) : setSearchParams({})
    }

    const filteredDatas = imgDatas
    .filter((data)=>{
            let filter = searchParams.get('filter')
            if(!filter) return true
            return data.name.toLowerCase().includes(filter.toLowerCase())
    })
    
    return(
        <>
            <Input value={searchParams.get('filter') || ''} handleChange={changeQueryString} placeholder={'상품명을 입력하세요'}>🏸</Input>
            <CardBox cards={filteredDatas}/>
        </>
    )
}
export default Work