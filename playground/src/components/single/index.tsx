import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Single() {
  return (
    <Card title={'单个toast'}>
      <Button
        onClick={() => {
          toast.open({
            content: `Hello, world! ${Math.random()}`,
            key: 'single',
            maxCount: 1,
          })
        }}
      >
        open
      </Button>
    </Card>
  )
}
