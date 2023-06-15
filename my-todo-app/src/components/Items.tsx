import React, { FC } from 'react'

type ItemsProps = {
  memos: string[];
}

export const Items: FC<ItemsProps> = (memos) => {
  console.log(memos)
  return (
    <div>
      {memos.map(( memo:string, index:number ) => {
        <li key = {index}>{memo}</li>
      })}
    </div>
  )
}
