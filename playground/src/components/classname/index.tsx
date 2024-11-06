import { toast } from 'react-atom-toast'
import { Button, Card } from 'antd'

export default function Classname() {
  return (
    <Card title={'Dynamic Style'}>
      <Button
        onClick={() => {
          toast.open({
            content: `Hello, world! ${Math.random()}`,
            className: 'bg-red-400',
          })
        }}
      >
        open
      </Button>
    </Card>
  )
}
