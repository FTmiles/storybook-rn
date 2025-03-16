import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './InputField';

describe('Input', () => {
  it('renders correctly with default props', () => {
    render(<Input type="text" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text'); // Default type
  });

  it('applies custom className', () => {
    const customClass = 'custom-input';
    render(<Input className={customClass} placeholder="Custom input" />);
    const input = screen.getByPlaceholderText('Custom input');
    
    expect(input).toHaveClass(customClass);
  });

  it('accepts different input types', () => {
    render(<Input type="email" placeholder="Enter email" />);
    const input = screen.getByPlaceholderText('Enter email');
    
    expect(input).toHaveAttribute('type', 'email');
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    
    expect(input).toBeDisabled();
  });

  it('allows text input', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    
    await user.type(input, 'Hello world');
    expect(input).toHaveValue('Hello world');
  });

  it('passes other props to the input element', () => {
    render(<Input data-testid="test-input" name="testName" maxLength={10} />);
    const input = screen.getByTestId('test-input');
    
    expect(input).toHaveAttribute('name', 'testName');
    expect(input).toHaveAttribute('maxLength', '10');
  });
});