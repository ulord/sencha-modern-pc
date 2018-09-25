/**
 * Ext处理cookie 
 */
Ext.define('ux.framework.Cookie', {
    alternateClassName: ['App.Cookie'],

    statics: {
        /**
        * 设置 cookie
        *       
        * @param {String} name Cookie名称
        * @param {String} value Cookie值
        * @static
        */
        SetCookie: function (name, value) {
            document.cookie = name + "=" + escape(value);
        },

        /**
         * 设置 cookie, 默认30天过期时间
         * @param {String} name Cookie名称
         * @param {String} value Cookie值
         * @param {String} expires
         * @static
         */
        SetExpiresCookie: function (name, value, expires) {
            var Days, exp;

            Days = 30; //cookie 将被保存 30 天
            exp = new Date();
            if (Ext.isEmpty(expires)) {
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            } else {
                exp = expires;
            }
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },

        /**
        * 获取 cookie
        * @param {String} name Cookie名称
        * @return {Object} Cookie值，没有返回null
        * @static
        */
        GetCookie: function (name) {
            var arr;

            arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));

            if (arr !== null) {
                return unescape(arr[2]);
            }
            return null;
        },

        /**
        * 删除 cookie
        * @param {String} name Cookie名称
        * @static
        */
        DeleteCookie: function (name) {
            var me = this, exp, cookieval;

            exp = new Date();

            exp.setTime(exp.getTime() - 1);
            cookieval = me.GetCookie(name);

            if (cookieval !== null) {
                document.cookie = name + "=" + cookieval;
            }
        }
    }
});