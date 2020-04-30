// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import '../stylesheets/application.scss'

document.addEventListener('turbolinks:load', function() {
  document.getElementById('amount').addEventListener('input', debounce(function() {
    document.getElementById('form').requestSubmit();
  }, 500));

  document.getElementById('form').addEventListener('ajax:success', function(event) {
    let [result] = event.detail;
    document.getElementById('result').value = result.value;
  });

  const data_transfers = document.getElementsByClassName('data-transfer');
  for (let i = 0, l = data_transfers.length; i < l; i++) {
    data_transfers[i].addEventListener('click', function() {
      const changeEvent = document.createEvent("HTMLEvents");
      changeEvent.initEvent("change", false, true);
      const source_currency = document.getElementById('source_currency');
      const amount = document.getElementById('amount');
      const target_currency = document.getElementById('target_currency');
      const result = document.getElementById('result');
      const aux_currency = source_currency.value;
      const amount_value = amount.value;
      source_currency.value = target_currency.value;
      source_currency.dispatchEvent(changeEvent);
      target_currency.value = aux_currency;
      amount.value = result.value;
      result.value = amount_value;
    });
  }
});

const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
