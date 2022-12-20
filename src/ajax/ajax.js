

$('#btn').on('click', function (event) {
    $.get("http://localhost:8000/ajax/students.json",function(data, status){

        for (let index = 0; index < data.students.length; index++) {
            const element = data.students[index];
            
            $('#dataGrid').append(`${element.name}`);
        }
    
    });
});

$.get("https://dummyjson.com/quotes",function(data, status){

        for (let index = 0; index < data.quotes.length; index++) {
            const element = data.quotes[index];
            
            $('body').append(`<p>${element.quote}</p>`);
        }
    
    });

