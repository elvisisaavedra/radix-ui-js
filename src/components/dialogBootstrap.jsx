import * as Dialog from '@radix-ui/react-dialog';

const DialogBootstrap = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Dialog bootstrap</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Content className="modal" aria-describedby={null}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Dialog.Title asChild>
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              </Dialog.Title>

              <Dialog.Close asChild>
                <button className="btn-close" aria-label="Close"></button>
              </Dialog.Close>
            </div>

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

            <div className="modal-footer">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </Dialog.Close>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </Dialog.Content>
      <Dialog.Overlay className="modal-backdrop" />
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogBootstrap;
