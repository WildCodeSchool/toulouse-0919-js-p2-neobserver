import React, { Component } from 'react';

function getDate() {
  // let userDate = value d'un element

  let date = new Date(userDate);
  let newDate = new Date(date);

  newDate.setDate(newDate.getDate() + 6);

  let y = newDate.getFullYear();
  let mm = newDate.getMonth() + 1;
  let dd = newDate.getDate();

  let formattedDate = `${y}-${mm}-${dd}`;
  // envoyer cette value dans un element
}
