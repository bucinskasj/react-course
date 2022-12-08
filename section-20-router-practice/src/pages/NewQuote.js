import QuoteForm from "../components/quotes/QuoteForm";

const addQuoteHandler = quoteData => {
  console.log(quoteData);
}

const NewQuote = () => {
  return <QuoteForm onAddQuote={addQuoteHandler}/>
}

export default NewQuote;