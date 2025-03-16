import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Dialog';
import { Button } from '../Button/Button';

describe('Dialog', () => {
  const renderDialog = () => {
    return render(
      <Dialog>
        <DialogTrigger asChild>
          <Button data-testid="open-button">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle data-testid="dialog-title">Dialog Title</DialogTitle>
            <DialogDescription data-testid="dialog-description">
              Dialog description content
            </DialogDescription>
          </DialogHeader>
          <div data-testid="dialog-body">Dialog body content</div>
          <DialogFooter data-testid="dialog-footer">
            <DialogClose asChild>
              <Button data-testid="close-button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  it('renders the trigger button', () => {
    renderDialog();
    expect(screen.getByTestId('open-button')).toBeInTheDocument();
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('does not render dialog content initially', () => {
    renderDialog();
    expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked and shows content', async () => {
    const user = userEvent.setup();
    renderDialog();
    
    // Dialog is closed initially
    expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
    
    // Click trigger button to open
    await user.click(screen.getByTestId('open-button'));
    
    // Dialog content should appear
    const dialogContent = await screen.findByTestId('dialog-content');
    expect(dialogContent).toBeInTheDocument();
    
    // Check that all parts of dialog are rendered
    expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-description')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-footer')).toBeInTheDocument();
  });

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup();
    renderDialog();
    
    // Open the dialog
    await user.click(screen.getByTestId('open-button'));
    expect(await screen.findByTestId('dialog-content')).toBeInTheDocument();
    
    // Click close button
    await user.click(screen.getByTestId('close-button'));
    
    // Dialog should no longer be in the document
    await waitFor(() => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument();
    });
  });

  it('applies custom className to DialogHeader', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader className="custom-header-class" data-testid="custom-header">
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    
    expect(screen.getByTestId('custom-header')).toHaveClass('custom-header-class');
  });

  it('applies custom className to DialogFooter', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter className="custom-footer-class" data-testid="custom-footer">
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
    
    expect(screen.getByTestId('custom-footer')).toHaveClass('custom-footer-class');
  });

  it('renders DialogTitle and DialogDescription with correct styles', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle data-testid="styled-title">Styled Title</DialogTitle>
            <DialogDescription data-testid="styled-description">Styled Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    
    expect(screen.getByTestId('styled-title')).toHaveClass('text-lg');
    expect(screen.getByTestId('styled-description')).toHaveClass('text-sm');
  });
});