module.exports = function (context, data) {
    
    var parsedForm = parseQuery(data.form);
    context.log(parsedForm);
    context.res = {
       body: parsedForm
    }
    context.done();
};

function parseQuery(qstr) {
        var query = {};
        var a = qstr.replace('+', ' ').substr(0).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }
    
