// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function (){
   it('should be a defined function', function(){
      expect(typeof sayHello).toBe('function');
   });
    it('should return a string when called.', function () {
      expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when executed', function (){
      expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed',function (){
      expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed',function (){
      expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when executed',function (){
      expect(sayHello()).toBe("Hello, World!");
    });
});

describe('isFive', function (){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called.', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when 5 is executed',function (){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when "5" executed',function (){
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function (){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return true when 2 is executed',function (){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is executed',function (){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is executed',function (){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is executed',function (){
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is executed',function (){
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is executed',function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when true is executed',function (){
        expect(isEven(true)).toBe(false);
    });
    it('should return false when "" executed',function (){
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function (){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when "a" is executed',function (){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is executed',function (){
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is executed',function (){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 is executed',function (){
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true or false is executed',function (){
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when "banana" is executed',function (){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when "" is executed',function (){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return 5 when (2, 3) is executed',function (){
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when (-3, -9) is executed',function (){
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when ("5", 6) is executed',function (){
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when ("-4", "10") is executed',function (){
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when ("banana", "split") is executed',function (){
        expect(add("banana", "split")).toBe('NaN');
    });
    it('should return NaN when (2, "apples") is executed',function (){
        expect(add(2, "apples")).toBe('NaN');
    });
    it('should return NaN when "" is executed',function (){
        expect(add()).toBe('NaN');
    });
});