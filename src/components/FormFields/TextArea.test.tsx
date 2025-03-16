import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('applies custom className', () => {
    const customClass = 'custom-textarea';
    render(<TextArea className={customClass} data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    
    expect(textarea).toHaveClass(customClass);
  });

  it('allows text input with multi-line content', async () => {
    const user = userEvent.setup();
    render(<TextArea data-testid="test-textarea" />);
    const textarea = screen.getByTestId('test-textarea');
    
    await user.type(textarea, 'Line 1\nLine 2\nLine 3');
    expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3');
  });

  it('handles onChange events', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<TextArea data-testid="test-textarea" onChange={handleChange} />);
    const textarea = screen.getByTestId('test-textarea');
    
    await user.type(textarea, 'Hello');
    expect(handleChange).toHaveBeenCalled();
  });
});