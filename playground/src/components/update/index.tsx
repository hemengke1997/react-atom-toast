import { useState } from 'react'
import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

function generateRandomArray() {
  const length = Math.floor(Math.random() * 5) + 1
  return Array.from({ length }, () => Math.random()).map((item) => {
    return (
      <div className={'flex flex-col gap-2'}>
        <div key={item}>{item}</div>
      </div>
    )
  })
}

export default function Update() {
  const [keys, setKeys] = useState<string[]>([])

  return (
    <Card title={'更新toast'}>
      <Button
        onClick={() => {
          const k = `update-${Math.random()}`
          toast.open({
            content: generateRandomArray(),
            key: k,
            onClosed: () => {
              setKeys((prev) => prev.filter((key) => key !== k))
            },
          })
          setKeys((prev) => [...prev, k])
        }}
      >
        open
      </Button>
      <Button
        type={'default'}
        onClick={() => {
          toast.update(keys[keys.length - 1], {
            content: generateRandomArray(),
          })
        }}
      >
        update
      </Button>
    </Card>
  )
}
