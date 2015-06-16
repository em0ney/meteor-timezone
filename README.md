## Overview

This is a meteor package to help developers deal with users in different locations and displaying dates in their local timezone.

If you have users all over the world, it makes sense to store dates in a single timezone.  GMT/UTC is generally the timezone of choice.  This package is a simple way to capture your user's timezone and easily convert to and from GMT/UTC using the utility functions provided.

The package will capture the users local timezone once per session and store it in their User.profile document.  Also provided is a utility function that will show a given javascript date object in the user's local timezone.

## Installation

Install by typing `meteor add em0ney:timezone`

## Usage

Just install and we'll start tracking your user's timezones straight away.

#### Use the timezone offset

Getter:

    Timezone.getTimezoneOffset();
    	> "+1000"

Convert GMT/UTC time to user's timezone:

    Timezone.userTimeFromGMT(date);

Convert user time to GMT/UTCL

    Timezone.userTimeToGMT(date);

On the server side, `Timezone.checkTimezone()` will return the timezone offset of the server.
