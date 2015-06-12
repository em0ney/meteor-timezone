Timezone = {
  checkTimezone: function() {
    var timezoneChecked = Session.get('timezone-checked-flag');
    if (Meteor.userId() !== undefined && !timezoneChecked) {
      var offset = new Date().getTimezoneOffset();
      offset = ((offset < 0 ? '+' : '-')
            + this.pad(parseInt(Math.abs(offset / 60)), 2)
            + this.pad(Math.abs(offset % 60), 2));
      Meteor.call('saveUserTimezone', offset, function(err, res) {
        if (err) {
          Session.set('timezone-checked-flag', false);
          console.log('em0ney:timezone - could not save user timezone');
        } else {
          Session.set('timezone-checked-flag', true);
        }
      });

    }
  },

  pad: function(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }

    return str;
  },

  getTimezoneOffset: function() {
    if (Meteor.userId()) {
      profile = Meteor.user().profile;
      if (typeof profile !== 'undefined') {
        return profile.timezone;
      }
    }
  },

  userTimeFromGMT: function(date) {
    if (Meteor.userId()) {
      date.setTime(date.getTime() + 36000 * parseInt(this.getTimezoneOffset()));
      return date;
    }
  },

  userTimeToGMT: function(date) {
    if (Meteor.userId()) {
      date.setTime(date.getTime() - 36000 * parseInt(this.getTimezoneOffset()));
      return date;
    }
  }
};
if (Meteor.isClient) {
  if (Meteor.user()) {
    Tracker.autorun(function() {
      if (!Session.get('timezone-checked-flag')) {
        Timezone.checkTimezone();
      }
    });
  }
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    Meteor.methods({
      saveUserTimezone: function(timezoneOffset) {
        if (this.userId) {
          Meteor.users.update({_id: this.userId}, { $set: {'profile.timezone': timezoneOffset}});
        }
      }
    });
  });
}
