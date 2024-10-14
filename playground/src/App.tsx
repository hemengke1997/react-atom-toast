import { toast } from 'react-atom-toast'
import Classname from './components/classname'
import Closable from './components/closable'
import Normal from './components/normal'
import Single from './components/single'

toast.setDefaultOptions({
  className: 'bg-cyan-400 p-2 rounded',
})

function App() {
  return (
    <div>
      <h1 className={'m-2 text-3xl font-bold'}>react-atom-toast</h1>

      <div className={'flex flex-wrap gap-4'}>
        <Normal />
        <Single />
        <Classname />
        <Closable />
      </div>
    </div>
  )
}

export default App
