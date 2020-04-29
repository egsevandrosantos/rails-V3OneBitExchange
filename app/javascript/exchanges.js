document.addEventListener('turbolinks:load', function() {
  document.getElementById('amount').addEventListener('input', debounce(function() {
    document.getElementById('exchange_form').requestSubmit();
  }, 500));

  document.getElementById('exchange_form').addEventListener('ajax:success', function(event) {
    let [result] = event.detail;
    document.getElementById('result').value = result.value;
  });

  const data_transfers = document.getElementsByClassName('data-transfer');
  for (let i = 0, l = data_transfers.length; i < l; i++) {
    data_transfers[i].addEventListener('click', function() {
      const source_currency = document.getElementById('source_currency');
      const amount = document.getElementById('amount');
      const target_currency = document.getElementById('target_currency');
      const result = document.getElementById('result');
      const aux_currency = source_currency.value;
      const amount_value = amount.value;
      source_currency.value = target_currency.value;
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
