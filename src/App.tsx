import React, {useEffect, useState} from 'react';
import './App.css';
import { getImagesList } from './service/imageservice';
import Loader from './Loader';
import Gallery from './Gallery';
import ImageModal from './ImageModal';
// import {Gallery} from 'react-grid-gallery';

function App() {
  const [imageList, setImageList] = useState([] as any[])
  const [isLoading, setLoading] = useState(true);
  const [selectedImage, setSelected] = useState(null as any);
  const handleClick = (e: any) => {
    setSelected(e)
  }
  useEffect(() => {
      getImagesList().then((images: any[])=>{
        setImageList(images)
        setLoading(false);
      });
  }, [])

  const handleNav = (e: any) =>  {
    switch (e){
      case 'i':
        setSelected(imageList.find(x => x.id = e.id+1))
        break;
      case 'd':
        setSelected(imageList.find(x => x.id = e.id+1))
      break;
      case 'c':
        setSelected(null)
      break;
    }
  }
  return (
    <div className="App">
      {
        isLoading 
          ? <Loader />
          : <>
              <div >
                  <Gallery images = {imageList} onClick={(e : any) => {setSelected(e)}}/>
                </div>
              {selectedImage && <ImageModal images = {imageList} selectedImage = {selectedImage} handleNavigation = {handleNav}/>}
          </>
      }   
    </div>
  );
}

export default App;
