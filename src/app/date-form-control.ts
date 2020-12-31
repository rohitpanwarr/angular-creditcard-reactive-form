import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
    // Overriding setValue function of FormControl class
    setValue(value: string | null, options: any) {

        if (!value) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }

        // check value is not number.
        if (value.match(/[^0-9|\/gi]/)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }
        // value length is more that 5
        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }
        
        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, { ...options, emitModelToViewChange: true });
            return;
        }
        if (value.length === 2) {
            // pass on the value again to the FormControl Class
            super.setValue(value + '/', { ...options, emitModelToViewChange: true });    
            return;
        }
    }
}

