import React from 'react'
import { NavLink, useParams, useSearchParams, useLocation } from "react-router-dom";
import posts from '../Data/postData'
import './Post.css'

function Post(){
    const params = useParams() // params: URL 파라미터를 담고 있는 객체
    
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(params)

    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({ filter, keyword: '키워드' }) // ?filter=사용자 입력값
        }else{
            setSearchParams({}) // 쿼리스트링 초기화
        }
    }

    const applyActiveColor = ({ isActive }) => {
        return isActive ? {color: 'orangered', backgroundColor: 'yellow'} : {}
    } // 반환값 객체
        
    const QueryNavLink = ({ to, children, ...props}) => {
        const loaction = useLocation()
        return <NavLink to={to+loaction.search} {...props}>{children}</NavLink>
        // 기존의 to에다가 queryString 합치기 위해서
    }

    // 필터링된 목록에서 특정 블로그 선택하기
    
    const postsFiltered = posts
    .filter(post => {
        const filter = searchParams.get('filter') // 검색어 조회
        if(!filter) return true // 전체 목록 반환
        const title = post.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    
    const post = postsFiltered[params.postId]
    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/><input className='filter-post' placeholder='Search Post...'
            onChange={changeQueryString} value={searchParams.get('filter') || ''}/>

            {/** 특정 블로그 포스트 */}
            {post?
                <div className='post-container'>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <span>{post.created}</span>
                </div>:
                <h1>Post Page</h1>
            }

            {/* 블로그 포스트 전체목록 */}
            {postsFiltered
            .map((post, id)=> {
                return(
                    <QueryNavLink key={id} to={`/posts/${id}`} className='post-item'
                    style={applyActiveColor}>
                        {post.title}
                    </QueryNavLink>
                )
            })}
        </>
    )
}
export default Post