import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from './ui/dialog'

const DialogCustomAPI = () => {
  return (
    <Dialog>
      <DialogTrigger>
        Dialog Custom API
      </DialogTrigger>
      <DialogContent title={'Modal title'}>
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
  )
}

export default DialogCustomAPI
