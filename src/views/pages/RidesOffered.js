const $  = require( 'jquery' );
const dt = require( 'datatables.net' )();

let getRidesOffered = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        const json = await response.json();
        return json;
    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let RidesOffered = {
  render: async () => {
    let ridesOffered = await getRidesOffered();
    const view = `
      <table id="table_id" class="display">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Row 1 Data 1</td>
                <td>Row 1 Data 2</td>
            </tr>
            <tr>
                <td>Row 2 Data 1</td>
                <td>Row 2 Data 2</td>
            </tr>
        </tbody>
    </table>`;
    return view;
  },
  after_render: () => {

  }
}

export default RidesOffered;