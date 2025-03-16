import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, buttonVariants } from './Button';
import { cn } from '../../core/utils';

describe('Button', () => {
  // Test default rendering
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    // Verify default prop values are applied
    expect(button.className).toContain(cn(buttonVariants({  })));
  });

  // Test variants
  it('renders with high emphasis variant', () => {
    render(<Button emphasis="high">High</Button>);
    const primaryButton = screen.getByRole('button', { name: /high/i });
    
    expect(primaryButton.className).toContain(cn(buttonVariants({ emphasis: 'high' })));
  });

  it('renders with medium emphasis variant', () => {
    render(<Button emphasis="medium">Medium</Button>);
    const secondaryButton = screen.getByRole('button', { name: /medium/i });
    
    expect(secondaryButton.className).toContain(cn(buttonVariants({ emphasis: 'medium' })));
    
    // Compare medium and high emphasis to ensure they're different
    render(<Button emphasis="high">High</Button>);
    const primaryButton = screen.getByRole('button', { name: /high/i });
    expect(secondaryButton.className).not.toBe(primaryButton.className);
  });

  it('renders with low emphasis variant', () => {
    render(<Button emphasis="low">low</Button>);
    const secondaryButton = screen.getByRole('button', { name: /low/i });
    
    expect(secondaryButton.className).toContain(cn(buttonVariants({ emphasis: 'low' })));
    
    // Compare low and high emphasis to ensure they're different
    render(<Button emphasis="high">High</Button>);
    const primaryButton = screen.getByRole('button', { name: /high/i });
    expect(secondaryButton.className).not.toBe(primaryButton.className);
  });

  // Test sizes - each in a separate test
  it('renders with default size', () => {
    render(<Button>Default Size</Button>);
    const defaultButton = screen.getByRole('button', { name: /default size/i });
    expect(defaultButton.className).toContain(cn(buttonVariants({ })));
  });
  
  it('renders with small size', () => {
    render(<Button size="sm">Small</Button>);
    const smallButton = screen.getByRole('button', { name: /small/i });
    expect(smallButton.className).toContain(cn(buttonVariants({ size: 'sm' })));
    
    // Compare with default to ensure they're different
    render(<Button size="default">Default</Button>);
    const defaultButton = screen.getByRole('button', { name: /default/i });
    expect(smallButton.className).not.toBe(defaultButton.className);
  });
  
  it('renders with large size', () => {
    render(<Button size="lg">Large</Button>);
    const largeButton = screen.getByRole('button', { name: /large/i });
    expect(largeButton.className).toContain(cn(buttonVariants({ size: 'lg' })));
    
    // Compare with default to ensure they're different
    render(<Button size="default">Default</Button>);
    const defaultButton = screen.getByRole('button', { name: /default/i });
    expect(largeButton.className).not.toBe(defaultButton.className);
  });
  
  it('renders with icon size', () => {
    render(<Button size="icon">+</Button>);
    const iconButton = screen.getByRole('button', { name: /\+/i });
    expect(iconButton.className).toContain(cn(buttonVariants({ size: 'icon' })));
    
    // Compare with default to ensure they're different
    render(<Button size="default">Default</Button>);
    const defaultButton = screen.getByRole('button', { name: /default/i });
    expect(iconButton.className).not.toBe(defaultButton.className);
  });

  // Test disabled state
  it('renders in disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    
    expect(button).toBeDisabled();
    expect(button.className).toContain(cn(buttonVariants({ disabled: true })));
  });

  // Test click functionality
  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test disabled button doesn't call onClick
  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

});
