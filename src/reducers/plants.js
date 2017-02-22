function plants(state = [], action) {
  switch (action.type) {
    case 'LIKE_PLANT':
    console.log('logging plant!');
    return state;

    default:
    return state;
  }

  return state;
}

export default plants;
