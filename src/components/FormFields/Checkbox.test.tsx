import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly without a label', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
  
  it('renders with a label when provided', () => {
    render(<Checkbox label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Accept terms');
    
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  
  it('can be pre-checked via defaultChecked prop', () => {
    render(<Checkbox defaultChecked />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeChecked();
  });
  
  it('handles disabled state', () => {
    render(<Checkbox disabled label="Disabled checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeDisabled();
  });
  
  it('can be checked and unchecked by clicking', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Toggle me" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  
  it('calls onCheckedChange handler when clicked', async () => {
    const handleCheckedChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Checkbox onCheckedChange={handleCheckedChange} label="Click me" />);
    const checkbox = screen.getByRole('checkbox');
    
    await user.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
    
    await user.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledTimes(2);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
  });
  
  it('clicking on the label toggles the checkbox', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Click my label" />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Click my label');
    
    expect(checkbox).not.toBeChecked();
    
    await user.click(label);
    expect(checkbox).toBeChecked();
  });
  
  it('can be controlled via checked prop', async () => {
    const handleCheckedChange = vi.fn();
    const { rerender } = render(
      <Checkbox 
        checked={false} 
        onCheckedChange={handleCheckedChange}
        label="Controlled checkbox" 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    rerender(
      <Checkbox 
        checked={true} 
        onCheckedChange={handleCheckedChange}
        label="Controlled checkbox" 
      />
    );
    
    expect(checkbox).toBeChecked();
  });
});