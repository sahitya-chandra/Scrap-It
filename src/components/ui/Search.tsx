'use client'

// import { comments } from '@/actions/comments'
import { currentDataAtom, currentQueryAtom } from '@/store/atom/atom'
// import { useRouter } from 'next/navigation'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { ArrowBigUp, MessageCircle } from 'lucide-react';
import Link from 'next/link'

interface RedditData {
  id: string,
  subreddit: string,
  author: string,
  title: string,
  selftext: string,
  ups: number,
  num_comments: number,
  url: string
}

const Search = () => {

  // const router = useRouter()  
  const currentQuery = useRecoilValue(currentQueryAtom)
  const currentData = useRecoilValue(currentDataAtom)
  // console.log(currentData)

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
        <h1 className='text-white font-sans text-3xl tracking-tighter'>Showing top posts for:- <span className='pl-2 font-bold'>{currentQuery}</span></h1>
      </div>
      <div className='p-5 flex flex-col gap-7'>
        {children.map((item: {data: RedditData}) => (
          <div key={item.data.id} className='w-full h-full p-6 bg-indigo-600 text-white font-sans rounded-xl border-white border-solid border overflow-hidden shadow-md shadow-white'
            // onClick={async () => {
            //   await comments(item.data.id)
            //   router.push('/comments')
            // } }
          >
            <div className='bg-transparent flex flex-col flex-wrap'>
              <div className='bg-transparent pb-4 flex flex-col '>
                <p className='bg-transparent text-base font-bold pb-0'>r/{item.data.subreddit}</p>
                <p className='bg-transparent text-sm font-thin mt-0'>{item.data.author}</p>
              </div>
              <hr />
              <div className='bg-transparent text-3xl font-bold mt-3 mb-3'>{item.data.title}</div>
              <p className='bg-transparent leading-5 text-md pl-2'>{truncateDescription(item.data.selftext)}</p>
              <div className='max-w-fit max-h-fit mt-3 bg-transparent flex gap-5 items-center'>
                <div className='w-full lg:max-w-fit ml-2 px-2 py-1 flex gap-4 bg-indigo-400 rounded-md'>
                  <ArrowBigUp className='bg-transparent '/>
                  <span className='bg-transparent'>{item.data.ups}</span>
                  <span className='border-r'></span>
                  <MessageCircle className='bg-transparent ' size={22}/>
                  <span className='bg-transparent'>{item.data.num_comments}</span>
                </div>
                <Link href={item.data.url}>
                  <button className='px-2 py-1 bg-emerald-400 rounded-md hover:bg-emerald-500 cursor-pointer'>Comments</button>
                </Link>
              </div>
            </div> 
          </div>
        ))}
        </div>
    </div>
  )
}

export default Search