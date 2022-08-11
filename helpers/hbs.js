const moment = require("moment") // using moment to format date

module.exports = {
    formatDate: function (date, format) {
        return moment(date).format(format)
    },
}