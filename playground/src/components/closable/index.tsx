import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Closable() {
  const key = 'closable'
  return (
    <Card title={'Closable'}>
      <div className={'flex gap-2'}>
        <Button
          onClick={() => {
            toast.open({
              content: `Hello, world! ${Math.random()}`,
              duration: 0,
              key,
            })
          }}
        >
          open
        </Button>
        <Button
          type={'default'}
          onClick={() => {
            toast.close(key)
          }}
        >
          close
        </Button>
      </div>
    </Card>
  )
}
