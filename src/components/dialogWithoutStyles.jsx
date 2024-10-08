import * as Dialog from '@radix-ui/react-dialog'

const DialogWithoutStyles = () => (
  <Dialog.Root>
    <Dialog.Trigger>Dialog without styles</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
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
        <Dialog.Close>X</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default DialogWithoutStyles
