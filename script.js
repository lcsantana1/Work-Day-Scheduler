$('#currentDay').text(moment().format('MMMM Do YYYY'))

var currentHour = moment().hour();

function createHtml() {

    for (var i = 9; i < 19; i++) {
        // create the elements
        var div = $('<div>');

        var hour = $('<div>');
        var textarea = $('<textarea>');
        var button = $('<button>');
        // conditional to check the time and add the class for formatting
        if (i < currentHour) {
            div.addClass('past');
        } else if (i === currentHour) {
            div.addClass('present');
        } else {
            div.addClass('future');
        }

        // add  the classes to the elements
        div.addClass('time-block row');
        div.attr('id', i)
        hour.addClass('hour col-1');
        textarea.addClass('description col-10')
        textarea.text(localStorage.getItem(i))
        button.addClass('saveBtn btn col-1')
        var hourDisplay = i
        // add the content to the elements
        var suffix = 'AM'
        if (i >= 12) {

            suffix = 'PM'
        }
        if (hourDisplay === 13) {
            hourDisplay = 1
        }
        if (hourDisplay === 14) {
            hourDisplay = 2
        }
        if (hourDisplay === 15) {
            hourDisplay = 3
        }
        if (hourDisplay === 16) {
            hourDisplay = 4
        }
        if (hourDisplay === 17) {
            hourDisplay = 5
        }
        if (hourDisplay === 18) {
            hourDisplay = 6
        }

        hour.text(hourDisplay + suffix)
        button.text('save')

        // adds event listener to all the buttons
        button.on('click', saveToLocal)
        // append the elements to the html
        div.append(hour, textarea, button)
        $('.container').append(div)

    }

}


function saveToLocal() {
    // // add our click event that will save our content to local storage
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value);
}




// call the function on page load
createHtml()