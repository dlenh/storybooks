const moment = require("moment") // using moment to format date

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
    truncate: function (str, len) { // truncate string if it's too long
        if (str.length > len && str.length > 0) {
            let new_str = str + " "
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(" "))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + "..."
        }
        return str
    },
}