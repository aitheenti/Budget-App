var budgetcontroller = (function(){

})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, //Will be either income or expense
           description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        };
    },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    //Event Listeners
    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            } 
    });
};


    var ctrlAddItem = function() {
        //Getting the input data
        var input = UICtrl.getInput();
        console.log(input);

        //To add the item to Budget Controller

        //Add item to the UI 

        //To calculate the budget 

        //Display budget on the UI
    };


    return {
        init: function() {
            console.log('appl')
            setupEventListeners();
        }
    }    

})(budgetcontroller,UIController);


controller.init();