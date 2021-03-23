var validator = {
    form: {
        username: {
            status: false,
            erroMessage: '6~18位英文字母，数字或下划线，必须以英文字母开头'
        },
        sid: {
            status: false,
            erroMessage: '8位数字，不能以0开头'
        },
        phone: {
            status: false,
            erroMessage: '11位数字，不能以0开头'
        },
        email: {
            status: false,
            erroMessage: '请输入合法邮箱'
        }
    },

    isUsernameValid: function(username){
        return this.form.username.status = /^[a-zA-Z][a-zA-Z0-9]{6,18}$/.test(username);
    },

    isSidValid: function(sid){
        return this.form.sid.status = /^[0-9]\d{7}$/.test(sid);
    },

    isPhoneValid: function(phone){
        return this.form.phone.status = /^[0-9]\d{10}$/.test(sid);
    },

    isEmailValid: function(email){
        return this.form.email.status = /^[a-zA-Z_\-]+@([a-zA-Z_\-]+\.)+[a-zA-Z]{2,4}$/.test(email);
    },

    isFieldValid: function(fieldname, value){
        var CapFieldname = fieldname[0].toUpperCase() + fieldname.slice(1, fieldname.length);
        return this["is" + CapFieldname + 'Valid'](value);
    },

    isFormValid: function(){
        return this.form.username.status && this.form.sid.status && this.form.phone.status && this.form.email.status;
    },

    getErrorMessage: function(fieldname){
        return this.form[fieldname].erroMessage;
    },

    isAttrValueUnique: function(registry, user, attr){//每个域不可重复
        for(var key in registry){
            if(registry.hasOwnProperty(key) && registry[key][attr] == user[attr])
            return false;
        }k
        return true;
    }
}

if(typeof module == 'object'){ //服务器共享
    module.exports = validator
}