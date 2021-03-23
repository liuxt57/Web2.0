//check valid
var checkCases = {
    name: {//checkName:用户名6~18位英文字母、数字或下划线，必须以英文字母开头
        'Username should only contain alphabet, number and underline': function(text) {
            return /^\w*$/.test(text);
        },
        'Username should begin with alphabet': function(text) {
            return /^[a-z]/i.test(text);
        },
        'Username should have a length of 6~18 characters': function(text) {
            return /^\w{6,18}$/.test(text);
        }
    },
    sid: {//学号8位数字，不能以0开头
        'Student ID should only contain numbers': function(text) {
            return /^\d*$/.test(text);
        },
        'Student ID should begin with non-zero number': function(text) {
            return /^\d*$/.test(text);
        },
        'Student ID should have a length of 8 numbers': function(text) {
            return /^\d{8}$/.test(text);
        }
    },
    pwd: {//密码为6~12位数字、大小写字母、中划线、下划线
        'Password should only contain alphabet, number, underline and dash': function(text) {
            pwdRecord = text;
            return /^[a-z0-9_\-]*$/i.test(text);
        },
        'Password should have a length of 6~11 characters': function(text) {
            return /^[a-z0-9\-_]{6,12}$/i.test(text);
        }
    },
    rpwd: {//密码与重复密码一致
        'passwords should be the same' : function(text) {
            return text == pwdRecord;
        }
    },
    tel: {//电话11位数字，不能以0开头
        'Tel number should only contain numbers': function(text) {
            return /^\d*$/.test(text);
        },
        'Tel number should begin with non-zero number': function(text) {
            return /^[1-9]/.test(text);
        },
        'Tel number should have a length of 11 numbers': function(text) {
            return /^\d{11}$/.test(text);
        }
    },
    email: {
        "Email should only contain alphabet, number, '.', '_', '-' and '@'": function(text) {
            return /^(\w|\.|-|@)*$/i.test(text);
        },
        'Email should have exactly one @': function(text) {
            return /^(\w|\.|-)*@(\w|\.|-)*$/i.test(text);
        },
        "'@' should surround by alphabets and numbers": function(text) {
            return /\w@\w/.test(text);
        },
        'Email should begin with alphabet or number': function(text) {
            return /^[a-z0-9]/i.test(text);
        },
        'Email should end with alphabet': function(text) {
            return /[a-z]$/i.test(text);
        },
        "'-' or '.' should not appear continuously": function(text) {
            return /^[a-z0-9]([\-\.]?\w+)*@(\w+[\-\.]?)*[a-z]$/i.test(text);
        },
        'Email should have a valsid server postfix': function(text) {
            return /\.[a-z]{2,4}$/i.test(text);
        }
    }
}

var pwdRecord;

var finalCheck = {
    name: function(text) { return /^[a-z]\w{5,17}$/i.test(text); },
    pwd : function(text) { pwdRecord = text; return /^[a-z0-9\-_]{6,11}$/i.test(text); },
    rpwd : function(text) { return text == pwdRecord;},
    sid: function(text) { return /^[1-9]\d{7}$/.test(text); },
    tel: function(text) { return /^[1-9]\d{10}$/.test(text); },
    email: function(text) { return /^[a-z0-9]([\-_\.]?[a-z0-9]+)*@([a-z0-9_\-]+\.)+[a-zA-Z]{2,4}$/i.test(text); }
}

if (typeof module == 'object') {
    module.exports = {checkCases: checkCases, finalCheck: finalCheck};
}