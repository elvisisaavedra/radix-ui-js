import * as Dialog from '@radix-ui/react-dialog'

const DialogWithStyles = () => (
  <Dialog.Root>
    <Dialog.Trigger>Dialog with styles</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="radix-modal" />
      <Dialog.Content className="radix-modal-content">
        <Dialog.Close className="radix-close">X</Dialog.Close>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>
          Make changes to your profile here. Click save when you are done.
        </Dialog.Description>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input id="username" defaultValue="@peduarte" />
        </fieldset>
        <div
          style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}
        >
          <Dialog.Close>Close</Dialog.Close>
          <button>Save changes</button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogWithStyles
