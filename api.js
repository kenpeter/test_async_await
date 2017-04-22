// fetch
const fetch = require('node-fetch');

//
var Mailchimp = require('mailchimp-api-v3');
var api_key = '2410676467f24345db784482166f30f3-us12';
var mailchimp = new Mailchimp(api_key);

// exports search func
// key, default page == 0
exports.search = () => {
  // const url
  // encode uri
  // leipin/zhaopin/key&page&searchbar
  const url = encodeURI(`https://jsonplaceholder.typicode.com/albums`);
    // return fetch url
    return fetch(url)
      // then res res.text()
      .then(res => res.text())
        // catch err
      .catch(err => {
        // print error
        console.log("Search Error: ".red, JSON.stringify(err, null, 4));
      });
};


// display a list
exports.list = () => {
  return mailchimp.get({
    path : '/lists'
  })
  .then(res => res.lists)
  .catch(err => {
    console.error(err);
  });

};


// create a list
exports.create_list = () => {
  var obj = {
    name: "test_mailchimp",
    contact: {
      company: "MailChimp",
      address1: "675 Ponce De Leon Ave NE",
      address2: "Suite 5000",
      city: "Atlanta",
      state: "GA",
      zip: "30308",
      country: "US",
      phone: "12345678"
    },
    permission_reminder: "You're receiving this email because you signed up for updates.",
    use_archive_bar: true,
    campaign_defaults: {
      from_name: "test",
      from_email: "test@test.com",
      subject: "test_subject",
      language: "en",
    },
	  notify_on_subscribe: "",
	  notify_on_unsubscribe: "",
	  email_type_option: true,
	  visibility: "pub",
  };

  return mailchimp.post('/lists', obj)
    .then(res => res)
    .catch(err => {
      console.error(err);
    });

};


// create a list
exports.create_member = (list_id) => {
  let obj = {
    email_address: "member@member.com",
    status: "subscribed"
  };

  let uri = 'lists/' + list_id + '/members';
  return mailchimp.post(uri, obj)
    .then(res => res)
    .catch(err => {
      console.error(err);
    });

};


exports.update_member = (list_id, member_id) => {
  let obj = {
    status: "unsubscribed"
  };

  let uri = 'lists/' + list_id + '/members/' + member_id;
  return mailchimp.patch(uri, obj)
    .then(res => res)
    .catch(err => {
      console.error(err);
    });

};
