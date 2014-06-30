Timezone = {
  checkTimezone: function() {
    var timezoneChecked = Session.get("timezone-checked-flag");
    if (Meteor.userId() !== undefined && (timezoneChecked === undefined || timezoneChecked !== "true")) {
      var offset = new Date().getTimezoneOffset();
      offset = ((offset < 0 ? '+' : '-') 
            + this.pad(parseInt(Math.abs(offset / 60)), 2)
            + this.pad(Math.abs(offset % 60), 2));
      Meteor.users.update({_id: Meteor.userId()}, { $set : {"profile.timezone": offset}});
      Session.set("timezone-checked-flag", "true");
    }
  },
  pad: function(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  },
  getTimezoneOffset: function() {
    if (Meteor.userId()) {
      profile = Meteor.user().profile;
      if (typeof profile !== "undefined") {
        return profile.timezone;
      }
    }
  },
  GMTDateInUserTimezone: function(date) {
    if (Meteor.userId()) {
      date.setTime(date.getTime() + 36000 * parseInt(this.getTimezoneOffset()));
      return date;
    }
  }
};
if (Meteor.isClient) {
  Template.timezone.rendered = function() {
    Timezone.checkTimezone();
  };
}
