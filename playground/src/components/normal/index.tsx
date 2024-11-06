import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Normal() {
  return (
    <Card title={'Default Toast'}>
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
