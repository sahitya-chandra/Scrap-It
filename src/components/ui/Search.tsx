'use client'

import { comments } from '@/actions/comments'
import { currentDataAtom, currentQueryAtom } from '@/store/atom/atom'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useRecoilValue } from 'recoil'


const Search = () => {

  const router = useRouter()  
  const currentQuery = useRecoilValue(currentQueryAtom)
  const currentData = useRecoilValue(currentDataAtom)
  console.log(currentData)

  // const {children} = currentData
  const children = currentData?.children || []
  console.log(children)

  const truncateDescription = (description: string) => {
    const words = description.split(' ');
    return words.length > 10 ? words.slice(0, 80).join(' ') + '......' : description;
  };

  return (
    <div className='h-full'>
      <div className='py-4 px-5'>
        <h1 className='text-white font-sans text-3xl tracking-tighter'>Showing post result for:- <span className='pl-2 font-bold'>{currentQuery}</span></h1>
      </div>
      <div className='p-5 flex flex-col gap-7'>
        {children.map((item: any) => (
          <div key={item.data.id} className='w-full h-full p-6 bg-orange-500 text-white hover:text-black font-sans rounded-xl border-white border-solid border overflow-hidden shadow-md shadow-white hover:bg-orange-400 cursor-pointer'
            onClick={async () => {
              await comments(item.data.id)
              router.push('/comments')
            } }
          >
            <div className='bg-transparent flex flex-col flex-wrap'>
              <div className='bg-transparent pb-4 flex flex-col '>
                <p className='bg-transparent text-base font-bold pb-0'>r/{item.data.subreddit}</p>
                <p className='bg-transparent text-sm font-thin mt-0'>{item.data.author}</p>
              </div>
              <hr />
              <div className='bg-transparent text-3xl font-bold mt-3 mb-3'>{item.data.title}</div>
              <p className='bg-transparent leading-5 text-md pl-2'>{truncateDescription(item.data.selftext)}</p>
            </div> 
          </div>
        ))}
        </div>
    </div>
  )
}

export default Search