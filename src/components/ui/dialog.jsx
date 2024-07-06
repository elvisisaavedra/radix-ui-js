import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogClose = DialogPrimitive.Close;

const DialogFooter = ({ className, ...props }) => (
  <div className={`modal-footer ${className}`} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogContent = React.forwardRef(
  ({ className, children, title, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        ref={ref}
        className={`modal ${className}`}
        aria-describedby={undefined}
        {...props}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-header'>
              <DialogPrimitive.Title className="modal-title fs-5">
                {title}
              </DialogPrimitive.Title>

              <DialogPrimitive.Close asChild>
                <button className="btn-close" aria-label="Close"></button>
              </DialogPrimitive.Close>
            </div>
            {children}
          </div>
        </div>
      </DialogPrimitive.Content>
      <DialogPrimitive.Overlay className="modal-backdrop" />
    </DialogPrimitive.Portal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`modal-title fs-5 ${className}`}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export {
  Dialog,
  DialogClose,
  // DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
};
