import Layout from '../components/layout';

export default function Rate() {
  return (
    <Layout>
      <h1>Rate your burger</h1>
      <div className="form-continer grid md:grid-cols-2 md:gap-4">
        <form action="post" className='flex flex-col'>
          <label htmlFor="restaurant">Restaurang</label>
          <input type="text" name="restaurant" id="restaurant" />
          <label htmlFor="burger">Burgare</label>
          <input type="text" name="burger" id="burger" />
          <label htmlFor="grade">Poäng</label>
          <input type="range" min="1" max="10" name="grade" id="grade" />
          <label htmlFor="image">Bild</label>
          <input type="file" name="image" id="image" />
        </form>
        <div>
          <p>Tvingande fält är markerade med en asterisk <abbr title="Tvingande fält">*</abbr></p>
          <div id="form-message" className="form-message" role="alert" aria-atomic="true">
          </div>
        </div>
      </div>
    </Layout>
  );
}
