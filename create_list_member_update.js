const api = require('./api');

const go = async () => {
  let res = '';

  // list all lists
  //console.log('---- list all lists ---');
  //const res = await api.list();

  // create a list
  console.log('---- create a list ---');
  res = await api.create_list();
  const list_id = res.id;
  console.log(res);

  // create a member
  console.log('---- create a member ---');
  res = await api.create_member(list_id);
  const member_id = res.id;
  console.log(res);

  // update a member
  console.log('---- update a member ---');
  res = await api.update_member(list_id, member_id);
  console.log(res);

}

//
go();
