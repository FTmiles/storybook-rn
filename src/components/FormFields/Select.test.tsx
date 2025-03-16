import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select, SelectItem } from './Select';

describe('Select', () => {
  // Helper to render a standard select with options
  const renderSelect = (props = {}) => {
    return render(
      <Select placeholder="Select an option" {...props}>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </Select>
    );
  };

  it('renders with a placeholder', () => {
    renderSelect();
    const trigger = screen.getByRole('combobox');
    const placeholder = screen.getByText('Select an option');
    
    expect(trigger).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    renderSelect({ disabled: true });
    const trigger = screen.getByRole('combobox');
    
    expect(trigger).toHaveAttribute('data-disabled', '');
  });

  it('can have a default selected value', () => {
    renderSelect({ defaultValue: 'option2' });
    
    // In the initial state, we should see the selected option text
    expect(screen.queryByText('Select an option')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});