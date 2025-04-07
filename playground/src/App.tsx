import { toast } from 'react-atom-toast'
import Classname from './components/classname'
import ClickUpdate from './components/click-update'
import Closable from './components/closable'
import Normal from './components/normal'
import Single from './components/single'
import Update from './components/update'

toast.setDefaultOptions({
  className: 'bg-white bg-opacity-95 p-2 rounded text-black',
})

function App() {
  return (
    <div className={'flex min-h-screen flex-col items-center justify-center'}>
      <h1 className={'mb-8 text-3xl font-bold'}>
        <a href='https://github.com/hemengke1997/react-atom-toast' target={'_blank'}>
          react-atom-toast
        </a>
      </h1>

      <div className={'flex flex-wrap gap-4'}>
        <Normal />
        <Single />
        <Classname />
        <Closable />
        <Update />
        <ClickUpdate />
      </div>
    </div>
  )
}

export default App
