import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Normal() {
  return (
    <Card title={'默认toast'}>
      <Button
        onClick={() => {
          toast.open({
            content: `Hello, world! ${Math.random()}`,
          })
        }}
      >
        open
      </Button>
    </Card>
  )
}
