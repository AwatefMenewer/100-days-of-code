'use strict';

var Visibility = false;
var toggle = function toggle() {
    Visibility = !Visibility;
    renderAapp();
};

var renderAapp = function renderAapp() {
    var app = document.getElementById('visable');
    var templates = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            Visibility ? 'Hide details' : 'Show details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see!'
            )
        )
    );
    ReactDOM.render(templates, app);
};

renderAapp();
