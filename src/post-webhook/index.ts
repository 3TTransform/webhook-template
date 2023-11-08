async function main(event: any) {
  event.body = JSON.parse(event.body);

  switch (`${event.body.verb} ${event.body.noun}`) {

    case 'create activity':
      console.info('🌈 create activity', event.body);
      break;
    case 'update activity':
      console.info('🌈 update activity', event.body);
      break;
    case 'delete activity':
      console.info('🌈 delete activity', event.body);
      break;

    case 'create profile':
      console.info('🌈 create profile', event.body);
      break;
    case 'update profile':
      console.info('🌈 update profile', event.body);
      break;
    case 'delete profile':
      console.info('🌈 delete profile', event.body);
      break;
    default:
      // handle unknown verb noun combo
      break;

  }
  return {
    body: JSON.stringify(event.body),
    statusCode: 200,
  };
}

module.exports = { main };
