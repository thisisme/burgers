import { NextPage } from 'next';
import Head from 'next/head'
import Layout from '../components/layout';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import { graphQLClient } from '../lib/graphql-client';
import { Form, Field } from 'react-final-form'

const Rate: NextPage = () => {

  const onSubmit = async (values: any ) => {
    console.log("submit", values)

    // const query = gql`
    //   mutation CreateATodo($task: String!) {
    //     createTodo(data: { task: $task, completed: false }) {
    //       task
    //       completed
    //     }
    //   }
    // `;

    // try {
    //   await graphQLClient.request(query, { burger });
    //   // Router.push('/');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Layout>
      <Head>
        <title>Betygsätt din burgare | Burgers @ srvr.at</title>
      </Head>
      <h1>Rate your burger</h1>
      <div className="form-continer grid md:grid-cols-2 md:gap-4">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col'>
                <div>
                  <label htmlFor="restaurant">Restaurang</label>
                  <Field
                    name="restaurant"
                    component="input"
                    type="text"
                    placeholder="Välj restaurang"
                  />
                </div>
                <div>
                  <label htmlFor="burger">Burgare</label>
                  <Field
                    name="burger"
                    component="input"
                    type="text"
                    placeholder="Vilken burgare blev det?"
                  />
                </div>
                <div>
                  <label htmlFor="grade">Poäng</label>
                  <Field
                    name="grade"
                    component="input"
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    placeholder="Hur bra var den?"
                  />
                </div>
                <div>
                  <label htmlFor="image">Bild</label>
                  <Field
                      name="image"
                      component="input"
                      type="file"
                      placeholder="Ladda upp bild"
                    />
                </div>
                <div>
                  <button
                    type="submit"
                    className='bg-megaman-500 px-2 py-1'>
                      Create
                  </button>
                </div>
              </form>
          )}
        />
        <div>
          <p>Tvingande fält är markerade med en asterisk <abbr title="Tvingande fält">*</abbr></p>
          <div id="form-message" className="form-message" role="alert" aria-atomic="true">
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rate;
