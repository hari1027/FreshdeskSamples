var client;

(async function init() {
  client = await app.initialized();
  client.events.on('app.activated', getContacts);
})();

async function getContacts() {
  // const iparamData = await client.iparams.get('creatorDomain');
  // const URL = `https://${iparamData.creatorDomain}.freshdesk.com/api/v2/contacts`;
  // const options = {
  //   headers: {
  //     Authorization: `Basic <%= encode(iparam.api_key) %>`, // substitution happens by platform
  //     'Content-Type': 'application/json'
  //   }
  // };

  // let { response } = await client.request.get(URL, options);
  // let contacts = JSON.parse(response);

  let contacts = ["7358571391", "9840706545", "7305858044", "7358571527"]

  document.body.insertAdjacentHTML('beforebegin', '<h2>Listing contacts</h2>');
  contacts.forEach((number) => {
    return document.body.insertAdjacentHTML('afterbegin', `${number}<br>`);
  });
}
