// I had a hard time trying to come up with testing for each different function because of the simple fact that I didnt write this code base, so trying to implement everything on my own wouldve taken much longer than 1.5 - 3 hrs. (esp since this is my first time using jasmine). I did manage to do some of it on my own, but for the parts I couldnt figure out, I just walked through each test in the solution to understand what each function was doing, and what we were testing for. For me this was like a combination of practice reading a code base I didnt create, and learning more about unit testing. 

describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
    
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
      expect(sumPaymentTotal('tipAmt')).toEqual(40);


    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
      
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(200);
  
      });
  
      it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
      });

      it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(100, 99)).toEqual(99);
      });

      it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });

      it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
    
     
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });