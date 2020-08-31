import React from 'react';

/* eslint-disable no-use-before-define */
function Auth() {
    return (
        <div className="g-signin2" data-onsuccess="onSignIn" />
    );
}

// eslint-disable-next-line no-unused-vars
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log(`ID: ${profile.getId()}`); // Do not send to your backend! Use an ID token instead.
    console.log(`Name: ${profile.getName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`); // This is null if the 'email' scope is not present.
}

export default Auth;
