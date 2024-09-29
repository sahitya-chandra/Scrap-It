'use client'

import React, { FormEvent } from 'react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { search } from '@/actions/search'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { currentDataAtom, currentQueryAtom } from '@/store/atom/atom'


const Landing = () => {

    const router = useRouter()
    const setCurrentQuery = useSetRecoilState(currentQueryAtom)
    const setCurrentData = useSetRecoilState(currentDataAtom)
 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCurrentQuery("")
        const formData = new FormData(e.currentTarget)
        
        const q = formData.get('q') || ''
        const res = await search(q);  //server action
        console.log("res: ",res);
        setCurrentQuery(JSON.parse(JSON.stringify(q)));
        setCurrentData(res.data)
        router.push('/search')
        
    }

  return (
    <div className='h-full px-14 pt-12 pb-44 flex flex-col justify-start items-center gap-24 overflow-hidden'>
        <div className='flex flex-col items-center'>
            <h1 className='p-3 text-white font-sans font-extrabold text-7xl'>A Reddit Scrapper...</h1>
            <h2 className='text-zinc-600 font-sans text-2xl'>Get relevent reddit posts according to your query</h2>
        </div>
        <form className='w-1/2 flex gap-3' onSubmit={handleSubmit}>
            <Input type='text' name='q' placeholder='Ask anything.....' className='text-white' required />
            <IconButton
                type='submit'
                className='cursor-pointer'
                colorScheme='blue'
                aria-label='Search database'
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search bg-transparent"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>}
            />
        </form>
    </div>
  )
}

export default Landing


// try {
//         const res = await axios.get(`http://localhost:3000/api/search?q=${que}`)
//         console.log(res.data)
//     } catch (err) {
//         console.log(err)
//     }