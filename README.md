## Overview

This is a meteor package to help developers deal with users in different locations and displaying dates in their local timezone.

The package will capture the users local timezone once per session and store it in their User.profile document.  Also provided is a utility function that will show a given javascript date object in the user's local timezone.

## Installation

Install by typing `meteor add em0ney:timezone`

## Usage

#### Trigger to save timezone offset
Within your a template, include the timezone template.  This is an empty template, but is used for the rendered callback.

    {{> timezone }}

#### Use the timezone offset

Getter:

    Timezone.getTimezoneOffset();
    	> "+1000"

Convert GMT/UTC time to user's timezone:

    Timezone.GMTDateInUserTimezone(date);

Convert user time to GMT/UTCL

  Timezone.UserTimetoGMT(date);
