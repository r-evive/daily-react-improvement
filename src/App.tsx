
import { ThemePicker } from './1_ThemePicker/ThemePicker'
import { ListExample } from './2_useHook/ListExample'
import { AccordionExample } from './3_accordion/AccordionExample'

function App() {

  return (
    <div className='space-y-8 mt-8'>
    <div><span className='text-3xl'>Daily improve!</span></div>    
    <div className='space-y-8'>
      <ThemePicker/>
      <ListExample/>
      <AccordionExample/>
    </div>
    </div>
  )
}

export default App
