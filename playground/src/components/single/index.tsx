import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Single() {
  return (
    <Card title={'单个toast'}>
      <Button
        onClick={() => {
          toast.open({
            content: `Hello, world! ${Math.random()}`,
            maxCount: 1,
            transition: {
              name: 'fade',
              duration: 1000,
            },
          })
        }}
      >
        open
      </Button>
    </Card>
  )
}
