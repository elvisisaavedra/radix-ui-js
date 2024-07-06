import * as Dialog from "@radix-ui/react-dialog";

const DialogWithStyles = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Dialog with styles</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="radix-modal" />
      <Dialog.Content className="radix-modal-content">
        <Dialog.Close className="radix-close" asChild>
          <button aria-label="Close">X</button>
        </Dialog.Close>
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
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button>Close</button>
          </Dialog.Close>
          <button>Save changes</button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogWithStyles;
