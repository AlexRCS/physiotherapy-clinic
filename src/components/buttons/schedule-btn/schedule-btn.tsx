import { useState } from 'react'
import './schedule-btn.css'
import SmsForm from '../../modals/sms-modal'

function ScheduleBtn() {

  const [open, setOpen] = useState<boolean>(false)


  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <button className='schedule-btn' onClick={handleClick} >Agendar <i className="fa-brands fa-whatsapp"></i></button >
      {open && <SmsForm setOpen={setOpen} />}
    </>

  )
}

export default ScheduleBtn
