import React, { FC } from 'react'

type ItemsProps = {
  memos: string[];
}

export const Items: FC<ItemsProps> = (memos) => {
  console.log(memos)
  return (
    <ul>
      
    </ul>
  )
}
