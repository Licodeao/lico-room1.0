import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './style'
import PicturePreviewer from '@/baseUI/picture-previewer'

const DetailPicture = memo((props) => {
  const { pictureUrls } = props
  const [showBtn, setShowBtn] = useState(false)

  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className='left'>
          <div className='item' onClick={e => setShowBtn(true)}>
            <img src={pictureUrls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            pictureUrls?.slice(1, 5).map((item) => {
              return (
                <div className='item' key={item} onClick={e => setShowBtn(true)}>
                  <img src={item} alt=""/>
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBtn(true)}>查看照片</div>
      { showBtn && (
        <PicturePreviewer 
          pictureUrls={pictureUrls}
          closeClick={e => setShowBtn(false)}
        />)
      }
    </DetailPictureWrapper>
  )
})

export default DetailPicture