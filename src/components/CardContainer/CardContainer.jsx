import React, { useState } from 'react'
import Card from './Card'
import { firstSetOfCards, secondSetOfCards } from './CardContent'
import { AiOutlineRight } from "react-icons/ai"
import { AiOutlineLeft } from "react-icons/ai"

const CardContainer = () => {
  const [isChanged, setIsChanged] = useState(false)
  const Card1 = firstSetOfCards.map((art) => {
    return <Card key={art.id} img={art.img} header={art.header} desc={art.desc} />
  })
  const Card2 = secondSetOfCards.map((art) => {
    return <Card key={art.id} img={art.img} header={art.header} desc={art.desc} />
  })

  return (
    <section className='w-10/12 mx-auto'>
      <h2 className='font-source text-4xl lg:text-5xl font-semibold tracking-wide'>Latest Articles</h2>
      <div className={`${!isChanged ? 'flex' : 'hidden'} flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0`}>
        {Card1}
      </div>
      <div className={`${isChanged ? 'flex' : 'hidden'} flex-col lg:flex-row flex-wrap justify-between mt-20`}>
        {Card2}
      </div>
      <div className='flex items-center gap-2 my-20 justify-center'>
        <AiOutlineLeft className={`border ${isChanged ? "text-blueish border-blueish" : "text-gray-400 border-gray-400"} h-6 w-6 rounded-md cursor-pointer`} onClick={() => setIsChanged(false)} />
        <span>{isChanged ? "2/2" : "1/2"}</span>
        <AiOutlineRight className={`border ${!isChanged ? "text-blueish border-blueish" : "text-gray-400 border-gray-400"} h-6 w-6 border-black rounded-md cursor-pointer`} onClick={() => setIsChanged(true)} />
      </div>
    </section>
  )
}

export default CardContainer
