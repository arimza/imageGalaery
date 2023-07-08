import { useState } from "react";

interface galleryProps {
    images: any[],
    onClick: any
}
const Gallery = (props: galleryProps) => {
    const [pagination, setPagination] = useState({pageNumber : 1, pageSize: 40, offset: 0}as any)
    const handleClick = (e: any) => {
        props.onClick(e);
    }
    const images = props.images.filter((x,i) => (pagination.pageNumber * pagination.offset) < i && i <= (pagination.pageNumber + pagination.offset)*pagination.pageSize).map((x: any, i: number) => {
        console.log(x.download_url)
        return <div onClick={(e) => {handleClick({...x, index: i})}} style={{width: '50px', height: '100px', display: 'flex', margin: '5px'}}><img className = 'imageContainer' src={x.download_url} width={x.width} height={x.height} alt={x.alt}  /></div>
    })
    return <>
        {  images }
        <br/>
        <br/>
        <div>
            <span onClick={()=> setPagination({pageNumber : 1, pageSize: 10, offset: 0})}>Previous</span>
            <span>{pagination.pageNumber}</span>
            <span onClick={()=> setPagination({...pagination, pageNumber : pagination.pageNumber + 1, offset: pagination.pageNumber})}>Next</span>
        </div>  
    </>
}
export default Gallery