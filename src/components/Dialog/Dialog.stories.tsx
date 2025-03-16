import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./Dialog";
import { Copy } from "lucide-react";
import { Button } from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs are purposefully interruptive, so they should be used sparingly. Built on top of Radix UI Dialog primitive."
      }
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: { 
      control: 'boolean',
      description: 'Controls the open state of the dialog',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      }
    },
    defaultOpen: { 
      control: 'boolean', 
      description: 'The initial open state when dialog is first rendered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    onOpenChange: { 
      description: 'Event handler called when open state changes',
      action: 'onOpenChange',
      table: {
        type: { summary: '(open: boolean) => void' },
      }
    },
    modal: { 
      control: 'boolean',
      description: 'Whether to block interaction with outside elements while dialog is open', 
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue="https://example.com/link/to/share"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};

