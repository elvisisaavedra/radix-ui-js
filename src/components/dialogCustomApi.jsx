import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from './ui/dialog'

const DialogCustomAPI = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleOpenChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <Dialog open={isChecked} onOpenChange={handleOpenChange}>
        <DialogTrigger>
          Dialog Custom API
        </DialogTrigger>
        <DialogContent title={'Modal title'} onEscapeKeyDown={(event) => event.preventDefault()}>
          <div className="modal-body">
            <fieldset>
              <label htmlFor="name">Name</label>
              <input id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset>
              <label htmlFor="username">Username</label>
              <input id="username" defaultValue="@peduarte" />
            </fieldset>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button type="button" className="btn btn-secondary">
                Close
              </button>
            </DialogClose>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* <label>
        <input
          type="checkbox"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOpenChange}
        />
        Open Modal
      </label> */}
    </>
  )
}

export default DialogCustomAPI
