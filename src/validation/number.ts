import { BaseValidation } from ".";

export class NumberValidation extends BaseValidation {
    isPositive() {
        return this.addRule((data: number) => {
            return data >= 0 ? { valid: true } : { valid: false, message: 'INVALID_POSITIVE' };
        });
    }

    isNegative() {
        return this.addRule((data: number) => {
            return data <= 0 ? { valid: true } : { valid: false, message: 'INVALID_NEGATIVE' };
        });
    }

    isZero() {
        return this.addRule((data: number) => {
            return data === 0 ? { valid: true } : { valid: false, message: 'INVALID_ZERO' };
        });
    }

    isOdd() {
        return this.addRule((data: number) => {
            return data % 2 !== 0 ? { valid: true } : { valid: false, message: 'INVALID_ODD_NUMBER' };
        });
    }

    isEven() {
        return this.addRule((data: number) => {
            return data % 2 === 0 ? { valid: true } : { valid: false, message: 'INVALID_EVEN_NUMBER' };
        });
    }
}
