import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})
export class Select implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() isImportant: boolean = false; // New parameter for validation
  @Input() errorMessage: string = ''; // Error message to display
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;
  selectedValue = '';
  selectedLabel = '';
  isTouched = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get displayValue(): string {
    return this.selectedLabel || this.placeholder;
  }

  get hasError(): boolean {
    return this.isImportant && this.isTouched && !this.selectedValue && !!this.errorMessage;
  }

  get shouldShowError(): boolean {
    return this.isImportant && !!this.errorMessage;
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (!this.isTouched) {
        this.markAsTouched();
      }
    }
  }

  selectOption(option: SelectOption) {
    this.selectedValue = option.value;
    this.selectedLabel = option.label;
    this.isOpen = false;
    this.markAsTouched();
    this.onChange(option.value);
    this.onTouched();
    this.selectionChange.emit(option.value);
  }

  markAsTouched() {
    this.isTouched = true;
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.selectedValue = value;
    const option = this.options.find(opt => opt.value === value);
    this.selectedLabel = option ? option.label : '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
