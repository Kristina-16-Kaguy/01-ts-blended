type Currency = "USD" | "EUR" | "UAH";
interface convertCurrencyParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: convertCurrencyParams) {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 10, currency: "EUR" });
