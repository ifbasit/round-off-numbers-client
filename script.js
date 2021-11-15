 document.querySelector('button[type=submit]').onclick = function(e){
        var numbers = document.querySelectorAll('input[type=number]')
        for(var i = 0; i < numbers.length; i++){
           if(numbers[i].value !== '' && numbers[i].value.indexOf('.') !== -1){
                var val = parseFloat(numbers[i].value);
                var rounded = val.toFixed(0);    
                numbers[i].value = rounded;
                console.log(rounded);
           }
        }
    }
