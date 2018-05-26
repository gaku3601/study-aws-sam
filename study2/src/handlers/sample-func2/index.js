const parse_event = {
  "GET": (event) => event.queryStringParameters,
  "POST": (event) => JSON.parse(event.body)
}

exports.handler = (event, context, callback) => {
  const $event = parse_event[event.httpMethod](event);
  console.log('LOG: Name is ' + $event.name);
  callback(null, {
      statusCode: 200,
      body: "Hello " + $event.name
  });
}
