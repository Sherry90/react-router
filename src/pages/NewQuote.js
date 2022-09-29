import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQouteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQouteHandler} />;
};

export default NewQuote;
