import { expect } from 'chai';
import { createCalculator } from '../addSubstract.js';

describe('createCalculator', function() {
    
    let calculator;

    beforeEach(function() {
        calculator = createCalculator();
    });
    
    it('should return 0 as the initial value', function() {
        expect(calculator.get()).to.equal(0);
    });
    
    it('should add numbers correctly', function() {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });
   
    it('should subtract numbers correctly', function() {
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);
    });
    
    it('should work with string numbers', function() {
        calculator.add('10');
        expect(calculator.get()).to.equal(10);
    });

    it('should add and subtract correctly', function() {
        calculator.add(10);
        calculator.subtract(4);
        expect(calculator.get()).to.equal(6);
    });
    
    it('should keep independent values for different instances', function() {
        const calculator1 = createCalculator();
        const calculator2 = createCalculator();
        
        calculator1.add(10);
        calculator2.add(5);
        
        expect(calculator1.get()).to.equal(10);
        expect(calculator2.get()).to.equal(5); 
    });
    
    it('should return NaN when invalid value is passed to add', function() {
        calculator.add('abc');
        expect(calculator.get()).to.be.NaN;

    it('should return NaN when invalid value is passed to subtract', function() {
        calculator.subtract('abc');
        expect(calculator.get()).to.be.NaN;
    });

});
});