import { toast } from 'react-atom-toast'
import { Button, Card, Space } from 'antd'

const KEY = 'update'

export default function ClickUpdate() {
  const toastContent = (content: string) => {
    return (
      <div className={'flex items-center gap-x-2'}>
        {content}
        <button
          onClick={() => {
            toast.update(KEY, {
              content: toastContent(`update-${Math.random()}`),
            })
          }}
        >
          click to update
        </button>
      </div>
    )
  }

  return (
    <Card title={'Click Content to Update'}>
      <Space>
        <Button
          onClick={() => {
            toast.open({
              content: toastContent(`update-${Math.random()}`),
              pauseOnHover: true,
              key: KEY,
            })
          }}
        >
          open
        </Button>
      </Space>
    </Card>
  )
}
