import { createSlice } from '@reduxjs/toolkit'

let gnb = createSlice({
  name: 'gnb',
  initialState: [
    {
      name: '투데이',
      cName: 'link_today'
    },
    {
      name: '차트',
      cName: 'link_chart'
    },
    {
      name: '최신앨범',
      cName: 'link_newalbum'
    },
    {
      name: 'DJ 스테이션',
      cName: 'link_dj'
    },
    {
      name: 'VIBE MAG',
      cName: 'link_mag'
    },
    {
      name: '이달의 노래',
      cName: 'link_monthly'
    },
  ]
})

export default gnb